import React from 'react'
import BillFormSingleProduct from '../BillFormSingleProduct'

const BillFormOptional = ({ state, deleteProduct, editProduct, handleOnClick, handleOptionalOnChange, handleOnChange }) => {

    const products = state.billData.products;


    return (
        <div className="card card-body">
            <h3>Optional</h3>
            <ul className="list-group mb-3">
                {
                    products === [] ?
                        null
                        :
                        products
                            .map(product =>
                                <BillFormSingleProduct
                                    key={Math.random()}
                                    productName={product.productName}
                                    productAmount={product.productAmount}
                                    productPrice={product.productPrice}
                                    editProduct={editProduct}
                                    deleteProduct={deleteProduct} />
                            )
                }
            </ul>
            <div className="form-group">
                <input
                    max="15"
                    value={state.productName}
                    onChange={handleOptionalOnChange}
                    type="text"
                    name="productName"
                    placeholder="Product name..."
                    id="productName"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                // className="form-control form-control-lg " 
                />
            </div>
            <div className="form-group">
                <input
                    min="0"
                    onChange={handleOptionalOnChange}
                    value={state.productPrice}
                    type="number"
                    name="productPrice"
                    placeholder="Price..."
                    id="productPrice"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                />
            </div>
            <div className="form-group">
                <input
                    min="0"
                    onChange={handleOptionalOnChange}
                    value={state.productAmount}
                    type="number"
                    name="productAmount"
                    placeholder="Amount..."
                    id="productAmount"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                />
            </div>
            <div className="form-group">
                <button
                    type="button"
                    onClick={handleOnClick}
                    className="btn btn-outline-success">
                    Add new product<i className="fas fa-plus fa-lg ml-2"></i>
                </button>
            </div>
            <div className="form-group">
                <h4>Payment by:</h4>
                <div className="d-flex justify-content-around ">
                    <input
                        className="paymentMethod"
                        value="cash"
                        onChange={handleOnChange}
                        type="radio"
                        name="payment"
                        id="cashPayment" />
                    <label className="paymentMethod" htmlFor="cashPayment">
                        <i className="text-success fas fa-money-bill fa-3x"></i>
                    </label>
                    <input
                        className="paymentMethod"
                        value="card"
                        onChange={handleOnChange}
                        type="radio"
                        name="payment"
                        id="cardPayment" />
                    <label className="paymentMethod" htmlFor="cardPayment">
                        <i style={{ color: '#6585bb' }} className="far fa-credit-card  fa-3x"></i>
                    </label>
                </div>
            </div>
        </div>
    )
}


export default BillFormOptional
