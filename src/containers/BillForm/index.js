import React, { Component } from 'react'
import './style.css'

import BillFormRequired from '../../components/BillFormRequired';
import BillFormOptional from '../../components/BillFormOptional'

import { isValid } from '../../logic'

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
    handleOnSubmit = (e) => {
        e.preventDefault()
        const bill = { ...this.state.billData }
        if (isValid(bill.price, bill.products)) {
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
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="container">
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-6 bill-form__col">
                                <BillFormRequired
                                    state={this.state}
                                    handleOnChange={this.handleOnChange}
                                />
                                <button className="my-3 btn btn-primary btn-block btn-lg bill-form__submit-btn">Add bill</button>
                            </div>
                            <div className="col-sm-12 col-md-6 mb-4 bill-form__col">
                                <BillFormOptional
                                    handleOnChange={this.handleOnChange}
                                    state={this.state}
                                    deleteProduct={this.deleteProduct}
                                    editProduct={this.editProduct}
                                    handleOnClick={this.handleOnClick}
                                    handleOptionalOnChange={this.handleOptionalOnChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}
export default connect(null, { addBill })(BillForm)