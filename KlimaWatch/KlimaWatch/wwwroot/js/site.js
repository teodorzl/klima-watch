// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function homeButton() {
    location.href = '/home/Dashboard';
}
function teamButton() {
    location.href = '/home/Team';
}
function tableTab() {
    location.href = '/home/Table';
}
//dash board 
let ValueChecked = 0;
const xHoursValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const xDatesValues = [0,1,2,3,4,5,6,7];
const xMonthsValues = [1,2,3,4,5,6,7,8,9,10,11,12];
const yTempMin = -4;
const yTempMax = 10;
const yLightMin = 0;
const yLightMax = 100;
const yPressureMin = 900;
const yPressureMax = 1200;
const yHumidityMin = 45;
const yHumidityMax = 100;
function Alert() {
    alert("Please select display value first!");
}
function Temperature(){
    Make_Temperature_Graph();
    ValueChecked = 1;
}
function Light(){
    Make_Light_Graph();
    ValueChecked = 2;
}
function Pressure(){
    Make_Pressure_Graph();
    ValueChecked = 3;
}
function Humidity(){
    Make_Humidity_Graph();
    ValueChecked = 4;
}
function Hours() {
    switch(ValueChecked) {
        case 0:
            Alert();
            break;
        case 1:
            data1 = [0, 1, 2, -1, -2, 3, 4, 2, 1, 1,0,-1,-2,0, 1, 2, -1, -2, 3, 4, 2, 1, 1,0,-1,-2];
            data2 = [2, 4, 5, 5, 6, 3, 2, 1, 0, 0,1,2,2,2, 4, 5, 5, 6, 3, 2, 1, 0, 0,1,2,2];
            data3 = [4, 4, 5, 5, 3, 2, 1, 0, -1, -2,-3,-4,-2,4, 4, 5, 5, 3, 2, 1, 0, -1, -2,-3,-4,-2];
            data4 = [2, 2, 3, 1, 1, 0, 1, 0, -2, -1,0,1,2,2, 2, 3, 1, 1, 0, 1, 0, -2, -1,0,1,2];
            data5 = [1, 1, 0, 0, -1, 0, -1, -2, -2, -3,0,1,2,1, 1, 0, 0, -1, 0, -1, -2, -2, -3,0,1,2];
            Make_Temperature_Graph(xHoursValues,data1,data2,data3,data4,data5,yTempMin,yTempMax);
            break;
        case 2:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,45,40,50,55,55,60,65,60,70,70,75,75,60,55,50,45,40];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70,60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [40,45,40,40,45,50,50,50,55,55,60,65,55,55,50,40,45,40,40,45,50,50,50,55,55,60,65,55,55,50];
            data4 = [45,50,55,55,60,60,67,72,75,73,74,75,80,85,80,45,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [30,32,33,35,40,41,42,50,60,65,70,70,72,73,73,30,32,33,35,40,41,42,50,60,65,70,70,72,73,73];
            Make_Light_Graph(xHoursValues,data1,data2,data3,data4,data5,yLightMin,yLightMax);
            break;
        case 3:
            data1 = [1000,1000,1001,1002,1002,1003,1004,1005,1006,1007,1007,1007,1008,1008,1009,1100,1100,1080,1080,1090,1070,1070,1075,1075,1060,1055,1050,1045,1040];
            data2 = [1060,1065,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070,1060,1050,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070];
            data3 = [940,945,940,940,945,950,950,950,955,955,960,965,955,955,950,940,945,940,940,945,950,950,950,955,955,960,965,955,955,950];
            data4 = [945,950,955,955,960,960,967,972,975,973,974,975,980,985,980,945,950,955,955,960,960,967,972,975,973,974,975,980,985,980];
            data5 = [1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073,1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073];
            Make_Pressure_Graph(xHoursValues,data1,data2,data3,data4,data5,yPressureMin,yPressureMax);
            break;
        case 4:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,55,50,50,65,65,60,65,60,70,70,75,75,60,55,50,65,60];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70,60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [64,55,50,60,65,50,50,50,55,55,60,65,55,55,53,54,55,60,64,65,65,65,65,75,75,70,65,65,65,55];
            data4 = [65,50,55,55,60,60,67,72,75,73,74,75,80,85,80,75,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [60,62,63,55,64,61,52,52,60,65,70,70,72,73,73,70,72,73,75,80,81,82,80,80,85,80,80,82,83,83];
            Make_Humidity_Graph(xHoursValues,data1,data2,data3,data4,data5,yHumidityMin,yHumidityMax);
            break;
        default:
            break;
    }

}
function Dates() {
    switch(ValueChecked) {
        case 0:
            Alert();
            break;
        case 1:
            data1 = [0, 1, 2, -1, -2, 3, 4, 2, 1, 1,0,-1,-2];
            data2 = [2, 4, 5, 5, 6, 3, 2, 1, 0, 0,1,2,2];
            data3 = [4, 4, 5, 5, 3, 2, 1, 0, -1, -2,-3,-4,-2];
            data4 = [2, 2, 3, 1, 1, 0, 1, 0, -2, -1,0,1,2];
            data5 = [1, 1, 0, 0, -1, 0, -1, -2, -2, -3,0,1,2];
            Make_Temperature_Graph(xDatesValues,data1,data2,data3,data4,data5,yTempMin,yTempMax);
            break;
        case 2:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,45,40,50,55,55,60,65,60,70,70,75,75,60,55,50,45,40];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70,60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [40,45,40,40,45,50,50,50,55,55,60,65,55,55,50,40,45,40,40,45,50,50,50,55,55,60,65,55,55,50];
            data4 = [45,50,55,55,60,60,67,72,75,73,74,75,80,85,80,45,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [30,32,33,35,40,41,42,50,60,65,70,70,72,73,73,30,32,33,35,40,41,42,50,60,65,70,70,72,73,73];
            Make_Light_Graph(xDatesValues,data1,data2,data3,data4,data5,yLightMin,yLightMax);
            break;
        case 3:
            data1 = [1000,1000,1001,1002,1002,1003,1004,1005,1006,1007,1007,1007,1008,1008,1009,1100,1100,1080,1080,1090,1070,1070,1075,1075,1060,1055,1050,1045,1040];
            data2 = [1060,1065,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070,1060,1050,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070];
            data3 = [940,945,940,940,945,950,950,950,955,955,960,965,955,955,950,940,945,940,940,945,950,950,950,955,955,960,965,955,955,950];
            data4 = [945,950,955,955,960,960,967,972,975,973,974,975,980,985,980,945,950,955,955,960,960,967,972,975,973,974,975,980,985,980];
            data5 = [1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073,1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073];
            Make_Pressure_Graph(xDatesValues,data1,data2,data3,data4,data5,yPressureMin,yPressureMax);
            break;
        case 4:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,55,50,50,65,65,60,65,60,70,70,75,75,60,55,50,65,60];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70,60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [64,55,50,60,65,50,50,50,55,55,60,65,55,55,53,54,55,60,64,65,65,65,65,75,75,70,65,65,65,55];
            data4 = [65,50,55,55,60,60,67,72,75,73,74,75,80,85,80,75,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [60,62,63,55,64,61,52,52,60,65,70,70,72,73,73,70,72,73,75,80,81,82,80,80,85,80,80,82,83,83];
            Make_Humidity_Graph(xDatesValues,data1,data2,data3,data4,data5,yHumidityMin,yHumidityMax);
            break;
        default:
            break;
    }
}
function Months() {
    switch(ValueChecked) {
        case 0:
            Alert();
            break;
        case 1:
            data1 = [0, 1, 2, -1, -2, 3, 4, 2, 1, 1,0,-1,-2];
            data2 = [2, 4, 5, 5, 6, 3, 2, 1, 0, 0,1,2,2];
            data3 = [4, 4, 5, 5, 3, 2, 1, 0, -1, -2,-3,-4,-2];
            data4 = [2, 2, 3, 1, 1, 0, 1, 0, -2, -1,0,1,2];
            data5 = [1, 1, 0, 0, -1, 0, -1, -2, -2, -3,0,1,2];
            Make_Temperature_Graph(xMonthsValues,data1,data2,data3,data4,data5,yTempMin,yTempMax);
            break;
        case 2:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,45,40];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [40,45,40,40,45,50,50,50,55,55,60,65,55,55,50];
            data4 = [45,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [30,32,33,35,40,41,42,50,60,65,70,70,72,73,73];
            Make_Light_Graph(xMonthsValues,data1,data2,data3,data4,data5,yLightMin,yLightMax);
            break;
        case 3:
            data1 = [1000,1000,1001,1002,1002,1003,1004,1005,1006,1007,1007,1007,1008,1008,1009,1100,1100,1080,1080,1090,1070,1070,1075,1075,1060,1055,1050,1045,1040];
            data2 = [1060,1065,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070,1060,1050,1055,1060,1060,1060,1070,1070,1075,1075,1080,1085,1080,1075,1070];
            data3 = [940,945,940,940,945,950,950,950,955,955,960,965,955,955,950,940,945,940,940,945,950,950,950,955,955,960,965,955,955,950];
            data4 = [945,950,955,955,960,960,967,972,975,973,974,975,980,985,980,945,950,955,955,960,960,967,972,975,973,974,975,980,985,980];
            data5 = [1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073,1030,1032,1033,1035,1040,1041,1042,1050,1060,1065,1070,1070,1072,1073,1073];
            Make_Pressure_Graph(xMonthsValues,data1,data2,data3,data4,data5,yPressureMin,yPressureMax);
            break;
        case 4:
            data1 = [50,55,55,60,65,60,70,70,75,75,60,55,50,55,50,50,65,65,60,65,60,70,70,75,75,60,55,50,65,60];
            data2 = [60,65,55,60,60,60,70,70,75,75,80,85,80,75,70,60,65,55,60,60,60,70,70,75,75,80,85,80,75,70];
            data3 = [64,55,50,60,65,50,50,50,55,55,60,65,55,55,53,54,55,60,64,65,65,65,65,75,75,70,65,65,65,55];
            data4 = [65,50,55,55,60,60,67,72,75,73,74,75,80,85,80,75,50,55,55,60,60,67,72,75,73,74,75,80,85,80];
            data5 = [60,62,63,55,64,61,52,52,60,65,70,70,72,73,73,70,72,73,75,80,81,82,80,80,85,80,80,82,83,83];
            Make_Humidity_Graph(xMonthsValues,data1,data2,data3,data4,data5,yHumidityMin,yHumidityMax);
            break;
        default:
            break;
    }
}
function Make_Temperature_Graph(xValues,data1,data2,data3,data4,data5,yMin,yMax) {
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: data1,
                borderColor: "red",
                fill: false,
                label: 'Node 1'
            }, {
                data: data2,
                borderColor: "green",
                fill: false,
                label: 'Node 2'
            }, {
                data: data3,
                borderColor: "blue",
                fill: false,
                label: 'Node 3'
            },{
                data: data4,
                borderColor: "yellow",
                fill: false,
                label: 'Node 4'
            },{
                data: data5,
                borderColor: "purple",
                fill: false,
                label: 'Node 5'
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
                    ticks: {min: yMin, max: yMax},
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
function Make_Light_Graph(xValues,data1,data2,data3,data4,data5,yMin,yMax) {
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: data1,
                borderColor: "red",
                fill: false,
                label: 'Node 1'
            }, {
                data: data2,
                borderColor: "green",
                fill: false,
                label: 'Node 2'
            }, {
                data: data3,
                borderColor: "blue",
                fill: false,
                label: 'Node 3'
            },{
                data: data4,
                borderColor: "yellow",
                fill: false,
                label: 'Node 4'
            },{
                data: data5,
                borderColor: "purple",
                fill: false,
                label: 'Node 5'
            }]
        },
        options: {    
            title: {
                display: true,
                text: 'Light'
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
                    ticks: {min: yMin, max: yMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Transmission %'
                    }
                }],
            }
        }
    });
}
function Make_Pressure_Graph(xValues,data1,data2,data3,data4,data5,yMin,yMax) {
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: data1,
                borderColor: "red",
                fill: false,
                label: 'Node 1'
            }, {
                data: data2,
                borderColor: "green",
                fill: false,
                label: 'Node 2'
            }, {
                data: data3,
                borderColor: "blue",
                fill: false,
                label: 'Node 3'
            },{
                data: data4,
                borderColor: "yellow",
                fill: false,
                label: 'Node 4'
            },{
                data: data5,
                borderColor: "purple",
                fill: false,
                label: 'Node 5'
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
                    ticks: {min: yMin, max: yMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Pressure (hPa)'
                    }
                }],
            }
        }
    });
}
function Make_Humidity_Graph(xValues,data1,data2,data3,data4,data5,yMin,yMax) {
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: data1,
                borderColor: "red",
                fill: false,
                label: 'Node 1'
            }, {
                data: data2,
                borderColor: "green",
                fill: false,
                label: 'Node 2'
            }, {
                data: data3,
                borderColor: "blue",
                fill: false,
                label: 'Node 3'
            },{
                data: data4,
                borderColor: "yellow",
                fill: false,
                label: 'Node 4'
            },{
                data: data5,
                borderColor: "purple",
                fill: false,
                label: 'Node 5'
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
                    ticks: {min: yMin, max: yMax},
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Relative Humidity %'
                    }
                }],
            }
        }
    });
}
