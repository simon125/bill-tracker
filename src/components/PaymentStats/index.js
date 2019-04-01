import React, { useState } from 'react';
import { connect } from 'react-redux';

import PieChart from '../PieChart';
import DateWidget from '../DateWidget';

import { setPaymentMethodsDateRange } from '../../actions/statsSettingsActions';
import { getBillsFiltredByDate } from '../../logic'


const getPaymentMethods = (bills) => bills.reduce((methodsAmount, bill) => {
    const paymentMethod = bill.payment;
    if (methodsAmount.hasOwnProperty(paymentMethod)) {
        methodsAmount[paymentMethod] += 1;
    } else {
        methodsAmount[paymentMethod] = 1;
    }
    return methodsAmount;
}, {});

const getDataToDisplay = (paymentMethods) => {
    const labels = [], data = [];
    for (let prop in paymentMethods) {
        if (paymentMethods.hasOwnProperty(prop)) {
            labels.push(prop);
            data.push(paymentMethods[prop]);
        }
    }
    return {
        labels, data
    }
}

function PaymentStats({ bills, paymentMethodDateRange, setPaymentMethodsDateRange }) {

    const [isDateWidgetOpen, togleDateWidget] = useState(false);
    const paymentMethods = getPaymentMethods(bills);
    const dataToDisplay = getDataToDisplay(paymentMethods);

    const val1 = Math.round((paymentMethods['cash'] / (paymentMethods['card'] + paymentMethods['cash'])) * 100);
    const val2 = Math.round((paymentMethods['card'] / (paymentMethods['card'] + paymentMethods['cash'])) * 100);


    const handleOnDatePicker = () => {
        togleDateWidget(!isDateWidgetOpen);
    }

    return (
        <React.Fragment>
            <h3 className="mb-3">Payment methods</h3>
            <PieChart
                labels={dataToDisplay.labels}
                data={dataToDisplay.data} />
            <div className="form-group mt-2 text-left d-flex">
                <div className="w-50">
                    <label htmlFor="date-range">Date range</label>
                    <input
                        onClick={handleOnDatePicker}
                        id="date-range"
                        className="form-control"
                        placeholder="Choose date range"
                        onChange={() => { }}
                        value={paymentMethodDateRange} />
                </div>
                <div className="pl-2 w-50">
                    <span className="d-flex justify-content-center">
                        <i className="text-success fas fa-money-bill fa-3x mr-2"></i>
                        <span style={{ fontSize: '30px' }}>{val1} %</span>
                    </span>
                    <span className="d-flex justify-content-center">
                        <i style={{ color: '#6585bb' }} className="far fa-credit-card fa-3x mr-2"></i>
                        <span style={{ fontSize: '30px' }}>{val2} %</span>
                    </span>
                </div>
            </div>
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => setPaymentMethodsDateRange(dateRange)}
                    onCloseClick={handleOnDatePicker}
                />
            </section>

        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const allBills = state.state.bills;
    const filtredBills = getBillsFiltredByDate(allBills, state.statsSettings.paymentMethodDateRange);

    return {
        bills: filtredBills,
        paymentMethodDateRange: state.statsSettings.paymentMethodDateRange
    }
}


export default connect(mapStateToProps, { setPaymentMethodsDateRange })(PaymentStats);