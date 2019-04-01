import React from 'react';
import ExpenseTimeChart from '../ExpenseTimeChart';
import DateWidget from '../DateWidget';

export default function index() {
    return (
        <React.Fragment>
            <h3 className="mb-3">
                Expenses graph
            </h3>
            <ExpenseTimeChart bills={this.props.bills} dateRange={this.state.dateRange} />
            <div className="form-group mt-2 text-left">
                <label htmlFor="date-range">Date range</label>
                <input
                    onClick={this.onDatePickerClickExpGraph}
                    id="date-range"
                    className="form-control"
                    placeholder="Choose date range"
                    onChange={() => { }}
                    value={this.props.statsSettings.expensesDateRange} />
            </div>
            <section className={this.state.expensesGraphDateWidgetIsOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => this.props.setExpensesDateRange(dateRange)}
                    onCloseClick={this.onDatePickerClickExpGraph}
                />
            </section>
        </React.Fragment>
    )
}
