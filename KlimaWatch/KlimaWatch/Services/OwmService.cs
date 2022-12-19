using KlimaWatch.Data;
using KlimaWatch.Data.Entities.OwmModels;
using KlimaWatch.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace KlimaWatch.Services;

public class OwmService : BaseService, IOwmService
{
    public OwmService(KlimaWatchContext context) : base(context)
    {
    }

    /**
     * Get the most recent weather data from the node location
     */
    public async Task<HourlyWeather> GetLatestDataAsync(string deviceEui)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");

        var node = await Context.Nodes.FindAsync(deviceEui);

        if (node == null) throw new ArgumentException("DeviceEUI is invalid");

        var latest = await Context.HourlyWeatherSet
            .Where(hw => hw.DeviceEui == deviceEui)
            .OrderBy(hw => hw.Time)
            .FirstOrDefaultAsync();

        return latest;
    }

    /**
     * Get all stored weather data
     */
    public async Task<ICollection<HourlyWeather>> GetAllDataAsync()
    {
        return await Context.HourlyWeatherSet.Include(hw => hw.NodeInfo).ToArrayAsync();
    }

    /**
     * Get all weather data in the given timeframe from the node location 
     */
    public async Task<ICollection<HourlyWeather>> GetLocalDataBetweenAsync(string deviceEui, DateTime from, DateTime to)
    {
        if (deviceEui == null) throw new NullReferenceException("DeviceEUI is null");
        if (from > to) throw new InvalidOperationException("Time frame is invalid");

        var node = await Context.Nodes.FindAsync(deviceEui);
        
        if (node == null) throw new ArgumentException("DeviceEUI is invalid");

        return await Context.HourlyWeatherSet.Include(hw => hw.NodeInfo)
            .Where(hw => hw.Time >= from && hw.Time <= to)
            .ToArrayAsync();
    }
}