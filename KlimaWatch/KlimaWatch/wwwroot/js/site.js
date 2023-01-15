function homeButton() {
    location.href = '/home/Dashboard';
}
function teamButton() {
    location.href = '/home/Team';
}

//data var
const pyWierden1_Temperature = [];
const pySaxion_Temperature = [];
const lhtGronau_Temperature = [];
const pyWierden2_Temperature = [];

const pyWierden1_Pressure = [];
const pySaxion_Pressure = [];
const lhtGronau_Pressure = [];
const pyWierden2_Pressure = [];

const pyWierden1_Humidity = [];
const pySaxion_Humidity= [];
const lhtGronau_Humidity = [];
const pyWierden2_Humidity = [];

const pyWierden1_Visibility = [];
const pySaxion_Visibility = [];
const lhtGronau_Visibility = [];
const pyWierden2_Visibility = [];


const pyWierden1_WindSpeed = [];
const pySaxion_WindSpeed = [];
const lhtGronau_WindSpeed = [];
const pyWierden2_WindSpeed = [];

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

const label1 = 'pyWierden 1';
const label2 = 'pySaxion';
const label3 = 'lhtGronau';
const label4 = 'pyWierden 2';

let myChart = new Chart("myChart", {type: "line"});

function Convert_Lux(lux){
    const maxValue = 65000;
    const onePercent = maxValue/100;
    return Math.round(((((onePercent/lux)*100) + Number.EPSILON) * 100) / 100);
}

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
    yVisibilityMax = max + 1;
    yVisibilityMin = min - 3;
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
    
    Max_WindSpeed.push(Math.max(...pyWierden1_WindSpeed));
    Max_WindSpeed.push(Math.min(...pyWierden1_WindSpeed));
    Max_WindSpeed.push(Math.max(...pySaxion_WindSpeed));
    Max_WindSpeed.push(Math.min(...pySaxion_WindSpeed));
    Max_WindSpeed.push(Math.max(...lhtGronau_WindSpeed));
    Max_WindSpeed.push(Math.min(...lhtGronau_WindSpeed));
    Max_WindSpeed.push(Math.max(...pyWierden2_WindSpeed));
    Max_WindSpeed.push(Math.min(...pyWierden2_WindSpeed));
    Get_WindSpeed_Max(Math.max(...Max_WindSpeed),Math.min(...Max_WindSpeed));

    Max_Min_Visibility.push(Math.max(...pyWierden1_Visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden1_Visibility));
    Max_Min_Visibility.push(Math.max(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.min(...pySaxion_Visibility));
    Max_Min_Visibility.push(Math.max(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.min(...lhtGronau_Visibility));
    Max_Min_Visibility.push(Math.max(...pyWierden2_Visibility));
    Max_Min_Visibility.push(Math.min(...pyWierden2_Visibility));
    Get_Visibility_Max_Min(Math.max(...Max_Min_Visibility),Math.min(...Max_Min_Visibility));
}

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
    Make_Graph(pyWierden1_Visibility,pySaxion_Visibility,lhtGronau_Visibility,pyWierden2_Visibility,'Visibility', 'Percentage %',yVisibilityMin,yVisibilityMax);
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


