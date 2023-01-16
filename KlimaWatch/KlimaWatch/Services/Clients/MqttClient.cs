using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Nodes;
using KlimaWatch.Data;
using KlimaWatch.Data.Entities.Nodes;
using MQTTnet;
using MQTTnet.Client;

namespace KlimaWatch.Services.Clients;

public static class MqttClient
{
    private static readonly KlimaWatchContext Context = new();
    private const string Host1 = "eu1.cloud.thethings.network";
    private const string Name1 = "project-software-engineering@ttn";

    private const string Pass1 =
        "NNSXS.DTT4HTNBXEQDZ4QYU6SG73Q2OXCERCZ6574RVXI.CQE6IG6FYNJOO2MOFMXZVWZE4GXTCC2YXNQNFDLQL4APZMWU6ZGA";

    private const string Host2 = "eu1.cloud.thethings.network";
    private const string Name2 = "fipy-test-1@ttn";

    private const string Pass2 =
        "NNSXS.XVHEOFDCE637C55TH7EFD4PCHI2ECV2JP2BHYSY.BRQEGGHWL6J6QPJ77ZCW32SETIN3EC2NJYGYWO3JR5WIKI4DJ4EA";

    public static async Task ConnectClient()
    {
        var mqttFactory = new MqttFactory();

        var mqttClient1 = mqttFactory.CreateMqttClient();
        var mqttClient2 = mqttFactory.CreateMqttClient();

        var mqttClientOptions1 = new MqttClientOptionsBuilder()
            .WithTcpServer(Host1)
            .WithCredentials(Name1, Pass1)
            .WithTls()
            .WithCleanSession()
            .Build();

        var mqttClientOptions2 = new MqttClientOptionsBuilder()
            .WithTcpServer(Host2)
            .WithCredentials(Name2, Pass2)
            .WithTls()
            .WithCleanSession()
            .Build();

        await mqttClient1.ConnectAsync(mqttClientOptions1, CancellationToken.None);
        Console.WriteLine("Connected to " + Name1);
        await mqttClient2.ConnectAsync(mqttClientOptions2, CancellationToken.None);
        Console.WriteLine("Connected to " + Name2);

        var subOptions1 = mqttFactory.CreateSubscribeOptionsBuilder()
            .WithTopicFilter(f => f.WithTopic("v3/project-software-engineering@ttn/devices/py-wierden/up"))
            .WithTopicFilter(f => f.WithTopic("v3/project-software-engineering@ttn/devices/py-saxion/up"))
            .WithTopicFilter(f => f.WithTopic("v3/project-software-engineering@ttn/devices/lht-saxion/up"))
            .WithTopicFilter(f => f.WithTopic("v3/project-software-engineering@ttn/devices/lht-wierden/up"))
            .WithTopicFilter(f => f.WithTopic("v3/project-software-engineering@ttn/devices/lht-gronau/up"))
            .Build();

        var subOptions2 = mqttFactory.CreateSubscribeOptionsBuilder()
            .WithTopicFilter(f => f.WithTopic("v3/fipy-test-1@ttn/devices/eui-70b3d57ed00581da/up"))
            .Build();

        await mqttClient1.SubscribeAsync(subOptions1, CancellationToken.None);
        await mqttClient2.SubscribeAsync(subOptions2, CancellationToken.None);

        mqttClient1.ApplicationMessageReceivedAsync += OnMessageReceived;
        mqttClient2.ApplicationMessageReceivedAsync += OnMessageReceived;

        mqttClient1.DisconnectedAsync += async args =>
        {
            if (args.ClientWasConnected)
            {
                await mqttClient1.ConnectAsync(mqttClient1.Options);
            }
        };

        mqttClient2.DisconnectedAsync += async args =>
        {
            if (args.ClientWasConnected)
            {
                await mqttClient2.ConnectAsync(mqttClient2.Options);
            }
        };
    }

