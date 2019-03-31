import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import moment from 'moment';


class ExpenseTimeChart extends Component {

    state = {
        chartData: {
            labels: [],
            datasets: [
                {
                    label: 'Numbers',
                    data: []
                }
            ]
        }
    }
    componentDidMount() {
        const bills = this.props.bills;
        const labels = [], data = [];

        bills.sort((a, b) => {
            return new Date(a.shoppingDate).getTime() - new Date(b.shoppingDate).getTime();
        })
            .forEach((bill) => {
                labels.push(bill.shoppingDate);
                data.push(bill.price);
            });

        this.setState({
            chartData: {
                labels,
                datasets: [
                    {
                        data,
                        fontColor: '#fff',
                        borderColor: '#fff',
                        backgroundColor: '#aaa',
                        borderWidth: 0.3
                    }
                ]
            }
        })
    }


    getHeight = () => {
        const width = window.innerWidth;
        if (width >= 1240) {
            return 80;
        } else if (width < 1240 && width > 1000) {
            return 100;
        } else if (width <= 1000 && width >= 768) {
            return 140
        } else if (width < 768 && width > 500) {
            return 70;
        }
        else if (width <= 580) {
            return 100;
        }
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    width={100}
                    height={this.getHeight()}
                    data={this.state.chartData}
                    options={{
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
                                    fontSize: 14,
                                    callback: function (value) {
                                        return value.toFixed(2)
                                    }

                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Price (PLN)',
                                    fontColor: '#fff'
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.5,
                                ticks: {
                                    fontColor: "white",
                                    fontSize: 12,
                                    maxRotation: 90,
                                }
                            }]
                        }

                    }
                    }
                />
            </div>
        )
    }
}

export default ExpenseTimeChart
