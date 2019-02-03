import React from 'react'
import './style.css'

class SingleBill extends React.Component {

    state = {
        isOpen: false,
    }

    handleOnClick = e => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log(this.state.isOpen)
    }


    renderTableRows = () => {
        return (
            this.props.bill.products.map((product) =>
                <tr key={Math.random()}>
                    <td>{product.productName}</td>
                    <td>{product.productAmount} x {parseFloat(product.productPrice).toFixed(2)} PLN</td>
                    <td>{parseFloat(product.productAmount * product.productPrice).toFixed(2)} PLN</td>
                </tr>
            )
        )
    }
    render() {

        const { bill } = this.props;

        return (
            <div style={{ display: 'inline-block' }} className="mt-3 col-sm-12 col-md-6 col-lg-4 px-1 " >
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
                            <div style={{ height: '150px', overflow: 'auto' }}>
                                <table className="table table-bordered table-light text-secondary table-sm mb-0">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity x price</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTableRows()}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan='3' className='lead'>Sum: {parseFloat(bill.price).toFixed(2)} PLN</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                    }
                    {bill.payment === 'cash'
                        ?
                        <i className="fas single-bill__icon fa-money-bill fa-3x text-success"></i>
                        :
                        <i className="far single-bill__icon fa-credit-card credit-card--color fa-3x"></i>
                    }

                </div>
            </div>
        )
    }
}
export default SingleBill