using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KlimaWatch.Data.Entities.Nodes;

namespace KlimaWatch.Data.Entities.OwmModels;

public class HourlyWeather
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; }

    [Required] public DateTime Time { get; set; }
    [Required] public string PlaceName { get; set; }
    [Required] public string WeatherMain { get; set; }
    [Required] public string WeatherDesc { get; set; }
    [Required] public string WeatherIcon { get; set; }
    [Required] public double Temperature { get; set; }
    [Required] public double Pressure { get; set; }
    [Required] public double Humidity { get; set; }
    [Required] public double WindSpeed { get; set; }
    [Required] public int WindDir { get; set; }
    [Required] public int Visibility { get; set; }
    [Required] public DateTime Sunset { get; set; }
    [Required] public DateTime Sunrise { get; set; }

    public string DeviceEui { get; set; }
    public NodeInfo NodeInfo { get; set; }
}