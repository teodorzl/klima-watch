using KlimaWatch.Data.Entities.Nodes;
using KlimaWatch.Data.Entities.OwmModels;
using Microsoft.EntityFrameworkCore;

namespace KlimaWatch.Data;

public class KlimaWatchContext : DbContext
{
    private const string DbConnectionString =
        "Server=.;Database=KlimaWatch;User Id=sa;Password=5gwMHwOZfrmmPsIFBwqUIh3RdTfSamDq;MultipleActiveResultSets=true;Encrypt=False";


    public KlimaWatchContext()
    {
    }

    public KlimaWatchContext(DbContextOptions<KlimaWatchContext> options)
        : base(options)
    {
    }

    public DbSet<NodeInfo> Nodes { get; set; }
    public DbSet<NodeMessage> NodeMessages { get; set; }
    public DbSet<IndoorNodeMessage> IndoorNodeMessages { get; set; }
    public DbSet<OutdoorNodeMessage> OutdoorNodeMessages { get; set; }
    public DbSet<HourlyWeather> HourlyWeatherSet { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(DbConnectionString);
        base.OnConfiguring(optionsBuilder);
    }
}