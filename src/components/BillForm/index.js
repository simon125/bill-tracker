import React, { Component } from 'react'
import './style.css'
import Product from './Product'
import { connect } from 'react-redux'
import { addBill } from '../../actions/formActions'

class BillForm extends Component {

    state = {
        billData: {
            price: '',
            nameShop: '',
            shoppingDate: '',
            payment: '',
            products: []
        },
        productName: '',
        productPrice: '',
        productAmount: ''

    }


    isValid = (price, products) => {
        if (products.length === 0) {
            return true
        }
        const totalPrice = products.reduce((sum, product) => {
            const sumPrice = product.productAmount * product.productPrice;
            return sum += sumPrice
        }, 0)
        if (parseInt(price) === totalPrice) {
            return true
        }
        else {
            return false
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const bill = { ...this.state.billData }
        if (this.isValid(bill.price, bill.products)) {
            this.setState({
                billData: {
                    price: '',
                    nameShop: '',
                    shoppingDate: '',
                    payment: '',
                    products: []
                },
                productName: '',
                productPrice: '',
                productAmount: ''
            })
            this.props.addBill(bill)
        }
        else {
            alert('Sth went wrong')
        }

    }
    handleOnChange = (e) => {
        this.setState({
            billData: {
                ...this.state.billData,
                [e.target.name]: e.target.value
            }
        })
    }
    handleOptionalOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }
    handleOnClick = () => {
        const { productName,
            productPrice,
            productAmount } = this.state
        const product = {
            productName,
            productPrice,
            productAmount
        }
        this.setState({
            billData: {
                ...this.state.billData,
                products: [...this.state.billData.products, product]
            },
            productName: '',
            productPrice: '',
            productAmount: ''
        })
    }
    editProduct = (editedProductName, newName, newPrice, newAmount) => {
        const products = this.state.billData.products.map(product => {
            if (product.productName === editedProductName) {
                product.productName = newName
                product.productPrice = newPrice
                product.productAmount = newAmount
                return product
            }
            else return product
        })
        this.setState({
            ...this.state,
            billData: {
                ...this.state.billData,
                products
            }
        })
    }
    deleteProduct = (deletedProductName) => {
        const products = this.state.billData.products
            .filter(product => product.productName !== deletedProductName)

        this.setState({
            ...this.state,
            billData: {
                ...this.state.billData,
                products
            }
        })
    }
    render() {
        const products = this.state.billData.products

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-6 col-sm-12 col-md-6">
                                <div className="card card-body">
                                    <p className="h3">Required</p>
                                    <div className="form-group">
                                        <input
                                            min="0"
                                            value={this.state.billData.price}
                                            onChange={this.handleOnChange}
                                            type="text"
                                            name="price"
                                            placeholder="Price..."
                                            id="price"
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            max="15"
                                            value={this.state.billData.nameShop}
                                            onChange={this.handleOnChange}
                                            type="text"
                                            name="nameShop"
                                            placeholder="Shop name..."
                                            id="nameShop"
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={this.state.billData.shoppingDate}
                                            onChange={this.handleOnChange}
                                            type="date"
                                            name="shoppingDate"
                                            placeholder="Date..."
                                            id="shoppingDate"
                                            className="form-control form-control-lg" />
                                    </div>
                                </div>
                                <button className="mt-5 btn btn-primary btn-block btn-lg">Add bill</button>
                            </div>
                            <div className="col-6 col-sm-12 col-md-6">
                                <div className="card card-body">
                                    <p className="h3">Optional</p>
                                    <ul className="list-group mb-3">
                                        {
                                            products === [] ?
                                                null
                                                :
                                                products
                                                    .map(product =>
                                                        <Product
                                                            key={Math.random()}
                                                            productName={product.productName}
                                                            productAmount={product.productAmount}
                                                            productPrice={product.productPrice}
                                                            editProduct={this.editProduct}
                                                            deleteProduct={this.deleteProduct} />
                                                    )
                                        }
                                    </ul>
                                    <div className="form-group">
                                        <input
                                            max="15"
                                            value={this.state.productName}
                                            onChange={this.handleOptionalOnChange}
                                            type="text"
                                            name="productName"
                                            placeholder="Product name..."
                                            id="productName"
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            min="0"
                                            onChange={this.handleOptionalOnChange}
                                            value={this.state.productPrice}
                                            type="number"
                                            name="productPrice"
                                            placeholder="Price..."
                                            id="productPrice"
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            min="0"
                                            onChange={this.handleOptionalOnChange}
                                            value={this.state.productAmount}
                                            type="number"
                                            name="productAmount"
                                            placeholder="Amount..."
                                            id="productAmount"
                                            className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="button"
                                            onClick={this.handleOnClick}
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
                                                onChange={this.handleOnChange}
                                                type="radio"
                                                name="payment"
                                                id="cashPayment" />
                                            <label className="paymentMethod" htmlFor="cashPayment">
                                                <i style={{ color: '#85bb65' }} className="fas fa-money-bill fa-3x"></i>
                                            </label>
                                            <input
                                                className="paymentMethod"
                                                value="card"
                                                onChange={this.handleOnChange}
                                                type="radio"
                                                name="payment"
                                                id="cardPayment" />
                                            <label className="paymentMethod" htmlFor="cardPayment">
                                                <i style={{ color: '#6585bb' }} className="far fa-credit-card  fa-3x"></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default connect(null, { addBill })(BillForm)