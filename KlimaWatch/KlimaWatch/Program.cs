using KlimaWatch.Data;
using KlimaWatch.Services;
using KlimaWatch.Services.Clients;
using KlimaWatch.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the controller.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<INodesService, NodesService>();
builder.Services.AddScoped<IOwmService, OwmService>();
builder.Services.AddDbContext<KlimaWatchContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Start the two clients
await MqttClient.ConnectClient();
OwmClient.StartClient();

app.Run();