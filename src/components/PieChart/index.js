import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {

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
        const paymentMethods = this.props.paymentMethods;
        const labels = [], data = [];

        for (let prop in paymentMethods) {
            if (paymentMethods.hasOwnProperty(prop)) {
                labels.push(prop);
                data.push(paymentMethods[prop]);
            }
        }


        this.setState({
            chartData: {
                labels,
                datasets: [
                    {
                        label: 'Numbers',
                        data,
                        backgroundColor: [
                            '#00c45a',
                            '#6585bb',
                        ]
                    }
                ]
            }
        })
    }

    getWidth = () => {

    }
    getHeight = () => {
        if (window.innerWidth >= 1240) {
            return 80;
        } else if (window.innerWidth < 1240 && window.innerWidth > 1000) {
            return 100;
        } else if (window.innerWidth <= 1000 && window.innerWidth >= 768) {
            return 140
        } else if (window.innerWidth < 768 && window.innerWidth > 500) {
            return 70;
        }
        else if (window.innerWidth <= 580) {
            return 100;
        }
    }

    render() {
        return (
            <div className="chart">
                <Pie
                    width={100}
                    height={this.getHeight()}
                    data={this.state.chartData}
                    options={{
                        legend: {
                            labels: {
                                fontColor: '#fff'
                            }
                        },

                        // maintainAspectRatio: false,

                    }}
                />
            </div>
        )
    }
}


export default Chart