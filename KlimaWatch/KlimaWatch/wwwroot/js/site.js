//data 
const pyWierden_Temperature = [];
const pySaxion_Temperature = [];
const lhtGronau_Temperature = [];
const lhtWierden_Temperature = [];

const pyWierden_Pressure = [];
const pySaxion_Pressure = [];
const lhtGronau_Pressure = [];
const lhtWierden_Pressure = [];

const pyWierden_Humidity = [];
const pySaxion_Humidity= [];
const lhtGronau_Humidity = [];
const lhtWierden_Humidity = [];

const pyWierden_Visibility = [];
const pySaxion_Visibility = [];
const lhtGronau_Visibility = [];
const lhtWierden_Visibility = [];


const pyWierden_WindSpeed = [];
const pySaxion_WindSpeed = [];
const lhtGronau_WindSpeed = [];
const lhtWierden_WindSpeed = [];

const time = [];

//graph
const Max_Min_Temperature = [];
const Max_Min_Pressure = [];
const Max_Min_Humidity = [];
const Max_WindSpeed = [];
const Max_Min_Visibility = [];

let yTempMin;
let yTempMax;
let yPressureMin;
let yPressureMax;

let yHumidityMin;
let yHumidityMax;

let yVisibilityMax ;
let yVisibilityMin;

let yWindSpeedMax;
const yWindSpeedMin = -1;

const label1 = 'pyWierden';
const label2 = 'pySaxion';
const label3 = 'lhtGronau';
const label4 = 'lhtWierden';

let myChart = new Chart("myChart", {type: "line"});

function Get_Temp_Max_Min(max,min){
    yTempMax = Math.round(max + 3);
    yTempMin = Math.round(min - 3);
}
function Get_Pressure_Max_Min(max,min){
    yPressureMax = Math.round(max + 30);
    yPressureMin = Math.round(min - 30);
}
function Get_Humidity_Max_Min(max,min){
    yHumidityMax = Math.round(max + 30);
    yHumidityMin = Math.round(min - 30);
}
function Get_WindSpeed_Max(max){
    yWindSpeedMax = Math.round(max + 3);
}
function Get_Visibility_Max_Min(max,min){
    yVisibilityMax = Math.round(max + 1000);
    yVisibilityMin = Math.round(min - 1000);
}

function Get_All_Max_Min_YAsis_Value(){
    Max_Min_Temperature.push(Math.max(...pyWierden_Temperature));
    Max_Min_Temperature.push(Math.min(...pyWierden_Temperature));
    Max_Min_Temperature.push(Math.max(...pySaxion_Temperature));
    Max_Min_Temperature.push(Math.min(...pySaxion_Temperature));
    Max_Min_Temperature.push(Math.max(...lhtGronau_Temperature));
    Max_Min_Temperature.push(Math.min(...lhtGronau_Temperature));
    Max_Min_Temperature.push(Math.max(...lhtWierden_Temperature));
    Max_Min_Temperature.push(Math.min(...lhtWierden_Temperature));
    Get_Temp_Max_Min(Math.max(...Max_Min_Temperature),Math.min(...Max_Min_Temperature));
    
    Max_Min_Pressure.push(Math.max(...pyWierden_Pressure));
    Max_Min_Pressure.push(Math.min(...pyWierden_Pressure));
    Max_Min_Pressure.push(Math.max(...pySaxion_Pressure));
    Max_Min_Pressure.push(Math.min(...pySaxion_Pressure));
    Max_Min_Pressure.push(Math.max(...lhtGronau_Pressure));
    Max_Min_Pressure.push(Math.min(...lhtGronau_Pressure));
    Max_Min_Pressure.push(Math.max(...lhtWierden_Pressure));
    Max_Min_Pressure.push(Math.min(...lhtWierden_Pressure));
    Get_Pressure_Max_Min(Math.max(...Max_Min_Pressure),Math.min(...Max_Min_Pressure));
    
    Max_Min_Humidity.push(Math.max(...pyWierden_Humidity));
    Max_Min_Humidity.push(Math.min(...pyWierden_Humidity));
    Max_Min_Humidity.push(Math.max(...pySaxion_Humidity));
    Max_Min_Humidity.push(Math.min(...pySaxion_Humidity));
    Max_Min_Humidity.push(Math.max(...lhtGronau_Humidity));
    Max_Min_Humidity.push(Math.min(...lhtGronau_Humidity));
    Max_Min_Humidity.push(Math.max(...lhtWierden_Humidity));
    Max_Min_Humidity.push(Math.min(...lhtWierden_Humidity));
    Get_Humidity_Max_Min(Math.max(...Max_Min_Humidity),Math.min(...Max_Min_Humidity));
    
    Max_WindSpeed.push(Math.max(...pyWierden_WindSpeed));
    Max_WindSpeed.push(Math.min(...pyWierden_WindSpeed));
    Max_WindSpeed.push(Math.max(...pySaxion_WindSpeed));
    Max_WindSpeed.push(Math.min(...pySaxion_WindSpeed));
    Max_WindSpeed.push(Math.max(...lhtGronau_WindSpeed));
    Max_WindSpeed.push(Math.min(...lhtGronau_WindSpeed));
    Max_WindSpeed.push(Math.max(...lhtWierden_WindSpeed));
    Max_WindSpeed.push(Math.min(...lhtWierden_WindSpeed));
    Get_WindSpeed_Max(Math.max(...Max_WindSpeed),Math.min(...Max_WindSpeed));

    Max_Min_Visibility.push(Math.max(...pyWierden_Visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden_Visibility));
    Max_Min_Visibility.push(Math.max(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.min(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.max(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.min(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.max(...lhtWierden_Visibility));
    Max_Min_Visibility.push(Math.min(...lhtWierden_Visibility));
    Get_Visibility_Max_Min(Math.max(...Max_Min_Visibility),Math.min(...Max_Min_Visibility));
}

function Temperature(){
    Make_Graph(pyWierden_Temperature,pySaxion_Temperature,lhtGronau_Temperature,lhtWierden_Temperature,'Temperature','C Degree',yTempMin,yTempMax);
}
function Pressure(){
    Make_Graph(pyWierden_Pressure,pySaxion_Pressure,lhtGronau_Pressure,lhtWierden_Pressure,'Pressure','Pressure (hPa)',yPressureMin,yPressureMax);
}
function Humidity(){
    Make_Graph(pyWierden_Humidity,pySaxion_Humidity,lhtGronau_Humidity,lhtWierden_Humidity,'Humidity','Relative Humidity %',yHumidityMin,yHumidityMax);
}
function Visibility(){
    Make_Graph(pyWierden_Visibility,pySaxion_Visibility,lhtGronau_Visibility,lhtWierden_Visibility,'Visibility', 'Meter',yVisibilityMin,yVisibilityMax);
}
function WindSpeed(){
    Make_Graph(pyWierden_WindSpeed,pySaxion_WindSpeed,lhtGronau_WindSpeed,lhtWierden_WindSpeed,'WindSpeed','Metres per second (m/s)',yWindSpeedMin,yWindSpeedMax);
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

