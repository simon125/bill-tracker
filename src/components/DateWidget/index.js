import React, { useState } from 'react';
import moment from 'moment';
import './style.css'

import { DateRange } from 'react-date-range';

const DateWidget = ({ onCloseClick, setDateRange }) => {

    const daysInMonth = moment().daysInMonth();


    const [startDate, setStartDate] = useState(moment().format('01/MM/YYYY'));
    const [endDate, setEndDate] = useState(moment().format(`${daysInMonth}/MM/YYYY`));


    const onMonthClick = () => {
        const startDate = moment().format(`01/MM/YYYY`);
        const endDate = moment().format(`${moment().daysInMonth()}/MM/YYYY`);
        setStartDate(startDate);
        setEndDate(endDate);
    }
    const onQuarterClick = () => {
        const quarter = moment().quarter();
        let startDate, endDate, daysInMonth;
        if (quarter === 1) {
            startDate = moment().format(`01/01/YYYY`);
            daysInMonth = moment(`03/YYYY`, 'MM/YYYY').daysInMonth();
            endDate = moment().format(`${daysInMonth}/03/YYYY`)
        } else if (quarter === 2) {
            startDate = moment().format(`01/04/YYYY`);
            daysInMonth = moment(`06/YYYY`, 'MM/YYYY').daysInMonth();
            endDate = moment().format(`${daysInMonth}/06/YYYY`)
        } else if (quarter === 3) {
            startDate = moment().format(`01/07/YYYY`);
            daysInMonth = moment(`09/YYYY`, 'MM/YYYY').daysInMonth();
            endDate = moment().format(`${daysInMonth}/09/YYYY`)
        } else if (quarter === 4) {
            startDate = moment().format(`01/10/YYYY`);
            daysInMonth = moment(`12/YYYY`, 'MM/YYYY').daysInMonth();
            endDate = moment().format(`${daysInMonth}/12/YYYY`)
        }
        setStartDate(startDate);
        setEndDate(endDate);
    }
    const onYearClick = () => {
        const daysInDecember = moment('12/YYYY', 'MM/YYYY').daysInMonth();
        const startDate = moment().format(`01/01/YYYY`);
        const endDate = moment().format(`${daysInDecember}/12/YYYY`);
        setStartDate(startDate);
        setEndDate(endDate);
    }
    const setRangeDates = (range) => {
        const dayEnd = range.endDate._d.getDate();
        const monthEnd = range.endDate._d.getMonth() + 1;
        const yearEnd = range.endDate._d.getFullYear();
        const dayStart = range.startDate._d.getDate();
        const monthStart = range.startDate._d.getMonth() + 1;
        const yearStart = range.startDate._d.getFullYear();
        setStartDate(`${dayStart}/${monthStart}/${yearStart}`);
        setEndDate(`${dayEnd}/${monthEnd}/${yearEnd}`);
    }



    return (
        <div className="date-widget__container">
            <div className="date-widget__card">
                <span
                    onClick={() => onCloseClick()}
                    className="date-widget__close--x">
                    &times;
                </span>
                <div className="date-widget__columns-container">
                    <div className="date-widget__column1">
                        <div className="date-widget__this-btn-group">
                            <button onClick={onMonthClick} className="date-widget__button date-widget__button--function">
                                {window.innerWidth <= 505 ? 'Month' : 'This month'}
                            </button>
                            <button onClick={onQuarterClick} className="date-widget__button date-widget__button--function">
                                {window.innerWidth <= 505 ? 'Quarter' : 'This quarter'}
                            </button>
                            <button onClick={onYearClick} className="date-widget__button date-widget__button--function">
                                {window.innerWidth <= 505 ? 'Year' : 'This year'}
                            </button>
                        </div>
                        <div className="date-widget__output">
                            <h5>
                                From:
                            </h5>
                            <h6>{startDate}</h6>
                            <h5>
                                To:
                            </h5>
                            <h6>{endDate}</h6>
                        </div>
                        <div className="date-widget__functions-btn-group">
                            <button className="date-widget__button date-widget__button--success">
                                {window.innerWidth <= 505 ? <i className="fa fa-check"></i> : 'Applay'}
                            </button>
                            <button
                                onClick={() => onCloseClick()}
                                className="date-widget__button date-widget__button--danger clear-margin-r">
                                {window.innerWidth <= 505 ? <i className="fa fa-times"></i> : 'Cancel'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <DateRange
                            startDate={startDate}
                            endDate={endDate}
                            twoStepChange={true}
                            onChange={setRangeDates}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DateWidget;