let pyWierden = {
    temperature: [],
    humidity: [],
    pressure: [],
    visibility: [],
    wind_speed: [],
    time: []
}
let pySaxion ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
let lhtGronau ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
let lhtWierden ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
let lhtSaxion ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
let KlimaWatchSensor ={
    temperature: [],
    humidity: [],
    pressure:[],
    visibility: [],
    wind_speed: [],
    time:[]
}
var track_value = 0;
var track_display = 1;
let Chart_Data = {
    labels: pyWierden.time,
    datasets: [{
        label: 'pyWierden',
        data: pyWierden.temperature,
        borderColor: "red",
        fill: false,
        borderWidth: 1
    },
        {
            label: 'pySaxion',
            data: pySaxion.temperature,
            borderColor: "green",
            fill: false,
            borderWidth: 1,
            labels: pySaxion.time,
        },
        {
            label: 'lhtGronau',
            data: lhtGronau.temperature,
            borderColor: "blue",
            fill: false,
            borderWidth: 1,
            labels: lhtGronau.time,
        },
        {
            label: 'lhtWierden',
            data: lhtWierden.temperature,
            borderColor: "yellow",
            fill: false,
            borderWidth: 1,
            labels: lhtWierden.time,
        },
        {
            label: 'lhtSaxion',
            data: lhtSaxion.temperature,
            borderColor: "aqua",
            fill: false,
            borderWidth: 1,
            labels: lhtSaxion.time,
        },
        {
            label: 'KlimaWatchSensor',
            data: KlimaWatchSensor.temperature,
            borderColor: "black",
            fill: false,
            borderWidth: 1,
            labels: KlimaWatchSensor.time,
        }]
};
let config = {
    type: 'line',
    data: Chart_Data,
    options: {
        title: {
            display: true,
            text: "Temperature"
        },
        scales: {
            xAxes: [{
                type: "time",
                time: {
                    unit: 'day',
                },
                position: 'bottom',
                scaleLabel: {
                    display: true,
                    labelString: 'Time'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'C Degree'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};
let  myChart;
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
function Temperature(){
    track_display = 1;
    if(track_value === 1) {
        Hours();
    }if(track_value === 0){
        Make_Temperature_Chart();
    }
}
function Pressure(){
    track_display = 2;
    if(track_value === 1) {
        Hours();
    }if(track_value === 0) {
        Make_Pressure_Chart();
    }
}
function Humidity(){
    track_display = 3;
    if(track_value === 1) {
        Hours();
    }if(track_value === 0){
        Make_Humidity_Chart();
    }
}
function Visibility(){
    track_display = 4;
    if(track_value === 1) {
        Hours();
    }if(track_value === 0){
        Make_Visibility_Chart();
    }
}
function WindSpeed(){
    track_display = 5;
    if(track_value === 1) {
        Hours();
    }if(track_value === 0){
        Make_Wind_Speed_Chart();
    }
}
function Tracking_Newest_Data(arr){
    let index = arr.time.length -1;
    let date = new Date(arr.time[index]);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let track=0;
    while(true){
        for(let i = arr.time.length -1;i>0;i--){
            let current = new Date(arr.time[i]);
            let current_day = current.getDate();
            let current_month = arr.time[i].getMonth();
            let current_year = arr.time[i].getFullYear();
            if(day === current_day && month === current_month && year === current_year){
                track++;
            }else{
                return track;
            }
        }

    }
}
function Update_Graph(index1,index2){
    let index_1 = pyWierden.time.length;
    let index_2 = lhtSaxion.time.length;
    let position1 = index_1 - index1;
    let position2 = index_2 - index2;
    let newData0=[];
    let newData1=[];
    let newData2=[];
    let newData3=[];
    let newData4=[];
    let newData5=[];
    let newData6=[];
    switch (track_display) {
        case 1:
            for(let i=position1;i<index_1;i++){
                newData1.push(pyWierden.temperature[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData2.push(pySaxion.temperature[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData3.push(lhtGronau.temperature[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData4.push(lhtWierden.temperature[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData5.push(lhtSaxion.temperature[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData6.push(KlimaWatchSensor.temperature[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Chart_Data.labels = newData0;
            config.options.scales.xAxes[0].time.unit = "hour";
            config.options.title.text = "Temperature";
            config.options.scales.yAxes[0].scaleLabel.labelString = "C Degree";
            Chart_Data.datasets[0].data = newData1;
            Chart_Data.datasets[1].data = newData2;
            Chart_Data.datasets[2].data = newData3;
            Chart_Data.datasets[3].data = newData4;
            Chart_Data.datasets[4].data = newData5;
            Chart_Data.datasets[5].data = newData6;
            myChart.update();
            break;
        case 2:
            for(let i=position1;i<index_1;i++){
                newData1.push(pyWierden.pressure[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData2.push(pySaxion.pressure[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData3.push(lhtGronau.pressure[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData4.push(lhtWierden.pressure[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData5.push(lhtSaxion.pressure[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData6.push(KlimaWatchSensor.pressure[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Chart_Data.labels = newData0;
            config.options.scales.xAxes[0].time.unit = "hour";
            config.options.title.text = "Pressure";
            config.options.scales.yAxes[0].scaleLabel.labelString = "Pressure (hPa)";
            Chart_Data.datasets[0].data = newData1;
            Chart_Data.datasets[1].data = newData2;
            Chart_Data.datasets[2].data = newData3;
            Chart_Data.datasets[3].data = newData4;
            Chart_Data.datasets[4].data = newData5;
            Chart_Data.datasets[5].data = newData6;
            myChart.update();
            break;
        case 3:
            for(let i=position1;i<index_1;i++){
                newData1.push(pyWierden.humidity[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData2.push(pySaxion.humidity[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData3.push(lhtGronau.humidity[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData4.push(lhtWierden.humidity[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData5.push(lhtSaxion.humidity[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData6.push(KlimaWatchSensor.humidity[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Chart_Data.labels = newData0;
            config.options.scales.xAxes[0].time.unit = "hour";
            config.options.title.text = "Humidity";
            config.options.scales.yAxes[0].scaleLabel.labelString = "Relative Humidity %";
            Chart_Data.datasets[0].data = newData1;
            Chart_Data.datasets[1].data = newData2;
            Chart_Data.datasets[2].data = newData3;
            Chart_Data.datasets[3].data = newData4;
            Chart_Data.datasets[4].data = newData5;
            Chart_Data.datasets[5].data = newData6;
            myChart.update();
            break;
        case 4:
            for(let i=position1;i<index_1;i++){
                newData1.push(pyWierden.visibility[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData2.push(pySaxion.visibility[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData3.push(lhtGronau.visibility[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData4.push(lhtWierden.visibility[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData5.push(lhtSaxion.visibility[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData6.push(KlimaWatchSensor.visibility[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Chart_Data.labels = newData0;
            config.options.scales.xAxes[0].time.unit = "hour";
            config.options.title.text = "Visibility";
            config.options.scales.yAxes[0].scaleLabel.labelString = "Meter";
            Chart_Data.datasets[0].data = newData1;
            Chart_Data.datasets[1].data = newData2;
            Chart_Data.datasets[2].data = newData3;
            Chart_Data.datasets[3].data = newData4;
            Chart_Data.datasets[4].data = newData5;
            Chart_Data.datasets[5].data = newData6;
            myChart.update();
            break;
        case 5:
            for(let i=position1;i<index_1;i++){
                newData1.push(pyWierden.wind_speed[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData2.push(pySaxion.wind_speed[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData3.push(lhtGronau.wind_speed[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData4.push(lhtWierden.wind_speed[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData5.push(lhtSaxion.wind_speed[i]);
            }
            for(let i=position2;i<index_2;i++){
                newData6.push(KlimaWatchSensor.wind_speed[i]);
            }
            for(let i=position1;i<index_1;i++){
                newData0.push(pyWierden.time[i]);
            }
            Chart_Data.labels = newData0;
            config.options.scales.xAxes[0].time.unit = "hour";
            config.options.title.text = "Wind Speed";
            config.options.scales.yAxes[0].scaleLabel.labelString = "Metres per second (m/s)";
            Chart_Data.datasets[0].data = newData1;
            Chart_Data.datasets[1].data = newData2;
            Chart_Data.datasets[2].data = newData3;
            Chart_Data.datasets[3].data = newData4;
            Chart_Data.datasets[4].data = newData5;
            Chart_Data.datasets[5].data = newData6;
            myChart.update();
            break;

    }
}
function Hours(){
    track_value = 1;
    Update_Graph(Tracking_Newest_Data(pyWierden),Tracking_Newest_Data(lhtSaxion))
}
function Make_Temperature_Chart(){
    Chart_Data.labels = pyWierden.time;
    config.options.scales.xAxes[0].time.unit = "day";
    config.options.title.text = "Temperature";
    config.options.scales.yAxes[0].scaleLabel.labelString = "C Degree";
    Chart_Data.datasets[0].data = pyWierden.temperature;
    Chart_Data.datasets[1].data = lhtGronau.temperature;
    Chart_Data.datasets[2].data = lhtWierden.temperature;
    Chart_Data.datasets[3].data = pyWierden.temperature;
    Chart_Data.datasets[4].data = lhtSaxion.temperature;
    Chart_Data.datasets[5].data = KlimaWatchSensor.temperature;
    myChart.update();
}
function Make_Pressure_Chart(){
    Chart_Data.labels = pyWierden.time;
    config.options.scales.xAxes[0].time.unit = "day";
    config.options.title.text = "Pressure";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Pressure (hPa)";
    Chart_Data.datasets[0].data = pyWierden.pressure;
    Chart_Data.datasets[1].data = lhtGronau.pressure;
    Chart_Data.datasets[2].data = lhtWierden.pressure;
    Chart_Data.datasets[3].data = pyWierden.pressure;
    Chart_Data.datasets[4].data = lhtSaxion.pressure;
    Chart_Data.datasets[5].data = KlimaWatchSensor.pressure;
    myChart.update();
}
function Make_Humidity_Chart(){
    Chart_Data.labels = pyWierden.time;
    config.options.scales.xAxes[0].time.unit = "day";
    config.options.title.text = "Humidity";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Relative Humidity %";
    Chart_Data.datasets[0].data = pyWierden.humidity;
    Chart_Data.datasets[1].data = lhtGronau.humidity;
    Chart_Data.datasets[2].data = lhtWierden.humidity;
    Chart_Data.datasets[3].data = pyWierden.humidity;
    Chart_Data.datasets[4].data = lhtSaxion.humidity;
    Chart_Data.datasets[5].data = KlimaWatchSensor.humidity;
    myChart.update();
}
function Make_Visibility_Chart(){
    Chart_Data.labels = pyWierden.time;
    config.options.scales.xAxes[0].time.unit = "day";
    config.options.title.text = "Visibility";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Meters";
    Chart_Data.datasets[0].data = pyWierden.visibility;
    Chart_Data.datasets[1].data = lhtGronau.visibility;
    Chart_Data.datasets[2].data = lhtWierden.visibility;
    Chart_Data.datasets[3].data = pyWierden.visibility;
    Chart_Data.datasets[4].data = lhtSaxion.visibility;
    Chart_Data.datasets[5].data = KlimaWatchSensor.visibility;
    myChart.update();
}
function Make_Wind_Speed_Chart(){
    Chart_Data.labels = pyWierden.time;
    config.options.scales.xAxes[0].time.unit = "day";
    config.options.title.text = "Wind Speed";
    config.options.scales.yAxes[0].scaleLabel.labelString = "Metres per second (m/s)";
    Chart_Data.datasets[0].data = pyWierden.wind_speed;
    Chart_Data.datasets[1].data = lhtGronau.wind_speed;
    Chart_Data.datasets[2].data = lhtWierden.wind_speed;
    Chart_Data.datasets[3].data = pyWierden.wind_speed;
    Chart_Data.datasets[4].data = lhtSaxion.wind_speed;
    Chart_Data.datasets[5].data = KlimaWatchSensor.wind_speed;
    myChart.update();
}
function All_Data(){
    track_value = 0;
    switch (track_display) {
        case 1:
            Make_Temperature_Chart();
            break;
        case 2:
            Make_Pressure_Chart();
            break;
        case 3:
            Make_Humidity_Chart();
            break;
        case 4:
            Make_Visibility_Chart();
            break;
        case 5:
            Make_Wind_Speed_Chart();
            break;
    }
}