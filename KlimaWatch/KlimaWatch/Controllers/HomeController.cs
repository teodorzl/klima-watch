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

    public IActionResult Dashboard()
    {
        return View("Dashboard");
    }
}