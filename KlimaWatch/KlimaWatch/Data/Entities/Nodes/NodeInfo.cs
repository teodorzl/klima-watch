using System.ComponentModel.DataAnnotations;

namespace KlimaWatch.Data.Entities.Nodes;

public class NodeInfo
{
    public NodeInfo()
    {
    }
    public NodeInfo(string deviceEui, string applicationId, string deviceName, string longitude, string latitude, string altitude, SensorType sensorType)
    {
        DeviceEui = deviceEui;
        ApplicationId = applicationId;
        DeviceName = deviceName;
        Longitude = longitude;
        Latitude = latitude;
        Altitude = altitude;
        SensorType = sensorType;
    }
    [Key] public string DeviceEui { get; set; }
    [Required] public string ApplicationId { get; set; }
    [Required] public string DeviceName { get; set; }
    public string Longitude { get; set; }
    public string Latitude { get; set; }
    public string Altitude { get; set; }
    [Required] public SensorType SensorType { get; set; }
}