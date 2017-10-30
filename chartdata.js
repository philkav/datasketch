Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Height Versus Weight of 507 Individuals by Gender'
    },
    subtitle: {
        text: 'Source: Heinz  2003'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Height (cm)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Weight (kg)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        }
    },
    series: [{
        name: 'Plot_var',
        data: [
                [10, 12], [10,12.5], [10,12.2], 
                [11, 13], [11, 13], [11, 13.5],
                [12, 24], [12, 24], [12, 29],
                [13, 34], 
                [14, 26], [14, 27], [14, 29], [14, 32]
              ],
        color: 'rgba(223, 83, 83, .5)',


    }, {
        name: 'CPU',
        color: 'rgba(119, 152, 191, .5)',
        data: [[10, 100], [11, 99], [12, 99], [13, 92], [14, 100]],
    }]
});

