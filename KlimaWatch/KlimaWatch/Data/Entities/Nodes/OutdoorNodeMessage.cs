using System.ComponentModel.DataAnnotations;

namespace KlimaWatch.Data.Entities.Nodes;

public class OutdoorNodeMessage : NodeMessage
{
    public OutdoorNodeMessage()
    {
    }

    public OutdoorNodeMessage(DateTime receivedAt, int spreadingFactor, NodeInfo nodeInfo,
        double? indoorTemp, double? outdoorTemp, double? humidity, double? batteryVoltage, double? illumination, 
        string id = null) :
        base(receivedAt, spreadingFactor, nodeInfo, id)
    {
        IndoorTemp = indoorTemp;
        OutdoorTemp = outdoorTemp;
        Humidity = humidity;
        BatteryVoltage = batteryVoltage;
        Illumination = illumination;
    }

    public double? IndoorTemp { get; set; }
    public double? OutdoorTemp { get; set; }
    public double? Humidity { get; set; }
    public double? BatteryVoltage { get; set; }
    public double? Illumination { get; set; }
}