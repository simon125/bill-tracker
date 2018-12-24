import React, { Component } from 'react'
import SingleBill from '../SingleBill'
import { connect } from 'react-redux'
import './style.css'

class Bills extends Component {

    render() {
        const bills = this.props.bills

        return (
            <div className="container-fluid">
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="row mx-auto justify-content-between">
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