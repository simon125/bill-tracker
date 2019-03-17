import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getMaxPrice, getShopNames } from '../../logic';

import SingleBill from '../SingleBill'
import SortOptionsPanel from '../SortOptionsPanel'
import FilterOptionsPanel from '../FilterOptionsPanel'

import './style.css'
import 'rc-slider/assets/index.css';

class Bills extends Component {
    state = {
        bills: this.props.bills,
        billsToDisplay: this.props.bills
    }
    setSortedBills = (sortedBills) => {
        this.setState((state) => {
            return {
                ...state, billsToDisplay: sortedBills
            }
        });
    }
    setFilteredBills = (filtredBills) => {
        this.setState({
            ...this.state,
            billsToDisplay: filtredBills
        })
    }
    render() {
        const { bills, billsToDisplay } = this.state;
        const { maxPrice, shopNames } = this.props;
        return (
            <div className="container-fluid">
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="row">
                            <div className="col-4 col-md-3 col-lg-2">
                                <div className="bg-secondary px-3 option-panel__container">
                                    <h3 className="mt-3">
                                        <i className="fas fa-sort ml-1"></i>
                                        Sort by
                                    </h3>
                                    <SortOptionsPanel
                                        bills={billsToDisplay}
                                        setSortedBills={this.setSortedBills}
                                    />
                                    <FilterOptionsPanel
                                        bills={bills}
                                        shopNames={shopNames}
                                        maxPrice={maxPrice}
                                        setFilteredBills={this.setFilteredBills} />
                                </div>
                            </div>
                            <div className="col-8 col-md-9 col-lg-10 pr-4 options-panel__conainer--col-2">

                                <div className="row">
                                    {billsToDisplay ? billsToDisplay.map(bill => <SingleBill key={Math.random()} bill={bill} />) : null}
                                </div>
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