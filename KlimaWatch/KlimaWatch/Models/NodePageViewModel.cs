using KlimaWatch.Data.Entities.Nodes;

namespace KlimaWatch.Models;

public class NodePageViewModel
{
    public NodeInfo NodeInfo { get; set; }
    public ICollection<NodeMessage> NodeMessages { get; set; }
}