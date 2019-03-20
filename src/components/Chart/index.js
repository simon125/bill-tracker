import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'

class Chart extends Component {

    state = {
        chartData: {
            labels: [1, 2, 4, 5, 6, 7, 8],
            datasets: [
                {
                    label: 'Numbers',
                    data: [23, 12, 54, 76, 34, 23]
                }
            ]
        }
    }

    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}


export default Chart