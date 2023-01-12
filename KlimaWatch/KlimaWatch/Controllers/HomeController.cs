using KlimaWatch.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace KlimaWatch.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly INodesService _nodesService;
    private readonly IOwmService _owmService;

    public HomeController(ILogger<HomeController> logger, INodesService nodesService, IOwmService owmService)
    {
        _logger = logger;
        _nodesService = nodesService;
        _owmService = owmService;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Team()
    {
        return View("Team");
    }

    public async Task<IActionResult> Dashboard()
    {
        var weatherData = await _owmService.GetAllDataAsync();
        var pyWierden = await _owmService.GetLocalDataBetweenAsync("70B3D549963B71B0", DateTime.MinValue, DateTime.Now);
        return View(weatherData);
    }
    public  async Task<IActionResult> Table()
    {
        var weatherDataTable = await _owmService.GetAllDataAsync();
        return View(weatherDataTable);
    }
}