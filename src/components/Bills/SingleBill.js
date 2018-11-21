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
        <div className="card card-body mt-5">
            <h5 className="card-title d-flex justify-content-between">
                <span>
                    {bill.nameShop}
                </span>
                <span className="lead">
                    Total price: {bill.price} PLN
                </span>
            </h5>
            <ul className="list-group">
                {
                    bill.products.length === 0 ?
                        <li className="list-group-item">You didn't enter more data</li>
                        :
                        bill.products.map(product => <li className="list-group-item">{product.productName}</li>)
                }
            </ul>
            <p className="card-text"><small className="text-muted">{bill.shoppingDate}</small></p>
        </div>
    )
}
export default SingleBill