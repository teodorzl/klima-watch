using System.ComponentModel.DataAnnotations;

namespace KlimaWatch.Data.Entities.Nodes;

public class IndoorNodeMessage : NodeMessage
{
    public IndoorNodeMessage()
    {
    }

    public IndoorNodeMessage(DateTime receivedAt, int spreadingFactor, NodeInfo nodeInfo,
        double temperature, int light, double pressure, string id = null) :
        base(receivedAt, spreadingFactor, nodeInfo, id)
    {
        Temperature = temperature;
        Light = light;
        Pressure = pressure;
    }
    [Required] public double Temperature { get; set; }
    [Required] public int Light { get; set; }
    [Required] public double Pressure { get; set; }
}