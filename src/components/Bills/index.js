import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getMaxPrice, getShopNames, filterByPrice, filterByShopName, filterByDate } from '../../logic';

import SingleBill from '../SingleBill'
import SortOptionsPanel from '../SortOptionsPanel'

import './style.css'
import 'rc-slider/assets/index.css';

class Bills extends Component {

    state = {
        bills: this.props.bills,
        filtredBills: this.props.bills,
        rangeDate: '',
        shopName: 'all',
        rangeInputValue: [0, 0],
        isDateWidgetOpen: false,
    }
    componentDidMount() {
        this.setState((state) => {
            return {
                ...state, rangeInputValue: [0, this.props.maxPrice]
            }
        })
    }
    handleOnDatePickerClick = () => {
        this.setState({
            ...this.state,
            isDateWidgetOpen: !this.state.isDateWidgetOpen
        });
    }
    setDateRange = (date) => {
        this.setState((state) => {
            return {
                ...state,
                rangeDate: date
            }
        });
    }
    setSortedBills = (sortedBills) => {
        this.setState((state) => {
            return {
                ...state, bills: sortedBills
            }
        });
    }
    changeShopNameFilter = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    setFilteredBills = (filteredBills) => {
        this.setState({
            ...this.state,
            bills: filteredBills
        })
    }
    handleOnRangeChange = (value) => {
        this.setState({ ...this.state, rangeInputValue: value })
    }
    render() {
        const { bills, rangeInputValue, shopName, shopNames, isDateWidgetOpen } = this.state;
        const { maxPrice } = this.props;
        return (
            <div className="container-fluid">
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="row">
                            <div className="col-2">
                                <div
                                    style={{ height: '100vh', width: 'stretch', position: 'fixed' }}
                                    className="card card-body">
                                    <h3 className="mt-3">
                                        <i className="fas fa-sort ml-1"></i>
                                        Sort by</h3>
                                    <SortOptionsPanel
                                        bills={bills}
                                        setSortedBills={this.setSortedBills}
                                    />
                                    {/* <h3 className="mt-3">
                                        <i className="fas fa-filter mr-1"></i>
                                        Filter by
                                    </h3>
                                    <label className="text-left" htmlFor="rangePrice">
                                        Choose price range
                                    </label>
                                    <Range
                                        id="rangePrice"
                                        onChange={this.handleOnRangeChange}
                                        defaultValue={[20, 80]}
                                        value={rangeInputValue}
                                        min={0}
                                        max={maxPrice}
                                    />
                                    <span className="d-flex justify-content-between my-2">
                                        <span>{rangeInputValue[0]} PLN</span>
                                        <span>{rangeInputValue[1]} PLN</span>
                                    </span>
                                    <div className="form-group mt-2">
                                        <label htmlFor="shopName">
                                            Choose shop name
                                        </label>
                                        <select
                                            value={shopName}
                                            onChange={this.changeShopNameFilter}
                                            className="form-control"
                                            name="shopName"
                                            id="shopName">
                                            <option value="all">All shops</option>
                                            {
                                                shopNames ?
                                                    shopNames.map(shopName => <option key={shopName} value={shopName}>{shopName}</option>)
                                                    :
                                                    null
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="date-range">Choose date range</label>
                                        <input
                                            onClick={this.handleOnDatePickerClick}
                                            id="date-range"
                                            className="form-control"
                                            placeholder="Choose date range"
                                            onChange={() => { }}
                                            style={{ maxWidth: '200px' }} />
                                    </div>
                                    <button onClick={this.handleOnFilterClick} className="btn btn-info btn-block">
                                        Filter
                                    </button> */}
                                </div>
                            </div>
                            <div className="col-10">
                                {bills.map(bill => <SingleBill key={Math.random()} bill={bill} />)}
                            </div>

                        </div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const bills = state.state.bills;
    const maxPrice = getMaxPrice(bills);
    const shopNames = getShopNames(bills);

    return {
        bills,
        maxPrice,
        shopNames
    }
}

export default connect(mapStateToProps, null)(Bills)