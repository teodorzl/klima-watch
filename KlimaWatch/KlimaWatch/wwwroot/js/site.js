//data

var pyWierden = {
    temperature: [],
    humidity: [],
    pressure: [],
    visibility: [],
    wind_speed: [],
    time: []
}
var pySaxion ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
var lhtGronau ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
var lhtSaxion ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
var KlimaWatchSensor ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
var lhtWierden ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}

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
const label5 = 'lhtSaxion';
const label6 = 'KlimaWatch_Sensor';

let myChart = new Chart("myChart", {type: "line"});
function Selection_Sort(obj) {
    let n = obj.time.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(obj.time[j] < obj.time[min]) {
                min=j;
            }
        }
        if (min !== i) {
            let tm = obj.time[i];
            obj.time[i] = obj.time[min];
            obj.time[min] = tm;

            let temp = obj.temperature[i];
            obj.temperature[i] = obj.temperature[min];
            obj.temperature[min] = temp;

            let pres = obj.pressure[i];
            obj.pressure[i] = obj.pressure[min];
            obj.pressure[min] = pres;

            let hum = obj.humidity[i];
            obj.humidity[i] = obj.humidity[min];
            obj.humidity[min] = hum;

            let vis = obj.visibility[i];
            obj.visibility[i] = obj.visibility[min];
            obj.visibility[min] = vis;

            let wind = obj.wind_speed[i];
            obj.wind_speed[i] = obj.wind_speed[min];
            obj.wind_speed[min] = wind;
        }
    }
    return obj;
}
function Sort_Data(){
    Selection_Sort(pyWierden);
    Selection_Sort(pySaxion);
    Selection_Sort(lhtGronau);
    Selection_Sort(lhtSaxion);
    Selection_Sort(KlimaWatchSensor);
    Selection_Sort(lhtWierden);
}
function Get_Temp_Max_Min(max,min){
    yTempMax = Math.round(max + 10);
    yTempMin = Math.round(min - 5);
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
    Max_Min_Temperature.push(Math.max(...pyWierden.temperature));
    Max_Min_Temperature.push(Math.min(...pyWierden.temperature));
    Max_Min_Temperature.push(Math.max(...pySaxion.temperature));
    Max_Min_Temperature.push(Math.min(...pySaxion.temperature));
    Max_Min_Temperature.push(Math.max(...lhtGronau.temperature));
    Max_Min_Temperature.push(Math.min(...lhtGronau.temperature));
    Max_Min_Temperature.push(Math.max(...lhtWierden.temperature));
    Max_Min_Temperature.push(Math.min(...lhtWierden.temperature));
    Get_Temp_Max_Min(Math.max(...Max_Min_Temperature),Math.min(...Max_Min_Temperature));

    Max_Min_Pressure.push(Math.max(...pyWierden.pressure));
    Max_Min_Pressure.push(Math.min(...pyWierden.pressure));
    Max_Min_Pressure.push(Math.max(...pySaxion.pressure));
    Max_Min_Pressure.push(Math.min(...pySaxion.pressure));
    Max_Min_Pressure.push(Math.max(...lhtGronau.pressure));
    Max_Min_Pressure.push(Math.min(...lhtGronau.pressure));
    Max_Min_Pressure.push(Math.max(...lhtWierden.pressure));
    Max_Min_Pressure.push(Math.min(...lhtWierden.pressure));
    Get_Pressure_Max_Min(Math.max(...Max_Min_Pressure),Math.min(...Max_Min_Pressure));

    Max_Min_Humidity.push(Math.max(...pyWierden.humidity));
    Max_Min_Humidity.push(Math.min(...pyWierden.humidity));
    Max_Min_Humidity.push(Math.max(...pySaxion.humidity));
    Max_Min_Humidity.push(Math.min(...pySaxion.humidity));
    Max_Min_Humidity.push(Math.max(...lhtGronau.humidity));
    Max_Min_Humidity.push(Math.min(...lhtGronau.humidity));
    Max_Min_Humidity.push(Math.max(...lhtWierden.humidity));
    Max_Min_Humidity.push(Math.min(...lhtWierden.humidity));
    Get_Humidity_Max_Min(Math.max(...Max_Min_Humidity),Math.min(...Max_Min_Humidity));

    Max_WindSpeed.push(Math.max(...pyWierden.wind_speed));
    Max_WindSpeed.push(Math.min(...pyWierden.wind_speed));
    Max_WindSpeed.push(Math.max(...pySaxion.wind_speed));
    Max_WindSpeed.push(Math.min(...pySaxion.wind_speed));
    Max_WindSpeed.push(Math.max(...lhtGronau.wind_speed));
    Max_WindSpeed.push(Math.min(...lhtGronau.wind_speed));
    Max_WindSpeed.push(Math.max(...lhtWierden.wind_speed));
    Max_WindSpeed.push(Math.min(...lhtWierden.wind_speed));
    Get_WindSpeed_Max(Math.max(...Max_WindSpeed),Math.min(...Max_WindSpeed));

    Max_Min_Visibility.push(Math.max(...pyWierden.visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden.visibility));
    Max_Min_Visibility.push(Math.max(...pySaxion.visibility));
    Max_Min_Visibility.push(Math.min(...pySaxion.visibility));
    Max_Min_Visibility.push(Math.max(...lhtGronau.visibility));
    Max_Min_Visibility.push(Math.min(...lhtGronau.visibility));
    Max_Min_Visibility.push(Math.max(...lhtWierden.visibility));
    Max_Min_Visibility.push(Math.min(...lhtWierden.visibility));
    Get_Visibility_Max_Min(Math.max(...Max_Min_Visibility),Math.min(...Max_Min_Visibility));
}
function Temperature(){
    Make_Graph(pyWierden.temperature,pySaxion.temperature,lhtGronau.temperature,lhtWierden.temperature,lhtSaxion.temperature,KlimaWatchSensor.temperature,'Temperature','C Degree',yTempMin,yTempMax);
}
function Pressure(){
    Make_Graph(pyWierden.pressure,pySaxion.pressure,lhtGronau.pressure,lhtWierden.pressure,lhtSaxion.pressure,KlimaWatchSensor.pressure,'Pressure','Pressure (hPa)',yPressureMin,yPressureMax);
}
function Humidity(){
    Make_Graph(pyWierden.humidity,pySaxion.humidity,lhtGronau.humidity,lhtWierden.humidity,lhtSaxion.humidity,KlimaWatchSensor.humidity,'Humidity','Relative Humidity %',yHumidityMin,yHumidityMax);
}
function Visibility(){
    Make_Graph(pyWierden.visibility,pySaxion.visibility,lhtGronau.visibility,lhtWierden.visibility,lhtSaxion.visibility,KlimaWatchSensor.visibility,'Visibility', 'Meter',yVisibilityMin,yVisibilityMax);
}
function WindSpeed(){
    Make_Graph(pyWierden.wind_speed,pySaxion.wind_speed,lhtGronau.wind_speed,lhtWierden.wind_speed,lhtSaxion.wind_speed,KlimaWatchSensor.wind_speed,'WindSpeed','Metres per second (m/s)',yWindSpeedMin,yWindSpeedMax);
}
function Make_Graph(data1, data2, data3, data4,data5,data6,optionText,labelString,yMin,yMax) {
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels:pyWierden.time,
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
            }, 
            {
                data: data5,
                borderColor: "aqua",
                fill: false,
                label: label5
            },
            {
                data: data6,
                borderColor: "black",
                fill: false,
                label: label6
            }]
        },
        options: {
            title: {
                display: true,
                text: optionText
            },
            legend: {display: true},
            scales: {
                x: [{
                    type: 'time',
                    time:{
                      unit:'date'  
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }],
                y: [{
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

