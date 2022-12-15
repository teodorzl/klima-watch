var xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12];
new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [0, 1, 2, -1, -2, 3, 4, 2, 1, 1,0,-1,-2],
            borderColor: "red",
            fill: false,
            label: 'Node 1'
        }, {
            data: [2, 4, 5, 5, 6, 3, 2, 1, 0, 0,1,2,2],
            borderColor: "green",
            fill: false,
            label: 'Node 2'
        }, {
            data: [4, 4, 5, 5, 3, 2, 1, 0, -1, -2,-3,-4,-2],
            borderColor: "blue",
            fill: false,
            label: 'Node 3'
        },{
            data: [2, 2, 3, 1, 1, 0, 1, 0, -2, -1,0,1,2],
            borderColor: "yellow",
            fill: false,
            label: 'Node 4'
        },{
            data: [1, 1, 0, 0, -1, 0, -1, -2, -2, -3,0,1,2],
            borderColor: "purple",
            fill: false,
            label: 'Node 5'
        }]
    },
    options: {
        legend: {display: true},
        scales: {
            yAxes: [{ticks: {min: -4, max:12}}],
        }
    }
});