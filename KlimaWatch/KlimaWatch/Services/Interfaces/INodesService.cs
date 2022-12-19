using KlimaWatch.Data.Entities.Nodes;

namespace KlimaWatch.Services.Interfaces;

public interface INodesService
{
    public Task DeleteNodeAsync(string deviceEui);
    public Task DeleteMessageAsync(string messageId);
    public Task<NodeInfo> GetNodeDetailsAsync(string deviceEui);
    public Task<ICollection<NodeInfo>> GetAllNodesAsync();
    public Task<ICollection<NodeMessage>> GetAllMessagesAsync();
    public Task<ICollection<NodeMessage>> GetMessagesFromNodeAsync(string deviceEui);
    public Task<ICollection<NodeMessage>> GetMessagesBetweenAsync(DateTime from, DateTime to);
    public Task<ICollection<NodeMessage>> GetNodeMessagesBetweenAsync(string deviceEui, DateTime from, DateTime to);
}