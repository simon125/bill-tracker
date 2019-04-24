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
            if (prop === "cash") {
                labels[0] = prop;
                data[0] = paymentMethods[prop];
            } else if (prop === "card") {
                labels[1] = prop;
                data[1] = paymentMethods[prop];
            } else {
                labels[2] = prop;
                data[2] = paymentMethods[prop];
            }
        }
    }
    return {
        labels, data
    }
}

function PaymentStats({ paymentMethodDateRange, setPaymentMethodsDateRange, dataToDisplay, percentageValues: { cashPercent, cardPercent } }) {

    const [isDateWidgetOpen, togleDateWidget] = useState(false);

    const handleOnDatePicker = () => {
        togleDateWidget(!isDateWidgetOpen);
    }

    return (
        <React.Fragment>
            <h3 className="mb-3">Payment methods</h3>
            {dataToDisplay['data'].length === 0 ?
                <h4 className="h-50 my-5">No data to display</h4>
                :
                <PieChart
                    labels={dataToDisplay.labels}
                    data={dataToDisplay.data} />}

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
                        <span style={{ fontSize: '30px' }}>{cashPercent} %</span>
                    </span>
                    <span className="d-flex justify-content-center">
                        <i style={{ color: '#6585bb' }} className="far fa-credit-card fa-3x mr-2"></i>
                        <span style={{ fontSize: '30px' }}>{cardPercent} %</span>
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
    const paymentMethodDateRange = state.statsSettings.paymentMethodDateRange;
    const filtredBills = getBillsFiltredByDate(allBills, paymentMethodDateRange);
    const paymentMethods = getPaymentMethods(filtredBills);
    const dataToDisplay = getDataToDisplay(paymentMethods);

    let unknonwMethods = 0, cashPercent = 0, cardPercent = 0;
    if (paymentMethods.hasOwnProperty('unknown')) {
        unknonwMethods = paymentMethods['unknown'];
    }
    if (dataToDisplay['data'].length !== 0 && Math.max(...dataToDisplay['data']) !== 0) {
        cashPercent = Math.round((paymentMethods['cash'] / (paymentMethods['card'] + paymentMethods['cash'] + unknonwMethods)) * 100);
        cardPercent = Math.round((paymentMethods['card'] / (paymentMethods['card'] + paymentMethods['cash'] + unknonwMethods)) * 100);
    }


    return {
        dataToDisplay,
        paymentMethodDateRange,
        percentageValues: {
            cashPercent,
            cardPercent
        }
    }
}


export default connect(mapStateToProps, { setPaymentMethodsDateRange })(PaymentStats);