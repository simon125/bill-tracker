import React, { useState } from 'react';
import ExpenseTimeChart from '../ExpenseTimeChart';
import DateWidget from '../DateWidget';

// import 

const ExpensesStats = () => {


    const [isDateWidgetOpen, toggleDateWidget] = useState(false);
    const [dateRange, setDateRange] = useState('');

    return (
        <React.Fragment>
            <h3 className="mb-3">
                Expenses graph
            </h3>
            {/* <ExpenseTimeChart bills={this.props.bills} dateRange={this.state.dateRange} /> */}
            <div className="form-group mt-2 text-left">
                <label htmlFor="date-range">Date range</label>
                <input
                    onClick={() => { }}
                    id="date-range"
                    className="form-control"
                    placeholder="Choose date range"
                    onChange={() => { }}
                    value={true} />
            </div>
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => this.props.setExpensesDateRange(dateRange)}
                    onCloseClick={this.onDatePickerClickExpGraph}
                />
            </section>
        </React.Fragment>
    )
}


export default ExpensesStats;