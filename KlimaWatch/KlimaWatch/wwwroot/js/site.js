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
        let max = i;
        for(let j = i+1; j < n; j++){
            if(obj.time[j] > obj.time[max]) {
                max=j;
            }
        }
        if (max !== i) {
            let tm = obj.time[i];
            obj.time[i] = obj.time[max];
            obj.time[max] = tm;

            let temp = obj.temperature[i];
            obj.temperature[i] = obj.temperature[max];
            obj.temperature[max] = temp;

            let pres = obj.pressure[i];
            obj.pressure[i] = obj.pressure[max];
            obj.pressure[max] = pres;

            let hum = obj.humidity[i];
            obj.humidity[i] = obj.humidity[max];
            obj.humidity[max] = hum;

            let vis = obj.visibility[i];
            obj.visibility[i] = obj.visibility[max];
            obj.visibility[max] = vis;

            let wind = obj.wind_speed[i];
            obj.wind_speed[i] = obj.wind_speed[max];
            obj.wind_speed[max] = wind;
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

function Temperature(){
    Make_Graph(pyWierden.temperature,pySaxion.temperature,lhtGronau.temperature,lhtWierden.temperature,lhtSaxion.temperature,KlimaWatchSensor.temperature,'Temperature','C Degree');
}
function Pressure(){
    Make_Graph(pyWierden.pressure,pySaxion.pressure,lhtGronau.pressure,lhtWierden.pressure,lhtSaxion.pressure,KlimaWatchSensor.pressure,'Pressure','Pressure (hPa)');
}
function Humidity(){
    Make_Graph(pyWierden.humidity,pySaxion.humidity,lhtGronau.humidity,lhtWierden.humidity,lhtSaxion.humidity,KlimaWatchSensor.humidity,'Humidity','Relative Humidity %');
}
function Visibility(){
    Make_Graph(pyWierden.visibility,pySaxion.visibility,lhtGronau.visibility,lhtWierden.visibility,lhtSaxion.visibility,KlimaWatchSensor.visibility,'Visibility', 'Meter');
}
function WindSpeed(){
    Make_Graph(pyWierden.wind_speed,pySaxion.wind_speed,lhtGronau.wind_speed,lhtWierden.wind_speed,lhtSaxion.wind_speed,KlimaWatchSensor.wind_speed,'WindSpeed','Metres per second (m/s)');
}
function Make_Graph(data1, data2, data3, data4,data5,data6,optionText,labelString) {
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
                x: {
                    type: 'time',
                    time:{
                      unit:'date'  
                    },
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                },
                y: {
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: labelString
                    }
                }

            }
        }
    });
}

