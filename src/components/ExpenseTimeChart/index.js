import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseTimeChart = ({ labels, data }) => {
    // debugger
    const chartData = {
        labels: [' ', ...labels, ' '],
        datasets: [
            {
                data: [' ', ...data, ' '],
                fontColor: '#fff',
                borderColor: '#fff',
                backgroundColor: '#aaa',
                borderWidth: 1
            }
        ]
    }
    const options = {
        layout: {

        },
        elements: {
            rectangle: {
                borderWidth: 2
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    fontColor: "white",
                    fontSize: 17,
                    callback: function (value) {
                        return value.toFixed(2)
                    }

                },
                scaleLabel: {
                    display: true,
                    labelString: 'Price (PLN)',
                    fontColor: '#fff'
                },
                gridLines: {
                    lineWidth: 2
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 14,
                    maxRotation: 40,
                    padding: 15,
                    userCallback: function (item, index) {
                        let number = window.innerWidth < 1000 ? 10 : 5;
                        if (index === 1) return item;
                        if (((index + 1) % number) === 0) return item;
                        else return ""
                    },
                    autoSkip: false
                },
                gridLines: {
                    drawOnChartArea: false,
                    drawTicks: false,
                    lineWidth: 2
                }
            }]
        },
        tooltips: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function (tooltipItem, data) {
                    return parseFloat(data['datasets'][0]['data'][tooltipItem['index']]).toFixed(2) + " PLN";
                },
                labelColor: function (tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 255, 255)',
                        backgroundColor: 'rgb(255, 255, 255)'
                    };
                }
            },
            backgroundColor: '#2a3f53',
            titleFontSize: 16,
            titleFontColor: '#eee',
            bodyFontColor: '#eee',
            bodyFontSize: 14,
            // padding: 5,
            displayColors: false
        }
    }
    const getHeight = () => {
        const width = window.innerWidth;
        if (width >= 1240) {
            return 50;
        } else if (width < 1240 && width > 1000) {
            return 60;
        } else if (width <= 1000 && width >= 768) {
            return 100
        } else if (width < 768 && width > 500) {
            return 40;
        }
        else if (width <= 580) {
            return 60;
        }
    }
    return (
        <React.Fragment >
            <Bar
                width={100}
                height={35}
                data={chartData}
                options={options}
            />
        </React.Fragment >
    )
}
export default ExpenseTimeChart