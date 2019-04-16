import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setExpensesDateRange } from '../../actions/statsSettingsActions';
import { getBillsFiltredByDate, sortBillsByDate } from '../../logic';
import moment from 'moment';

import ExpenseTimeChart from '../ExpenseTimeChart';
import DateWidget from '../DateWidget';


const ExpensesStats = ({
    expensesDateRange,
    setExpensesDateRange,
    dataToDisplay,
    highestExpense,
    lowestExpense,
    avarageExpense, data, labels }) => {

    const [isDateWidgetOpen, toggleDateWidget] = useState(false);


    const handleOnDatePickerClick = () => {
        toggleDateWidget(!isDateWidgetOpen);
    }
    const handleOnClick = () => console.log()

    return (
        <React.Fragment>
            <div className="d-flex justify-content-around my-1">
                <button className="btn btn-primary">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <h3 className="mb-3">
                    Expenses graph
            </h3>
                <button className="btn btn-primary">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <ExpenseTimeChart data={data} labels={labels} />
            <div className="d-flex justify-content-around pl-5">
                <div className="d-flex">
                    <button style={{ height: '40px' }} className="btn btn-primary mr-2" onClick={() => handleOnClick(5)}>
                        <i className="fas fa-angle-left"></i>
                    </button>
                    <div style={{ width: "58px", height: '40px' }} className="form-group">
                        <input min="0" max="10" className="form-control" type="number" name="" id="" defaultValue="1" />
                    </div>

                    <button style={{ height: '40px' }} className="btn btn-primary ml-2" onClick={() => handleOnClick(5)}>
                        <i className="fas fa-angle-right"></i>
                    </button>
                </div>
                <div className="d-flex">
                    <button style={{ height: '40px' }} className="btn btn-primary mr-2" onClick={() => handleOnClick(5)}>
                        <i className="fas fa-angle-left"></i>
                    </button>
                    <div style={{ width: "58px", height: '40px' }} className="form-group">
                        <input min="0" max="10" className="form-control" type="number" name="" id="" defaultValue="1" />
                    </div>
                    <button style={{ height: '40px' }} className="btn btn-primary ml-2" onClick={() => handleOnClick(5)}>
                        <i className="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="d-flex">

                <div className="form-group mt-2 text-left">
                    <label htmlFor="date-range">Date range</label>
                    <input
                        onClick={handleOnDatePickerClick}
                        id="date-range"
                        className="form-control"
                        placeholder="Choose date range"
                        onChange={() => { }}
                        value={expensesDateRange} />

                </div>

                <div className="p-1 pt-3 d-flex justify-content-around align-items-center w-100 h3" style={{ fontWeight: '100' }}>
                    <p className="m-0">
                        <span >Max: </span>
                        <b>{highestExpense} PLN</b>
                    </p>
                    <p className="m-0">
                        <span >Avg: </span>
                        <b>{avarageExpense = 0} PLN</b>
                    </p>
                    <p className="m-0">
                        <span >Min: </span>
                        <b>{lowestExpense} PLN</b>
                    </p>
                </div>
            </div>
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => setExpensesDateRange(dateRange)}
                    onCloseClick={handleOnDatePickerClick}
                />
            </section>
        </React.Fragment>
    )
}


const getListOfBills = bills => {
    const list = {};
    bills.forEach(bill => {
        if (list.hasOwnProperty(bill.shoppingDate)) {
            list[bill.shoppingDate] += bill.price * 1;
        } else {
            list[bill.shoppingDate] = bill.price;
        }
    });
    return list;
}

const getListOfDatesFromTo = (firstDay, secondDay) => {
    const arrDates = [];
    const dif = secondDay.diff(firstDay, 'days');

    for (let i = 0; i <= dif; i++) {
        if (i === 0) {
            arrDates[i] = {
                shoppingDate: moment(firstDay).format('YYYY-MM-DD'),
                price: 0
            }
            continue;
        }
        arrDates[i] = {
            shoppingDate: firstDay.add(1, 'days').format('YYYY-MM-DD'),
            price: 0
        }
    }
    return arrDates;
}

const getHighestExpense = list => {
    const prices = Object.values(list);
    if (prices.length === 0) {
        return 0;
    }
    return Math.max(...prices);
}
const getLowestExpense = list => {
    const prices = Object.values(list);
    if (prices.length === 0) {
        return 0;
    }
    return Math.min(...prices);
}
const getAvarageExpense = list => {

}
const getBillsToDisplay = (sortedBills, datePriceList) => {
    if (sortedBills.length === 0) {
        return [];
    }
    const firstDay = moment(sortedBills[0].shoppingDate);
    const secondDay = moment(sortedBills[sortedBills.length - 1].shoppingDate);
    const listOfDates = getListOfDatesFromTo(firstDay, secondDay);
    const validData = listOfDates.map(bill => {
        if (datePriceList.hasOwnProperty(bill.shoppingDate)) {
            return {
                shoppingDate: bill.shoppingDate,
                price: datePriceList[bill.shoppingDate]
            }
        } else {
            return bill;
        }
    });
    return validData;
}

const mapStateToProps = (state) => {

    const allBills = state.state.bills;
    const expensesDateRange = state.statsSettings.expensesDateRange;
    const filtredBillsByDate = getBillsFiltredByDate(allBills, expensesDateRange);
    debugger
    const filtredBills = getBillsFiltredByDate(filtredBillsByDate, expensesDateRange);
    const sortedBills = sortBillsByDate(filtredBills, true);
    const billsList = getListOfBills(sortedBills);
    const dataToDisplay = getBillsToDisplay(sortedBills, billsList);
    const highestExpense = getHighestExpense(billsList);
    const lowestExpense = getLowestExpense(billsList);
    // const avarageExpense = getAvarageExpense();

    // debugger

    const labels = [], data = [];

    dataToDisplay
        .forEach((bill) => {
            labels.push(bill.shoppingDate);
            data.push(bill.price);
        });

    return {
        expensesDateRange,
        dataToDisplay,
        highestExpense,
        lowestExpense,
        // avarageExpense,
        labels,
        data
    }
}

export default connect(mapStateToProps, { setExpensesDateRange })(ExpensesStats);