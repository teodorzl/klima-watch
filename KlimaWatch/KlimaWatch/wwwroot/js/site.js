// Write your JavaScript code.
function homeButton() {
    location.href = '/home/Dashboard';
}
function teamButton() {
    location.href = '/home/Team';
}
//dash board

const weather_temp = [];

function Alert() {
    alert("Please select display value first!");
}
function Temperature(){
    Make_Temperature_Graph();
}
function Light(){
    Make_Light_Graph();
}
function Pressure(){
    Make_Pressure_Graph();
}
function Humidity(){
    Make_Humidity_Graph();
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