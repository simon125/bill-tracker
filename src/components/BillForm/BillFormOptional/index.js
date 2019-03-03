import React from 'react'
import BillFormInput from '../BillFormInput'
import BillFormProductsList from '../BillFormProductsList'
import uuid from 'uuid'

class BillFormOptional extends React.Component {

    state = {
        productName: '',
        productPrice: '',
        productAmount: '',
        validState: {
            price: {
                isValid: '',
                message: ''
            },
            amount: {
                isValid: '',
                message: ''
            },
            name: {
                isValid: '',
                message: ''
            }
        }
    }
    setValidState = (field, message, isValid) => {
        this.setState((state) => {
            return {
                ...state,
                validState: {
                    ...state.validState,
                    [field]: {
                        isValid,
                        message
                    }
                }
            }
        })
    }
    validateProduct = (productName, productPrice, productAmount) => {
        let validProductName, validProductPrice, validProductAmount;
        if (productName.trim() !== '' && productName.length < 10) {
            this.setValidState('name', '', '');
            validProductName = true
        } else {
            this.setValidState('name', 'Incorrect name of product', false);
            validProductName = false
        }
        if (productPrice.trim() !== '' && parseFloat(productPrice) > 0) {
            this.setValidState('price', '', '');
            validProductPrice = true
        } else {
            this.setValidState('price', 'Incorrect price', false);
            validProductPrice = false
        }
        if (productAmount.trim() !== '' && parseFloat(productAmount) > 0) {
            this.setValidState('amount', '', '');
            validProductAmount = true
        } else {
            this.setValidState('amount', 'Incorrect amount', false);
            validProductAmount = false
        }
        return validProductAmount && validProductPrice && validProductName;
    }
    getProduct = (productName, productPrice, productAmount) => {
        return {
            productName, productPrice, productAmount, uid: uuid()
        }
    }
    handleOnClick = (productName, productPrice, productAmount) => {
        const isValid = this.validateProduct(productName, productPrice, productAmount)
        if (isValid) {
            const product = this.getProduct(productName, productPrice, productAmount);
            this.props.addSingleProduct(product);
            this.setState({
                productName: '',
                productPrice: '',
                productAmount: '',
                validState: {
                    price: {
                        isValid: '',
                        message: ''
                    },
                    amount: {
                        isValid: '',
                        message: ''
                    },
                    name: {
                        isValid: '',
                        message: ''
                    }
                }
            })
        }
    }
    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const {
            optionalFormState,// products, payment
            editSingleProduct,
            deleteSingleProduct,
            handleOnChange
        } = this.props;
        const {
            productName, productPrice, productAmount, validState
        } = this.state;
        const products = optionalFormState.products;
        return (
            <div className="card card-body text-left">
                <h3 className="text-center">Optional</h3>
                <BillFormProductsList
                    products={products}
                    deleteSingleProduct={deleteSingleProduct}
                    editSingleProduct={editSingleProduct}
                />
                <BillFormInput
                    validState={validState.name}
                    label="Product"
                    inputValue={this.state.productName}
                    handleOnChange={this.handleOnChange}
                    id="productName"
                    type="text"
                    placeholder="Product name..."
                    name="productName"
                />
                <BillFormInput
                    validState={validState.price}
                    label="Price"
                    inputValue={this.state.productPrice}
                    handleOnChange={this.handleOnChange}
                    id="productPrice"
                    type="number"
                    placeholder="Product price..."
                    name="productPrice"
                />
                <BillFormInput
                    validState={validState.amount}
                    label="Amount"
                    inputValue={this.state.productAmount}
                    handleOnChange={this.handleOnChange}
                    id="productAmount"
                    type="number"
                    placeholder="Product amount..."
                    name="productAmount"
                />
                <div className="form-group text-center">
                    <button
                        type="button"
                        onClick={() => this.handleOnClick(productName, productPrice, productAmount)}
                        className="btn btn-outline-success">
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