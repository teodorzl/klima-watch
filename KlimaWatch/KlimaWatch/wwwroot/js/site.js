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
var lables = pyWierden.time;

var track_value = 0;
var track_display = 0;
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
    track_value = 1;
    if(track_display === 1){
        Hours();
    }else{
        Make_Graph(lables,pyWierden.temperature,pySaxion.temperature,lhtGronau.temperature,
            lhtWierden.temperature,lhtSaxion.temperature,KlimaWatchSensor.temperature,
            'Temperature','C Degree');
    }
  
}
function Pressure(){
    track_value = 2;
    if(track_display === 1){
        Hours();
    }else{
        Make_Graph(lables,pyWierden.pressure,pySaxion.pressure,lhtGronau.pressure,
            lhtWierden.pressure,lhtSaxion.pressure,KlimaWatchSensor.pressure,
            'Pressure','Pressure (hPa)');
    }
}
function Humidity(){
    track_value = 3;
    if(track_display === 1){
        Hours();
    }else {
        Make_Graph(lables, pyWierden.humidity, pySaxion.humidity, lhtGronau.humidity,
            lhtWierden.humidity, lhtSaxion.humidity, KlimaWatchSensor.humidity,
            'Humidity', 'Relative Humidity %');
    }
}
function Visibility(){
    track_value = 4;
    if(track_display === 1){
        Hours();
    }else {
        Make_Graph(lables, pyWierden.visibility, pySaxion.visibility, lhtGronau.visibility,
            lhtWierden.visibility, lhtSaxion.visibility, KlimaWatchSensor.visibility,
            'Visibility', 'Meter');
    }
}
function WindSpeed(){
    track_value = 5;
    if(track_display === 1){
        Hours();
    }else {
        Make_Graph(lables, pyWierden.wind_speed, pySaxion.wind_speed, lhtGronau.wind_speed,
            lhtWierden.wind_speed, lhtSaxion.wind_speed, KlimaWatchSensor.wind_speed,
            'WindSpeed', 'Metres per second (m/s)');
    }
}
function Make_Graph(data0,data1, data2, data3, data4,data5,data6,optionText,labelString) {
    myChart.destroy();
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels:data0,
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
                    time: {
                        parser: 'MM/DD/YYYY hh:mm:ss a',
                        displayFormats: {
                            'millisecond': 'MM/DD/YYYY hh:mm:ss a',
                            'second': 'MM/DD/YYYY hh:mm:ss a',
                            'minute': 'MM/DD/YYYY hh:mm:ss a',
                            'hour': 'MM/DD/YYYY hh:mm:ss a',
                            'day': 'MM/DD/YYYY hh:mm:ss a',
                            'week': 'MM/DD/YYYY hh:mm:ss a',
                            'month': 'MM/DD/YYYY hh:mm:ss a',
                            'quarter': 'MM/DD/YYYY hh:mm:ss a',
                            'year': 'MM/DD/YYYY hh:mm:ss a',
                        },
                    },
                    position: 'bottom',
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
function Hours(){
    track_display = 1;
    Update_Graph(Tracking_Newest_Data(pyWierden),Tracking_Newest_Data(lhtSaxion))
}
function Tracking_Newest_Data(arr){
    var date = pyWierden.time[0].split(" ")[0];
    var track=0;
    while(true){
        for(i =0;i<arr.time.length;i++){
            if(date === arr.time[i].split(" ")[0]){
                track++;
                i++;
            }else{
                return track;
            }
        }

    }
}
function Update_Graph(index1,index2){
    var newData0=[];
    var newData1=[];
    var newData2=[];
    var newData3=[];
    var newData4=[];
    var newData5=[];
    var newData6=[];
    switch (track_value) {
        case 1:
            for(i=0;i<index1;i++){
                newData1.push(pyWierden.temperature[i]);
            }
            for(i=0;i<index1;i++){
                newData2.push(pySaxion.temperature[i]);
            }
            for(i=0;i<index1;i++){
                newData3.push(lhtGronau.temperature[i]);
            }
            for(i=0;i<index1;i++){
                newData4.push(lhtWierden.temperature[i]);
            }
            for(i=0;i<index2;i++){
                newData5.push(lhtSaxion.temperature[i]);
            }
            for(i=0;i<index2;i++){
                newData6.push(KlimaWatchSensor.temperature[i]);
            }
            for(i=0;i<index1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Make_Graph(newData0,newData1,newData2,newData3,newData4,newData5,newData6,'Temperature','C Degree');
            break;
        case 2:
            for(i=0;i<index1;i++){
                newData1.push(pyWierden.pressure[i]);
            }
            for(i=0;i<index1;i++){
                newData2.push(pySaxion.pressure[i]);
            }
            for(i=0;i<index1;i++){
                newData3.push(lhtGronau.pressure[i]);
            }
            for(i=0;i<index1;i++){
                newData4.push(lhtWierden.pressure[i]);
            }
            for(i=0;i<index2;i++){
                newData5.push(lhtSaxion.pressure[i]);
            }
            for(i=0;i<index2;i++){
                newData6.push(KlimaWatchSensor.pressure[i]);
            }
            for(i=0;i<index1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Make_Graph(newData0,newData1,newData2,newData3,newData4,newData5,newData6,'Pressure','Pressure (hPa)');
            break;
        case 3:
            for(i=0;i<index1;i++){
                newData1.push(pyWierden.humidity[i]);
            }
            for(i=0;i<index1;i++){
                newData2.push(pySaxion.humidity[i]);
            }
            for(i=0;i<index1;i++){
                newData3.push(lhtGronau.humidity[i]);
            }
            for(i=0;i<index1;i++){
                newData4.push(lhtWierden.humidity[i]);
            }
            for(i=0;i<index2;i++){
                newData5.push(lhtSaxion.humidity[i]);
            }
            for(i=0;i<index2;i++){
                newData6.push(KlimaWatchSensor.humidity[i]);
            }
            for(i=0;i<index1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Make_Graph(newData0,newData1,newData2,newData3,newData4,newData5,newData6,'Humidity','Relative Humidity %');
            break;
        case 4:
            for(i=0;i<index1;i++){
                newData1.push(pyWierden.visibility[i]);
            }
            for(i=0;i<index1;i++){
                newData2.push(pySaxion.visibility[i]);
            }
            for(i=0;i<index1;i++){
                newData3.push(lhtGronau.visibility[i]);
            }
            for(i=0;i<index1;i++){
                newData4.push(lhtWierden.visibility[i]);
            }
            for(i=0;i<index2;i++){
                newData5.push(lhtSaxion.visibility[i]);
            }
            for(i=0;i<index2;i++){
                newData6.push(KlimaWatchSensor.visibility[i]);
            }
            for(i=0;i<index1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Make_Graph(newData0,newData1,newData2,newData3,newData4,newData5,newData6,'Visibility', 'Meter');
            break;
        case 5:
            for(i=0;i<index1;i++){
                newData1.push(pyWierden.wind_speed[i]);
            }
            for(i=0;i<index1;i++){
                newData2.push(pySaxion.wind_speed[i]);
            }
            for(i=0;i<index1;i++){
                newData3.push(lhtGronau.wind_speed[i]);
            }
            for(i=0;i<index1;i++){
                newData4.push(lhtWierden.wind_speed[i]);
            }
            for(i=0;i<index2;i++){
                newData5.push(lhtSaxion.wind_speed[i]);
            }
            for(i=0;i<index2;i++){
                newData6.push(KlimaWatchSensor.wind_speed[i]);
            }
            for(i=0;i<index1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Make_Graph(newData0,newData1,newData2,newData3,newData4,newData5,newData6,'WindSpeed', 'Metres per second (m/s)');
            break;

    }
}
function All_Data(){
    track_display = 0;
    switch (track_value) {
        case 1:
            Temperature();
            break;
        case 2:
            Pressure();
            break;
        case 3:
            Humidity();
            break;
        case 4:
            Visibility();
            break;
        case 5:
            WindSpeed();
            break;

    }
}
