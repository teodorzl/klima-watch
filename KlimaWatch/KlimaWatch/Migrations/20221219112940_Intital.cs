using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KlimaWatch.Migrations
{
    /// <inheritdoc />
    public partial class Intital : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Nodes",
                columns: table => new
                {
                    DeviceEui = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ApplicationId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeviceName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Longitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Latitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Altitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SensorType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nodes", x => x.DeviceEui);
                });

            migrationBuilder.CreateTable(
                name: "HourlyWeatherSet",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Time = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PlaceName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WeatherMain = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WeatherDesc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WeatherIcon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Temperature = table.Column<double>(type: "float", nullable: false),
                    Pressure = table.Column<double>(type: "float", nullable: false),
                    Humidity = table.Column<double>(type: "float", nullable: false),
                    WindSpeed = table.Column<double>(type: "float", nullable: false),
                    WindDir = table.Column<int>(type: "int", nullable: false),
                    Visibility = table.Column<int>(type: "int", nullable: false),
                    Sunset = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Sunrise = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DeviceEui = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NodeInfoDeviceEui = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HourlyWeatherSet", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HourlyWeatherSet_Nodes_NodeInfoDeviceEui",
                        column: x => x.NodeInfoDeviceEui,
                        principalTable: "Nodes",
                        principalColumn: "DeviceEui");
                });

            migrationBuilder.CreateTable(
                name: "NodeMessages",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ReceivedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SpreadingFactor = table.Column<int>(type: "int", nullable: false),
                    DeviceEui = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NodeInfoDeviceEui = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Discriminator = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Temperature = table.Column<double>(type: "float", nullable: true),
                    Light = table.Column<int>(type: "int", nullable: true),
                    Pressure = table.Column<double>(type: "float", nullable: true),
                    IndoorTemp = table.Column<double>(type: "float", nullable: true),
                    OutdoorTemp = table.Column<double>(type: "float", nullable: true),
                    Humidity = table.Column<double>(type: "float", nullable: true),
                    BatteryVoltage = table.Column<double>(type: "float", nullable: true),
                    Illumination = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NodeMessages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NodeMessages_Nodes_NodeInfoDeviceEui",
                        column: x => x.NodeInfoDeviceEui,
                        principalTable: "Nodes",
                        principalColumn: "DeviceEui");
                });

            migrationBuilder.CreateIndex(
                name: "IX_HourlyWeatherSet_NodeInfoDeviceEui",
                table: "HourlyWeatherSet",
                column: "NodeInfoDeviceEui");

            migrationBuilder.CreateIndex(
                name: "IX_NodeMessages_NodeInfoDeviceEui",
                table: "NodeMessages",
                column: "NodeInfoDeviceEui");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HourlyWeatherSet");

            migrationBuilder.DropTable(
                name: "NodeMessages");

            migrationBuilder.DropTable(
                name: "Nodes");
        }
    }
}
