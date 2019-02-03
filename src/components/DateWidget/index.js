import React from 'react'

import { DateRange } from 'react-date-range';

const DateWidget = () => {

    return (
        <div className="card card-body ml-5 p-4" style={style}>

            <div className="d-flex">
                <div className="mr-3">
                    <button className="btn btn-primary btn-block">This month</button>
                    <button className="btn btn-primary btn-block">This quarter</button>
                    <button className="btn btn-primary btn-block">This year</button>
                </div>
                <div>
                    <DateRange
                    // onInit={this.handleSelect}
                    // onChange={this.handleSelect}
                    />
                </div>
            </div>
        </div>
    )
}

export default DateWidget;


const style = { zIndex: '10000', position: 'absolute', top: '50vh', left: '50vw', transform: 'translate(-50%, -50%)', width: '60vw' };