
using KlimaWatch.Data;
using KlimaWatch.Data.Entities.Nodes;
using KlimaWatch.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace KlimaWatch.Services;

public class NodesService : BaseService, INodesService
{
    public NodesService(KlimaWatchContext context) : base(context)
    {
    }

    /*
     * Removes an existing node and all of its messages from the database
     */
    public async Task DeleteNodeAsync(string deviceEui)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");

        var node = await Context.Nodes.FindAsync(deviceEui);

        if (node == null) throw new ArgumentException("DeviceEUI is invalid");

        var messages = Context.NodeMessages
            .Where(nm => nm.DeviceEui == deviceEui);

        Context.NodeMessages.RemoveRange(messages);
        Context.Nodes.Remove(node);
        await Context.SaveChangesAsync();
    }

    /**
     * Removes an existing message from the database
     */
    public async Task DeleteMessageAsync(string messageId)
    {
        if (messageId == null) throw new NullReferenceException("Message id is null");

        var message = await Context.NodeMessages.FindAsync(messageId);

        if (message == null) throw new ArgumentException("Message id is invalid");

        Context.NodeMessages.Remove(message);
        await Context.SaveChangesAsync();
    }

    /**
     * Returns the details of an existing node 
     */
    public async Task<NodeInfo> GetNodeDetailsAsync(string deviceEui)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");

        var node = await Context.Nodes.FindAsync(deviceEui);

        if (node == null) throw new ArgumentException("DeviceEUI is invalid");

        return node;
    }

    /**
     * Returns a list of all connected nodes
     */
    public async Task<ICollection<NodeInfo>> GetAllNodesAsync()
    {
        return await Context.Nodes.ToListAsync();
    }

    /**
     * Returns a list of all messages
     */
    public async Task<ICollection<NodeMessage>> GetAllMessagesAsync()
    {
        return await Context.NodeMessages.Include(n => n.NodeInfo).ToListAsync();
    }

    /**
     * Returns a list of all messages from a specific node
     */
    public async Task<ICollection<NodeMessage>> GetMessagesFromNodeAsync(string deviceEui)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");

        return await Context.NodeMessages
            .Where(nm => nm.DeviceEui == deviceEui)
            .ToArrayAsync();
    }

    /**
     * Returns a list of messages sent during a given timeframe
     */
    public async Task<ICollection<NodeMessage>> GetMessagesBetweenAsync(DateTime from, DateTime to)
    {
        if (from > to) throw new InvalidOperationException("Time frame is invalid");

        var messages = await Context.NodeMessages
            .Where(nm => nm.ReceivedAt >= from && nm.ReceivedAt <= to)
            .ToListAsync();
        return messages;
    }

    /*
     * Returns a list of messages sent by a specific node during a given timeframe
     */
    public async Task<ICollection<NodeMessage>> GetNodeMessagesBetweenAsync(string deviceEui, DateTime from, DateTime to)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");
        if (from > to) throw new InvalidOperationException("Time frame is invalid");

        var node = await Context.Nodes.FindAsync(deviceEui);
        
        if (node == null) throw new ArgumentException("DeviceEUI is invalid");
        
        return await Context.NodeMessages
            .Where(nm => nm.ReceivedAt >= from && nm.ReceivedAt <= to && nm.DeviceEui == deviceEui)
            .ToListAsync();
    }
}