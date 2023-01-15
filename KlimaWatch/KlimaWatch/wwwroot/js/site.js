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
var label1 = 'pyWierden 1';
var label2 = 'pySaxion';
var label3 = 'lhtGronau';
var label4 = 'pyWierden 2';

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
    Make_Graph(pyWierden1_Temperature,pySaxion_Temperature,lhtGronau_Temperature,pyWierden2_Temperature,'Temperature','C Degree',yTempMin,yTempMax);
}
function Pressure(){
    Make_Graph(pyWierden1_Pressure,pySaxion_Pressure,lhtGronau_Pressure,pyWierden2_Pressure,'Pressure','Pressure (hPa)',yPressureMin,yPressureMax);
}
function Humidity(){
    Make_Graph(pyWierden1_Humidity,pySaxion_Humidity,lhtGronau_Humidity,pyWierden2_Humidity,'Humidity','Relative Humidity %',yHumidityMin,yHumidityMax);
}
function Light(){
    Make_Graph(pyWierden1_Visibility,pySaxion_Visibility,lhtGronau_Visibility,pyWierden2_Visibility,'Visibility', 'Light value',yVisibilityMin,yVisibilityMax);
}
function WindSpeed(){
    Make_Graph(pyWierden1_WindSpeed,pySaxion_WindSpeed,lhtGronau_WindSpeed,pyWierden2_WindSpeed,'WindSpeed','Metres per second (m/s)',yWindSpeedMin,yWindSpeedMax);
}
function Make_Graph(data1, data2, data3, data4,optionText,labelString,yMin,yMax) {
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: time,
            datasets: [{
                data: data1,
                borderColor: "red",
                fill: false,
                label: label1
            }, {
                data: data2,
                borderColor: "green",
                fill: false,
                label: label2
            }, {
                data: data3,
                borderColor: "blue",
                fill: false,
                label: label3
            },{
                data: data4,
                borderColor: "yellow",
                fill: false,
                label: label4
            }]
        },
        options: {
            title: {
                display: true,
                text: optionText
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
                        labelString: labelString
                    }
                }]

            }
        }
    });
}
