function homeButton() {
    location.href = '/home/Dashboard';
}
function teamButton() {
    location.href = '/home/Team';
}

//data var
var pyWierden1_Temperature = [];
var pySaxion_Temperature = [];
var lhtGronau_Temperature = [];
var pyWierden2_Temperature = [];

var pyWierden1_Pressure = [];
var pySaxion_Pressure = [];
var lhtGronau_Pressure = [];
var pyWierden2_Pressure = [];

var pyWierden1_Humidity = [];
var pySaxion_Humidity= [];
var lhtGronau_Humidity = [];
var pyWierden2_Humidity = [];

var pyWierden1_Visibility = [];
var pySaxion_Visibility = [];
var lhtGronau_Visibility = [];
var pyWierden2_Visibility = [];

var pyWierden1_WindSpeed = [];
var pySaxion_WindSpeed = [];
var lhtGronau_WindSpeed = [];
var pyWierden2_WindSpeed = [];

var time = [];

//graph
var Max_Min_Temperature = [];
var Max_Min_Pressure = [];
var Max_Min_Humidity = [];
var Max_Min_Visibility = [];
var Max_WindSpeed = [];
var yTempMin;
var yTempMax;
var yPressureMin;
var yPressureMax;

var yHumidityMin;
var yHumidityMax;

var yVisibilityMax;
var yVisibilityMin;

var yWindSpeedMax;
const yWindSpeedMin = -1;

