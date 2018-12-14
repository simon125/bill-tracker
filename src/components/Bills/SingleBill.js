import React from 'react'
import './style.css'
// state = {
//     billData: {
//         price: '',
//         nameShop: '',
//         shoppingDate: '',
//         payment: '',
//         products: []
//     },
//     productName: '',
//     productPrice: '',
//     productAmount: ''
// }
const SingleBill = ({ bill }) => {




    const renderTableRows = () => {
        return (
            bill.products.map(product =>
                <tr key={Math.random()}>
                    <td>{product.productName}</td>
                    <td>{parseFloat(product.productAmount).toFixed(2)} x {parseFloat(product.productPrice).toFixed(2)} PLN</td>
                    <td>{parseFloat(product.productAmount * product.productPrice).toFixed(2)} PLN</td>
                </tr>
            )
        )
    }





    return (
        <div className="card card-body mt-5 border-dark single-bill__card">
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
                            {renderTableRows()}
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
            <p className="card-text"><small className="text-muted"></small></p>
        </div>
    )
}
export default SingleBill