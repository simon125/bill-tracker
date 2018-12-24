import React from 'react'
import './style.css'

class SingleBill extends React.Component {

    state = {
        results: 1,
        expandedResults: false
    }

    expandResults = () => {
        if (!this.state.expandedResults) {
            this.setState({ results: this.props.bill.products.length + 1, expandedResults: !this.state.expandedResults });
        } else {
            this.setState({ results: 1, expandedResults: !this.state.expandedResults });
        }
    }

    renderTableRows = () => {
        return (
            this.props.bill.products.map((product, index) =>
                <tr className={index < this.state.results ? "d-cell" : "d-none"} key={Math.random()}>
                    <td>{product.productName}</td>
                    <td>{parseFloat(product.productAmount).toFixed(2)} x {parseFloat(product.productPrice).toFixed(2)} PLN</td>
                    <td>{parseFloat(product.productAmount * product.productPrice).toFixed(2)} PLN</td>
                </tr>
            )
        )
    }
    render() {

        const { bill } = this.props;

        return (
            <div className="mt-3 col-sm-12 col-md-6 col-lg-4  px-1">
                <div className="card card-body border-dark single-bill__card">
                    <h5 className="card-title d-flex justify-content-between">
                        <span>
                            {bill.nameShop}
                        </span>
                        <span className="lead">
                            {bill.shoppingDate}
                        </span>
                    </h5>
                    {
                        bill.products.length === 0 ?
                            <li className="list-group-item">You spent {parseFloat(bill.price).toFixed(2)} PLN</li>
                            :
                            <table className="table table-bordered table-light text-secondary table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity x price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTableRows()}
                                    <tr>
                                        <td colSpan='3' className='lead'>Sum: {parseFloat(bill.price).toFixed(2)} PLN</td>
                                    </tr>
                                </tbody>
                            </table>
                    }
                    {bill.payment === 'cash'
                        ?
                        <i className="fas single-bill__icon fa-money-bill fa-3x text-success"></i>
                        :
                        <i className="far single-bill__icon fa-credit-card credit-card--color fa-3x"></i>
                    }
                    {
                        this.state.results < bill.products.length
                            ?
                            <span onClick={() => {
                                console.log('no estem');
                                this.expandResults()
                            }}>
                                <i className="far fa-arrow-alt-circle-down fa-2x single-bill__icon--expand"></i>
                            </span>
                            :
                            this.state.expandedResults
                                ?
                                <span onClick={() => {
                                    this.expandResults()
                                }}>
                                    <i className="far fa-arrow-alt-circle-up fa-2x single-bill__icon--expand"></i>
                                </span>

                                :
                                <i style={{ opacity: 0 }} className="far fa-arrow-alt-circle-down fa-2x"></i>
                    }
                </div>
            </div>
        )
    }
}
export default SingleBill