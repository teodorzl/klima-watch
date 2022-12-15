using Microsoft.AspNetCore.Mvc;

namespace test1.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
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