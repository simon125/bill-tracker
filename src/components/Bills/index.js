import React, { Component } from 'react'
import SingleBill from './SingleBill'

import { connect } from 'react-redux'



class Bills extends Component {

    render() {
        const bills = this.props.bills

        return (
            <React.Fragment>
                {
                    bills.length === 0 ?
                        <h1 className="display-4 mt-5">You have no bills to render</h1>
                        :
                        <div className="card-columns container mx-auto">
                            {bills.map(bill => <SingleBill bill={bill} />)}
                        </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    bills: state.state.bills
})

export default connect(mapStateToProps, null)(Bills)