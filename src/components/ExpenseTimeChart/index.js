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
                    userCallback: function (item, index) {
                        let number = window.innerWidth < 1000 ? 10 : 5;
                        if (index === 0) return item;
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
        <React.Fragment>
            <Bar
                width={100}
                height={35}
                data={chartData}
                options={options}
            />
        </React.Fragment>
    )
}
export default ExpenseTimeChart