function Get_Temp_Max_Min(max,min){
    yTempMax = max + 3;
    yTempMin = min - 3;
}
function Get_Pressure_Max_Min(max,min){
    yPressureMax = max + 30;
    yPressureMin = min - 30;
}
function Get_Humidity_Max_Min(max,min){
    yHumidityMax = max + 30;
    yHumidityMin = min - 30;
}
function Get_Visibility_Max_Min(max,min){
    yVisibilityMax = max + 200;
    yVisibilityMin = min - 200;
}
function Get_WindSpeed_Max(max){
    yWindSpeedMax = max + 3;
}
function Get_All_Max_Min_YAsis_Value(){
    Max_Min_Temperature.push(Math.max(...pyWierden1_Temperature));
    Max_Min_Temperature.push(Math.min(...pyWierden1_Temperature));
    Max_Min_Temperature.push(Math.max(...pySaxion_Temperature));
    Max_Min_Temperature.push(Math.min(...pySaxion_Temperature));
    Max_Min_Temperature.push(Math.max(...lhtGronau_Temperature));
    Max_Min_Temperature.push(Math.min(...lhtGronau_Temperature));
    Max_Min_Temperature.push(Math.max(...pyWierden2_Temperature));
    Max_Min_Temperature.push(Math.min(...pyWierden2_Temperature));
    Get_Temp_Max_Min(Math.max(...Max_Min_Temperature),Math.min(...Max_Min_Temperature));
    Max_Min_Pressure.push(Math.max(...pyWierden1_Pressure));
    Max_Min_Pressure.push(Math.min(...pyWierden1_Pressure));
    Max_Min_Pressure.push(Math.max(...pySaxion_Pressure));
    Max_Min_Pressure.push(Math.min(...pySaxion_Pressure));
    Max_Min_Pressure.push(Math.max(...lhtGronau_Pressure));
    Max_Min_Pressure.push(Math.min(...lhtGronau_Pressure));
    Max_Min_Pressure.push(Math.max(...pyWierden2_Pressure));
    Max_Min_Pressure.push(Math.min(...pyWierden2_Pressure));
    Get_Pressure_Max_Min(Math.max(...Max_Min_Pressure),Math.min(...Max_Min_Pressure));
    Max_Min_Humidity.push(Math.max(...pyWierden1_Humidity));
    Max_Min_Humidity.push(Math.min(...pyWierden1_Humidity));
    Max_Min_Humidity.push(Math.max(...pySaxion_Humidity));
    Max_Min_Humidity.push(Math.min(...pySaxion_Humidity));
    Max_Min_Humidity.push(Math.max(...lhtGronau_Humidity));
    Max_Min_Humidity.push(Math.min(...lhtGronau_Humidity));
    Max_Min_Humidity.push(Math.max(...pyWierden2_Humidity));
    Max_Min_Humidity.push(Math.min(...pyWierden2_Humidity));
    Get_Humidity_Max_Min(Math.max(...Max_Min_Humidity),Math.min(...Max_Min_Humidity));
    Max_Min_Visibility.push(Math.max(...pyWierden1_Visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden1_Visibility));
    Max_Min_Visibility.push(Math.max(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.min(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.max(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.min(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.max(...pyWierden2_Visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden2_Visibility));
    Get_Visibility_Max_Min(Math.max(...Max_Min_Visibility),Math.min(...Max_Min_Visibility));
    Max_WindSpeed.push(Math.max(...pyWierden1_WindSpeed));
    Max_WindSpeed.push(Math.min(...pyWierden1_WindSpeed));
    Max_WindSpeed.push(Math.max(...pySaxion_WindSpeed));
    Max_WindSpeed.push(Math.min(...pySaxion_WindSpeed));
    Get_WindSpeed_Max(Math.max(...Max_WindSpeed),Math.min(...Max_WindSpeed));
}
var myChart = new Chart("myChart",{type:"line"});
function Temperature(){
    Make_Temperature_Graph(pyWierden1_Temperature,pySaxion_Temperature,lhtGronau_Temperature,pyWierden2_Temperature,yTempMin,yTempMax);
}
function Pressure(){
    Make_Pressure_Graph(pyWierden1_Pressure,pySaxion_Pressure,lhtGronau_Pressure,pyWierden2_Pressure,yPressureMin,yPressureMax);
}
function Humidity(){
    Make_Humidity_Graph(pyWierden1_Humidity,pySaxion_Humidity,lhtGronau_Humidity,pyWierden2_Humidity);
}
function Light(){
    Make_Light_Graph(pyWierden1_Visibility,pySaxion_Visibility,lhtGronau_Visibility,pyWierden2_Visibility);
}
function WindSpeed(){
    Make_WindSpeed_Graph(pyWierden1_WindSpeed,pySaxion_WindSpeed,lhtGronau_WindSpeed,pyWierden2_WindSpeed);
}
function Make_Temperature_Graph(pyWierden1_Temperature,pySaxion_Temperature,lhtGronau_Temperature,pyWierden2_Temperature) {
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: pyWierden1_Temperature,
                borderColor: "red",
                fill: false,
                label: 'pyWierden 1'
            }, {
                data: pySaxion_Temperature,
                borderColor: "green",
                fill: false,
                label: 'pySaxion '
            }, {
                data: lhtGronau_Temperature,
                borderColor: "blue",
                fill: false,
                label: 'lhtGronau'
            },{
                data: pyWierden2_Temperature,
                borderColor: "yellow",
                fill: false,
                label: 'pyWierden 2'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Temperature'
            },
            legend: {display: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {min: yTempMin, max: yTempMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'C Degree'
                    }
                }]

            }
        }
    });
}
function Make_Pressure_Graph(pyWierden1_Pressure,pySaxion_Pressure,lhtGronau_Pressure,pyWierden2_Pressure){
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: pyWierden1_Pressure,
                borderColor: "red",
                fill: false,
                label: 'pyWierden 1'
            }, {
                data: pySaxion_Pressure,
                borderColor: "green",
                fill: false,
                label: 'pySaxion '
            }, {
                data: lhtGronau_Pressure,
                borderColor: "blue",
                fill: false,
                label: 'lhtGronau'
            },{
                data: pyWierden2_Pressure,
                borderColor: "yellow",
                fill: false,
                label: 'pyWierden 2'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Pressure'
            },
            legend: {display: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {min: yPressureMin, max: yPressureMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Pressure (hPa)'
                    }
                }]

            }
        }
    });
}
function Make_Humidity_Graph(pyWierden1_Humidity,pySaxion_Humidity,lhtGronau_Humidity,pyWierden2_Humidity){
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: pyWierden1_Humidity,
                borderColor: "red",
                fill: false,
                label: 'pyWierden 1'
            }, {
                data: pySaxion_Humidity,
                borderColor: "green",
                fill: false,
                label: 'pySaxion '
            }, {
                data: lhtGronau_Humidity,
                borderColor: "blue",
                fill: false,
                label: 'lhtGronau'
            },{
                data: pyWierden2_Humidity,
                borderColor: "yellow",
                fill: false,
                label: 'pyWierden 2'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Humidity'
            },
            legend: {display: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {min: yHumidityMin, max: yHumidityMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Relative Humidity %'
                    }
                }]

            }
        }
    });
}
function Make_Light_Graph(pyWierden1_Visibility,pySaxion_Visibility,lhtGronau_Visibility,pyWierden2_Visibility){
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: pyWierden1_Visibility,
                borderColor: "red",
                fill: false,
                label: 'pyWierden 1'
            }, {
                data: pySaxion_Visibility,
                borderColor: "green",
                fill: false,
                label: 'pySaxion '
            }, {
                data: lhtGronau_Visibility,
                borderColor: "blue",
                fill: false,
                label: 'lhtGronau'
            },{
                data: pyWierden2_Visibility,
                borderColor: "yellow",
                fill: false,
                label: 'pyWierden 2'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Visibility'
            },
            legend: {display: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {min: yVisibilityMin, max: yVisibilityMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Light value'
                    }
                }]

            }
        }
    });
}
function Make_WindSpeed_Graph(pyWierden1_WindSpeed, pySaxion_WindSpeed, lhtGronau_WindSpeed, pyWierden2_WindSpeed) {
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: pyWierden1_WindSpeed,
                borderColor: "red",
                fill: false,
                label: 'pyWierden 1'
            }, {
                data: pySaxion_WindSpeed,
                borderColor: "green",
                fill: false,
                label: 'pySaxion '
            }, {
                data: lhtGronau_WindSpeed,
                borderColor: "blue",
                fill: false,
                label: 'lhtGronau'
            },{
                data: pyWierden2_WindSpeed,
                borderColor: "yellow",
                fill: false,
                label: 'pyWierden 2'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'WindSpeed'
            },
            legend: {display: true},
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                yAxes: [{
                    ticks: {min: yWindSpeedMin, max: yWindSpeedMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Metres per second (m/s)'
                    }
                }]

            }
        }
    });
}
