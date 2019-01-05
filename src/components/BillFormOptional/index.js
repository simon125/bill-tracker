import React from 'react'
import BillFormInput from '../BillFormInput'
import BillFormProductsList from '../BillFormProductsList'

class BillFormOptional extends React.Component {

    state = {

    }
    getInputClassName = () => {

    }
    render() {
        const { state,
            deleteProduct,
            editProduct,
            handleOnClick,
            handleOptionalOnChange,
            handleOnChange } = this.props;
        const products = state.billData.products;

        return (
            <div className="card card-body text-left">
                <h3 className="text-center">Optional</h3>
                <BillFormProductsList
                    products={products}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                />
                <BillFormInput
                    label="Product"
                    value={state.productName}
                    onChange={handleOptionalOnChange}
                    id="productName"
                    type="text"
                    placeholder="Product name..."
                />
                <BillFormInput
                    label="Price"
                    value={state.productPrice}
                    onChange={handleOptionalOnChange}
                    id="productPrice"
                    type="number"
                    placeholder="Product price..."
                />
                <BillFormInput
                    label="Amount"
                    value={state.productAmount}
                    onChange={handleOptionalOnChange}
                    id="productAmount"
                    type="number"
                    placeholder="Product amount..."
                />
                <div className="form-group text-center">
                    <button
                        // disabled={true}
                        type="button"
                        onClick={handleOnClick}
                        className="btn btn-outline-success  disabled">
                        Add new product<i className="fas fa-plus fa-lg ml-2"></i>
                    </button>
                </div>
                <div className="form-group text-center">
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
    };

}


export default BillFormOptional