    private static async Task OnMessageReceived(MqttApplicationMessageReceivedEventArgs args)
    {
        try
        {
            var payload = Encoding.UTF8.GetString(args.ApplicationMessage.Payload);
            var message = ParseNodeMessage(JsonNode.Parse(payload)!);

            Console.WriteLine("Received message from: " + message.NodeInfo.DeviceName);
            await StoreMessageAsync(message);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
    }

    private static async Task StoreMessageAsync(NodeMessage message)
    {
        if (!IsEntityStateValid(message)) throw new ArgumentException("Message model is invalid");
        if (!IsEntityStateValid(message.NodeInfo)) throw new ArgumentException("Node model is invalid");

        var node = message.NodeInfo;

        var exists = await Context.Nodes.FindAsync(node.DeviceEui);
        if (exists == null)
        {
            await Context.Nodes.AddAsync(node);
        }
        else
        {
            exists.Altitude = node.Altitude;
            exists.Latitude = node.Latitude;
            exists.Longitude = node.Longitude;
            exists.ApplicationId = node.ApplicationId;
            exists.DeviceName = node.DeviceName;
            exists.SensorType = node.SensorType;

            Context.Nodes.Update(exists);
            message.NodeInfo = exists;
        }

        await Context.NodeMessages.AddAsync(message);
        await Context.SaveChangesAsync();
    }

    private static bool IsEntityStateValid(object model)
    {
        var validationContext = new ValidationContext(model);
        var validationResults = new List<ValidationResult>();

        return Validator.TryValidateObject(model, validationContext, validationResults,
            validateAllProperties: true);
    }

    private static NodeMessage ParseNodeMessage(JsonNode json)
    {
        var root = json!.Root;
        var endDevice = root["end_device_ids"]!;
        var uplinkMessage = root["uplink_message"]!;
        var location = uplinkMessage["rx_metadata"]![0]!["location"]!;
        var decodedPayload = uplinkMessage["decoded_payload"]!;
        var deviceName = endDevice["device_id"]!.ToString();

        var sensorType = deviceName switch
        {
            { } when deviceName.StartsWith("lht-") => SensorType.Outdoor,
            { } when deviceName.StartsWith("py-") => SensorType.Indoor,
            { } when deviceName.StartsWith("eui-") => SensorType.Indoor,
            _ => throw new ArgumentException("Invalid sensor type")
        };

        var nodeInfo = new NodeInfo
        {
            DeviceEui = endDevice["dev_eui"]!.ToString(),
            ApplicationId = endDevice["application_ids"]!["application_id"]!.ToString(),
            DeviceName = endDevice["device_id"]!.ToString(),
            Latitude = location["latitude"]?.ToString(),
            Longitude = location["longitude"]?.ToString(),
            Altitude = location["altitude"]?.ToString(),
            SensorType = sensorType
        };

        NodeMessage nodeMessage;

        if (sensorType == SensorType.Indoor)
        {
            nodeMessage = new IndoorNodeMessage
            {
                Light = int.Parse(decodedPayload["light"]!.ToString()),
                Temperature = double.Parse(decodedPayload["temperature"]!.ToString()),
                Pressure = double.Parse(decodedPayload["pressure"]!.ToString()),
            };
        }
        else
        {
            var indoorTemp = decodedPayload["TempC_SHT"]?.ToString();
            var outdoorTemp = decodedPayload["TempC_DS"]?.ToString();
            var humidity = decodedPayload["Hum_SHT"]?.ToString();
            var batteryVoltage = decodedPayload["BatV"]?.ToString();
            var illumination = decodedPayload["ILL_lx"]?.ToString();

            nodeMessage = new OutdoorNodeMessage
            {
                IndoorTemp = indoorTemp != null ? double.Parse(indoorTemp) : null,
                OutdoorTemp = outdoorTemp != null ? double.Parse(outdoorTemp) : null,
                Humidity = humidity != null ? double.Parse(humidity) : null,
                BatteryVoltage = batteryVoltage != null ? double.Parse(batteryVoltage) : null,
                Illumination = illumination != null ? double.Parse(illumination) : null,
            };
        }

        nodeMessage.DeviceEui = endDevice["dev_eui"]!.ToString();
        nodeMessage.NodeInfo = nodeInfo;
        nodeMessage.ReceivedAt = DateTime.Parse(root["received_at"]!.ToString());
        nodeMessage.SpreadingFactor =
            int.Parse(uplinkMessage["settings"]!["data_rate"]!["lora"]!["spreading_factor"]!.ToString());

        return nodeMessage;
    }
}