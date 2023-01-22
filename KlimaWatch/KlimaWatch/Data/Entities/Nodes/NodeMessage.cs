using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KlimaWatch.Data.Entities.Nodes;

/**
 * Base class for node messages
 */
public class NodeMessage
{
    public NodeMessage()
    {
        
    }

    public NodeMessage(DateTime receivedAt, int spreadingFactor, NodeInfo nodeInfo, string id = null)
    {
        Id = id;
        ReceivedAt = receivedAt;
        SpreadingFactor = spreadingFactor;
        DeviceEui = nodeInfo.DeviceEui;
        NodeInfo = nodeInfo;
    }
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; }

    [Required] public DateTime ReceivedAt { get; set; }
    [Required] public int SpreadingFactor { get; set; }

    public string DeviceEui { get; set; }
    public NodeInfo NodeInfo { get; set; }
}