using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KlimaWatch.Migrations
{
    /// <inheritdoc />
    public partial class Second : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeviceEui",
                table: "HourlyWeatherSet");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DeviceEui",
                table: "HourlyWeatherSet",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
