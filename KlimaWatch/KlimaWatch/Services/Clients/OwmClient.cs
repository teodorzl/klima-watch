using System.ComponentModel.DataAnnotations;
using System.Text.Json.Nodes;
using KlimaWatch.Data;
using KlimaWatch.Data.Entities.OwmModels;
using Microsoft.EntityFrameworkCore;

namespace KlimaWatch.Services.Clients;

public static class OwmClient
{
    private const string ApiKey = "4d715d88eae9d340ac1e226a2be6dfa4";
    private const string ApiUrl =
        $@"https://api.openweathermap.org/data/2.5/weather?lat={{0}}&lon={{1}}&appid={ApiKey}&units=metric";

    private static readonly KlimaWatchContext Context = new();

    /**
     * Make a request one every hour for each node
     */
    public static void StartClient()
    {
        var timer = new System.Timers.Timer(1000 * 60 * 60);
        timer.Elapsed += async (_, _) => await MakeRequest();
        timer.AutoReset = true;
        timer.Enabled = true;
    }

    /**
     * Make the forecast request for all nodes
     */
    private static async Task MakeRequest()
    {
        var nodes = await Context.Nodes.ToArrayAsync();
        using HttpClient client = new();
        
        foreach (var node in nodes)
        {
            try
            {
                var lon = node.Longitude;
                var lat = node.Latitude;
                if (lon == null || lat == null) continue;

                var reqStr = string.Format(ApiUrl, lat, lon);
                var json = JsonNode.Parse(await (await client.GetAsync(reqStr)).Content.ReadAsStringAsync());
                var message = ParseWeatherMessage(json);

                message.NodeInfo = node;
                
                await StoreMessageAsync(message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
        }
    }

    /**
     * Parse the weather forecast json
     */
    private static HourlyWeather ParseWeatherMessage(JsonNode json)
    {
        var root = json.Root;
        var weather = root["weather"]![0]!;
        var main = root["main"]!;
        var wind = root["wind"]!;
        var sys = root["sys"]!;
        
        return new HourlyWeather
        { 
            Time = DateTime.Now,
            PlaceName = root["name"]! + ", " + sys["country"],
            WeatherMain = weather["main"]!.ToString(),
            WeatherDesc = weather["description"]!.ToString(),
            WeatherIcon = weather["icon"]!.ToString(),
            Temperature = double.Parse(main["temp"]!.ToString()),
            Pressure = double.Parse(main["pressure"]!.ToString()),
            Humidity = double.Parse(main["humidity"]!.ToString()),
            WindSpeed = double.Parse(wind["speed"]!.ToString()),
            WindDir = int.Parse(wind["deg"]!.ToString()),
            Visibility = int.Parse(root["visibility"]!.ToString()),
            Sunset = DateTimeOffset.FromUnixTimeSeconds(int.Parse(sys["sunset"]!.ToString())).DateTime,
            Sunrise = DateTimeOffset.FromUnixTimeSeconds(int.Parse(sys["sunrise"]!.ToString())).DateTime,
        };
    }

    /**
     * Store the forecast in the database
     */
    private static async Task StoreMessageAsync(HourlyWeather message)
    {
        if (!IsEntityStateValid(message)) throw new ArgumentException("Message model is invalid");
        if (!IsEntityStateValid(message.NodeInfo)) throw new ArgumentException("Node model is invalid");

        await Context.HourlyWeatherSet.AddAsync(message);
        await Context.SaveChangesAsync();
    }

    /**
     * Check if the model is correct
     */
    private static bool IsEntityStateValid(object model)
    {
        var validationContext = new ValidationContext(model);
        var validationResults = new List<ValidationResult>();

        return Validator.TryValidateObject(model, validationContext, validationResults,
            validateAllProperties: true);
    }
}