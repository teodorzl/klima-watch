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

//get data func
function Get_pyWierden1_Temperature(arr){
    pyWierden1_Temperature = arr;
}
function Get_pySaxion_Temperature(arr){
    pySaxion_Temperature = arr;
}
function Get_lhtGronau_Temperature(arr){
    lhtGronau_Temperature = arr;
}
function Get_pyWierden2_Temperature(arr){
    pyWierden2_Temperature = arr;
}
function Get_pyWierden1_Pressure(arr){
    pyWierden1_Pressure = arr;
}
function Get_pySaxion_Pressure(arr){
    pySaxion_Pressure = arr;
}
function Get_lhtGronau_Pressure(arr){
    lhtGronau_Pressure = arr;
}
function Get_pyWierden2_Pressure(arr){
    pyWierden2_Pressure = arr;
}
function Get_pyWierden1_Humidity(arr){
    pyWierden1_Humidity = arr;
}
function Get_pySaxion_Humidity(arr){
    pySaxion_Humidity = arr;
}
function Get_lhtGronau_Humidity(arr){
    lhtGronau_Humidity = arr;
}
function Get_pyWierden2_Humidity(arr){
    pyWierden2_Humidity = arr;
}
function Get_pyWierden1_Visibility(arr){
    pyWierden1_Visibility = arr;
}
function Get_pySaxion_Visibility(arr){
    pySaxion_Visibility = arr;
}
function Get_lhtGronau_Visibility(arr){
    lhtGronau_Visibility = arr;
}
function Get_pyWierden2_Visibility(arr){
    pyWierden2_Visibility = arr;
}
function Get_pyWierden1_WindSpeed(arr){
    pyWierden1_WindSpeed = arr;
}
function Get_pySaxion_WindSpeed(arr){
    pySaxion_WindSpeed = arr;
}
function Get_lhtGronau_WindSpeed(arr){
    lhtGronau_WindSpeed = arr;
}
function Get_pyWierden2_WindSpeed(arr){
    pyWierden2_WindSpeed = arr;
}
//graph
const yTempMin = 2;
const yTempMax = 12;
const yPressureMin = 970;
const yPressureMax = 1040;
const yHumidityMin = 50;
const yVisibilityMax = 11000;
const yVisibilityMin = 6000;
const yWindSpeedMax = 15;
const yWindSpeedMin = 0.20;
const yHumidityMax = 110;
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
