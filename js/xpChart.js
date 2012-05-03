$(document ).ready( function() {
    timelineChart = new Highcharts.Chart({
        chart: {
            renderTo: 'timeline',
            type: 'column',
            backgroundColor: '#F5F5F5',
            height: 200,
            spacingTop: 0,
            inverted: true
        },
        title: {text: ''},
        yAxis: {
            gridLineWidth: 1,
            gridLineDashStyle: 'dash',
            showLastLabel: false,
            min: -0.1,
            title: {text: ''},
            labels: {
                enabled: true,
                x: 0,
                y: 0,
                style: {
                    color: '#6D869F',
                    fontWeight: 'bold'
                },
                formatter: function() {
                    if (this.value < 0) return ''
                    else if( this.value != 0 ) return ''
                    else if( this.value != 1 ) return ''
                    /*else if( this.value != 1 ) return ''*/
                    /*else if( this.value != 2 ) return ''
                    else if( this.value != 3 ) return ''
                    else if( this.value != 4 ) return ''*/
                    else return this.value + ' ans'
                }
            }
        },
        xAxis: {
            title: {text: ''},
            labels: {enabled: false}
        },
        credits: {enabled: false},
        series: [
            {
                name: 'AFPA',
                data: [0.25],
                color: '#EAEA86',
                events: {
                    click: function(event) {
                        /*$.scrollTo('#iut', 300, {offset: -40})*/
                    }
                }
            },
            {
                name: 'Vidal',
                data: [0.66],
                color: 'orange',
                events: {
                    click: function(event) {
                        $.scrollTo('#iut', 300, {offset: -40})
                    }
                }
            },
            {
                name: 'DGFiP',
                data: [1.75],
                events: {
                    click: function(event) {
                        $.scrollTo('#desa', 300, {offset: -40})
                    }
                }
            },
            {
                name: 'Crédit Agricole',
                data: [0.5],
                events: {
                    click: function(event) {
                        $.scrollTo('#safig1', 300, {offset: -40})
                    }
                }
            },
            {
                name: 'Accenture',
                data: [0.5],
                events: {
                    click: function(event) {
                        $.scrollTo('#safig2', 300, {offset: -40})
                    }
                }
            },
            {
                name: 'Canal +',
                data: [0.5],
                events: {
                    click: function(event) {
                        $.scrollTo('#vidal', 300, {offset: -40})
                    }
            }
        }
        ],
        legend: {enabled: false},
        tooltip: {
            formatter: function() {
                return this.series.name + ' : ' + this.y +' ans';
            }
        },
        plotOptions: {
            column: {
                animation: false,
                pointWidth: 70,
                stacking: 'normal',
                dataLabels: {
                    rotation: 350,
                    enabled: true,
                    formatter: function() {
                        return this.series.name;
                    },
                    x: 0,
                    align: 'center',
                    style: {
                        font: 'bold 13px Verdana, sans-serif',
                        color: 'white'
                    }
                }
            }
        }
    });
    /*timelineChart = new Highcharts.Chart({
        chart: {
            renderTo: 'timeline',
            type: 'column',
            backgroundColor: '#F5F5F5',
            height: 500,
            spacingTop: 0
        },
        title: {text: ''},
        xAxis: {
            title: {text: ''},
            labels: {enabled: false}
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineDashStyle: 'dash',
            showLastLabel: false,
            //showFirstLabel: false,
            min: -2,
            title: {text: ''},
            labels: {
                enabled: true,
                x: 300,
                y: -3,
                style: {
                    color: '#6D869F',
                    fontWeight: 'bold'
                },
                formatter: function() {
                    if (this.value === -2) return 'School'
                    else return this.value + ' years'
                }
            }
        },
        legend: {enabled: false},
        credits: {enabled: false},
        tooltip: {
            formatter: function() {
                return this.series.name + ' : ' + this.y +' years';
            }
        },
        plotOptions: {
            column: {
                animation: false,
                pointWidth: 40,
                stacking: 'normal',
                dataLabels: {
                    rotation: 350,
                    x: 2,
                    enabled: true,
                    formatter: function() {
                        return this.series.name;
                    },
                    x: -45,
                    align: 'right'
                }
            }
        },
        series: [{
            name: 'Vidal',
            data: [2],
            events: {
                click: function(event) {
                    $.scrollTo('#vidal', 300, {offset: -40})
                }
            }
        }, {
            name: 'Safig Dataway',
            data: [5],
            events: {
                click: function(event) {
                    $.scrollTo('#safig2', 300, {offset: -40})
                }
            }
        }, {
            name: 'Safig Dataway',
            data: [1],
            events: {
                click: function(event) {
                    $.scrollTo('#safig1', 300, {offset: -40})
                }
            }
        }, {
            name: 'DESA Logiciel',
            data: [0.5],
            events: {
                click: function(event) {
                    $.scrollTo('#desa', 300, {offset: -40})
                }
            }
        }, {
            name: 'IUT Reims',
            data: [-2],
            color: '#EAEA86',
            events: {
                click: function(event) {
                    $.scrollTo('#iut', 300, {offset: -40})
                }
            }
        }],
        exporting: {
            buttons: {
                exportButton: {enabled: false},
                printButton: {enabled: false}
            }
        }
    });*/
});