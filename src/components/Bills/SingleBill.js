import React from 'react'
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
    return (
        <div className="card card-body mt-5 border-dark">
            <h5 className="card-title d-flex justify-content-between">
                <span>
                    {bill.nameShop}
                </span>
                <span className="lead">
                    Total price: {bill.price} PLN
                </span>
            </h5>

            {
                bill.products.length === 0 ?
                    <li className="list-group-item">You didn't enter more data</li>
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
                            {
                                bill.products.map(product =>
                                    <tr key={Math.random()}>
                                        <td>{product.productName}</td>
                                        <td>{product.productAmount} x {product.productPrice} PLN</td>
                                        <td>{product.productAmount * product.productPrice} PLN</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
            }

            <p className="card-text"><small className="text-muted">{bill.shoppingDate}</small></p>
        </div>
    )
}
export default SingleBill