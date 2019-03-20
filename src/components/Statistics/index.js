import React, { Component } from 'react'

import Chart from '../Chart'

class Statistics extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-light p-3 mx-auto mt-4" style={{ height: '500px' }}>
                        <Chart />
                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-light p-3 mx-auto mt-4" style={{ height: '500px' }}>
                        <Chart />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-light p-3 mx-auto mt-4" style={{ height: '500px' }}>
                        <Chart />
                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-light p-3 mx-auto mt-4" style={{ height: '500px' }}>
                        <Chart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistics