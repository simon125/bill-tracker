import React, { Component } from 'react';
import {
    setShoppingDateRange,
    setExpensesDateRange
} from '../../actions/statsSettingsActions';

import PaymentStats from '../PaymentStats';



class Statistics extends Component {

    // getTimePriceChartData = () => {
    //     const priceTimeData = {
    //         timeStamps: [],
    //         prices: []
    //     };

    //     this.props.bills.forEach(bill => {
    //         priceTimeData.timeStamps.push(bill.shoppingDate);
    //         priceTimeData.prices.push(bill.price);
    //     });
    //     return priceTimeData;
    // }
    // onDatePickerClickExpGraph = () => {
    //     this.setState({
    //         ...this.state,
    //         expensesGraphDateWidgetIsOpen: !this.state.expensesGraphDateWidgetIsOpen
    //     })
    // }


    render() {
        // const priceTimeData = this.getTimePriceChartData();

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                        <PaymentStats />
                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>

                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                    </div>
                    <div className="col-10 col-md-5 col-lg-5 bg-secondary p-3 mx-auto mt-4" style={{ minHeight: '500px' }}>
                    </div>
                </div> */}
            </div>
        )
    }
}



export default Statistics