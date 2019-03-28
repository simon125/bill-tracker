import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setShoppingDateRange, setPaymentMethodsDateRange, setExpensesDateRange } from '../../actions/statsSettingsActions'

import PieChart from '../PieChart'
import ExpenseTimeChart from '../ExpenseTimeChart'
import DateWidget from '../DateWidget'



class Statistics extends Component {

    state = {
        paymentMethodDateWidgetIsOpen: false,
        expensesGraphDateWidgetIsOpen: false,
        dateRange: '',
    }



    getPaymentMethods = () => {
        const paymentMethods = this.props.bills.reduce((methodsAmount, bill) => {
            const paymentMethod = bill.payment;
            if (methodsAmount.hasOwnProperty(paymentMethod)) {
                methodsAmount[paymentMethod] += 1;
            } else {
                methodsAmount[paymentMethod] = 1;
            }
            return methodsAmount;
        }, {});
        return paymentMethods;
    }
    getTimePriceChartData = () => {
        const priceTimeData = {
            timeStamps: [],
            prices: []
        };

        this.props.bills.forEach(bill => {
            priceTimeData.timeStamps.push(bill.shoppingDate);
            priceTimeData.prices.push(bill.price);
        });
        return priceTimeData;
    }
    onDatePickerClickPayMeth = () => {
        this.setState({
            ...this.state,
            paymentMethodDateWidgetIsOpen: !this.state.paymentMethodDateWidgetIsOpen
        })
    }
    onDatePickerClickExpGraph = () => {
        this.setState({
            ...this.state,
            expensesGraphDateWidgetIsOpen: !this.state.expensesGraphDateWidgetIsOpen
        })
    }
    setDateRange = (dateRange) => {
        this.setState({
            ...this.state,
            dateRange
        })
    }



    render() {

        const paymentMethods = this.getPaymentMethods();
        const priceTimeData = this.getTimePriceChartData();

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                        <h3 className="mb-3">Payment methods</h3>
                        <PieChart paymentMethods={paymentMethods} />
                        <div className="form-group mt-2 text-left">
                            <label htmlFor="date-range">Date range</label>
                            <input
                                onClick={this.onDatePickerClickPayMeth}
                                id="date-range"
                                className="form-control"
                                placeholder="Choose date range"
                                onChange={() => { }}
                                value={this.props.statsSettings.paymentMethodDateRange} />
                        </div>
                        <section className={this.state.paymentMethodDateWidgetIsOpen ? "" : "d-none"}>
                            <DateWidget
                                setDateRange={(dateRange) => this.props.setPaymentMethodsDateRange(dateRange)}
                                onCloseClick={this.onDatePickerClickPayMeth}
                            />
                        </section>

                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                        <h3 className="mb-3">Expenses graph</h3>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                        {/* <Chart /> */}
                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                        {/* <Chart /> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const bills = state.state.bills;

    return {
        bills,
        statsSettings: state.statsSettings
    }
}

export default connect(mapStateToProps, { setShoppingDateRange, setPaymentMethodsDateRange, setExpensesDateRange })(Statistics)