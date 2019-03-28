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
        billsToDisplay: this.props.bills,
        maxHeight: '0px',
        rotateDeg: '180'

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
    handleOnArrow = () => {

        const maxHeight = this.state.maxHeight === "630px" ? '0px' : "630px";
        const rotateDeg = this.state.rotateDeg === '0' ? '180' : '0';

        this.setState({
            maxHeight,
            rotateDeg
        })
    }
    render() {
        const { bills, billsToDisplay } = this.state;
        const { maxPrice, shopNames } = this.props;
        const isMobileDevice = window.innerWidth <= 550;

        return (
            <div className="container-fluid">
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="row">
                            <div className={isMobileDevice ? "card card-body " : "col-4 col-md-3 col-lg-2"}>
                                <div className={isMobileDevice ? "" : "bg-secondary px-3 option-panel__container"}>
                                    <div className={isMobileDevice ? "d-flex justify-content-end" : "d-none"}>
                                        <span className="mr-3">Choose filter/sort option</span>
                                        <span
                                            onClick={this.handleOnArrow}
                                            style={{ transition: 'all 0.4s', transform: `rotate(${this.state.rotateDeg}deg` }}><i className="fas fa-angle-up fa-lg"></i></span>
                                    </div>
                                    <div style={isMobileDevice ? { overflow: 'hidden', transition: 'all 0.3s', maxHeight: this.state.maxHeight } : {}}>
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
                            </div>
                            <div className={isMobileDevice ? "col-12 options-panel__conainer--col-2" : "col-8 col-md-9 col-lg-10 pr-4 options-panel__conainer--col-2"}>

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