import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data = [1, 2, 4, 5, 2], labels = ['test1', 'test1', 'test1', 'test1', 'test1', 'test1',] }) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Payment method',
                data,
                backgroundColor: [
                    '#00c45a',
                    '#6585bb',
                    '#1943aa'
                ]
            }
        ]
    }
    const options = {
        legend: {
            labels: {
                fontColor: '#fff'
            }
        }
    }
    const getHeight = () => {
        const width = window.innerWidth;
        if (width >= 1240) {
            return 80;
        } else if (width < 1240 && width > 1000) {
            return 100;
        } else if (width <= 1000 && width >= 768) {
            return 140
        } else if (width < 768 && width > 500) {
            return 70;
        } else if (width <= 580) {
            return 100;
        }
    }
    return (
        <div className="chart">
            <Doughnut
                width={100}
                height={getHeight()}
                data={chartData}
                options={options}
            />
        </div>
    );
}

export default Chart;