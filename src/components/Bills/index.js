import React, { Component } from 'react'
import SingleBill from '../SingleBill'
import { connect } from 'react-redux'
import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Bills extends Component {

    state = {
        filterOption: {

        },
        sortOption: {

        },
        startDate: '',
        endDate: ''
    }

    handleChangeStart(date) {
        this.setState({
            ...this.state,
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            ...this.state,
            endDate: date
        });
    }


    render() {
        const bills = this.props.bills




        return (
            <div className="container-fluid">
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="row mx-auto justify-content-between">
                            <div className="card card-body col-12 mt-3">
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="text-left">Sort by:</h6>
                                        <div className={window.innerWidth > 700 ? "d-block row" : "d-none"}>
                                            <div className="d-flex justify-content-around align-items-center">
                                                <label htmlFor="sortByPrice">Price
                                            <input className="ml-1" type="radio" name="sortBy" id="sortByPrice" />
                                                </label>
                                                <label htmlFor="sortByDate">Date
                                            <input className="ml-1" type="radio" name="sortBy" id="sortByDate" />
                                                </label>
                                                <label htmlFor="sortByProductAmount">Amount
                                            <input className="ml-1" type="radio" name="sortBy" id="sortByProductAmount" />
                                                </label>
                                                <label htmlFor="sortByPaymentMethod">Payment
                                            <input className="ml-1" type="radio" name="sortBy" id="sortByPaymentMethod" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className={window.innerWidth <= 700 ? "d-block row" : "d-none"}>
                                            <div className="col-4 d-flex justify-content-between">
                                                <div className="form-group">
                                                    <select name="" id="" className="form-control form-control-sm">
                                                        <option value="">Price</option>
                                                        <option value="">Date</option>
                                                        <option value="">Amount</option>
                                                        <option value="">Payment</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="text-left">Filter:</h6>
                                        <div className={window.innerWidth > 700 ? "d-block row" : "d-none"}>
                                            <div className="d-flex justify-content-between">
                                                <input
                                                    style={{ fontSize: '13px' }}
                                                    placeholder="Min price"
                                                    type="text"
                                                    className="form-control form-control-sm" />
                                                <input
                                                    style={{ fontSize: '13px' }}
                                                    placeholder="Max price"
                                                    type="text"
                                                    className="form-control form-control-sm" />
                                                <input
                                                    style={{ fontSize: '13px' }}
                                                    placeholder="Min amount"
                                                    type="text"
                                                    className="form-control form-control-sm" />
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    selectsStart
                                                    startDate={this.state.startDate}
                                                    endDate={this.state.endDate}
                                                    onChange={this.handleChangeStart}
                                                />

                                                <DatePicker
                                                    selected={this.state.endDate}
                                                    selectsEnd
                                                    startDate={this.state.startDate}
                                                    endDate={this.state.endDate}
                                                    onChange={this.handleChangeEnd}
                                                />
                                            </div>
                                        </div>
                                        <div className={window.innerWidth <= 700 ? "d-block row" : "d-none"}>
                                            <button className="btn btn-primary">Set filter options</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {bills.map(bill => <SingleBill key={Math.random()} bill={bill} />)}
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bills: state.state.bills
})

export default connect(mapStateToProps, null)(Bills)