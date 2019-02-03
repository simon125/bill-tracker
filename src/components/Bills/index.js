import React, { Component } from 'react'
import SingleBill from '../SingleBill'
import { connect } from 'react-redux'
import './style.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import DateWidget from '../DateWidget'

class Bills extends Component {

    state = {
        filterOption: {

        },
        sortOption: {

        },
        startDate: '',
        endDate: '',
        rangePeriods: { min: 2, max: 10 },
        rangeInputValue: [2, 100]
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
                            <div className="row">
                                <div className="col-2 col-md-3">
                                    <div style={{ height: '100vh' }} className="card card-body sticky-top">
                                        <h4 className="mt-3">Sort by</h4>
                                        <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
                                            <li>
                                                <div className="form-group mt-4">
                                                    <select className="form-control" name="priceFilter" id="priceFilter">
                                                        <option value="price">Price</option>
                                                        <option value="date">Date</option>
                                                        <option value="quantity">Quantity</option>
                                                    </select>
                                                </div>
                                                <button className="btn btn-info btn-block">
                                                    Sort
                                                <i className="fas fa-sort-numeric-down fa-lg ml-1"></i>
                                                </button>

                                            </li>
                                            <li><h6 className="mt-5">Payment method</h6></li>
                                            <li className="d-flex justify-content-around mt-4">
                                                <div>
                                                    <div className="text-center"><i style={{ color: '#6585bb' }} className="far fa-credit-card  fa-2x"></i></div>
                                                    <div className="text-center"><i className="text-success fas fa-money-bill fa-2x"></i></div>
                                                </div>
                                                <div style={{ cursor: "pointer" }} className="align-self-center"><i className="fas fa-sort fa-2x"></i></div>
                                            </li>
                                        </ul>
                                        <h4 className="mt-3">Filter by</h4>
                                        <ul style={{ listStyle: 'none', textAlign: 'left', paddingLeft: 0 }}>
                                            <li>
                                                Price
                                                <Range
                                                    onChange={(value) => {
                                                        this.setState({ ...this.state, rangeInputValue: value })
                                                    }}
                                                    defaultValue={[30, 60]}
                                                    value={this.state.rangeInputValue}
                                                    min={this.state.rangePeriods.min}
                                                    min={this.state.rangePeriods.max}
                                                />
                                            </li>
                                            <li>
                                                <DateWidget />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-10 col-md-9">
                                    {bills.map(bill => <SingleBill key={Math.random()} bill={bill} />)}
                                </div>
                            </div>
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