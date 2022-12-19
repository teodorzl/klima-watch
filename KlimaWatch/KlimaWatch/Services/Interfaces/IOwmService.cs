using KlimaWatch.Data.Entities.OwmModels;

namespace KlimaWatch.Services.Interfaces;

public interface IOwmService
{
    public Task<HourlyWeather> GetLatestDataAsync(string deviceEui);
    public Task<ICollection<HourlyWeather>> GetAllDataAsync();
    public Task<ICollection<HourlyWeather>> GetLocalDataBetweenAsync(string deviceEui, DateTime from, DateTime to);
}