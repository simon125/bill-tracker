import React, { Component } from 'react'
import './style.css'
import BillFormRequired from '../BillFormRequired';
import BillFormOptional from '../BillFormOptional';
import { connect } from 'react-redux'
import { addBill } from '../../../actions/formActions'

class BillForm extends Component {
    state = {
        requiredForm: {
            price: '',
            shopName: '',
            shoppingDate: '',
            tags: []
        },
        optionalForm: {
            products: [],
            payment: 'unknown'
        },
        reqFormValidState: {
            reqPrice: {
                isValid: '',
                message: ''
            },
            reqShop: {
                isValid: '',
                message: ''
            },
            reqDate: {
                isValid: '',
                message: ''
            }
        },
        alert: {
            className: '',
            message: '',
            visibility: false
        }
    }

    setTagsToState = (tags) => {
        this.setState({
            ...this.state, requiredForm: {
                ...this.state.requiredForm,
                tags: [...tags]
            }
        })
    }

    setValidState = (field, isValid, message) => {
        this.setState((state) => {
            return {
                ...state,
                reqFormValidState: {
                    ...state.reqFormValidState,
                    [field]: {
                        isValid,
                        message
                    }
                }
            }
        })
    }
    checkPrices = (products, price) => {
        if (products.length !== 0) {
            const totalPrice = products.reduce((total, product) => {
                return total = total + parseInt(product.productAmount) * parseFloat(product.productPrice);
            }, 0);
            const isEqual = parseFloat(price) === totalPrice

            return isEqual
        } else return true
    }
    validateReqForm = (price, shopName, shoppingDate) => {
        let isPriceValid, isShopNameValid, isShoppingDateValid;
        if (price.trim() !== '' && parseFloat(price) > 0) {
            this.setValidState('reqPrice', '', '');
            isPriceValid = true
        } else {
            this.setValidState('reqPrice', false, 'Incorrect price');
            isPriceValid = false
        }
        if (shopName.trim() !== '' && shopName.length < 10) {
            this.setValidState('reqShop', '', '');
            isShopNameValid = true
        } else {
            this.setValidState('reqShop', false, 'Incorrect name of shop');
            isShopNameValid = false
        }
        if (shoppingDate !== '') {
            this.setValidState('reqDate', '', '');
            isShoppingDateValid = true
        } else {
            this.setValidState('reqDate', false, 'Incorrect shopping date');
            isShoppingDateValid = false
        }
        return isPriceValid && isShopNameValid && isShoppingDateValid;
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const { price, shopName, shoppingDate, tags } = this.state.requiredForm;
        const { payment, products } = this.state.optionalForm;

        if (this.validateReqForm(price, shopName, shoppingDate) && this.checkPrices(products, price)) {
            const bill = {   // struktura rachunku do listy
                price,
                tags,
                nameShop: shopName,
                shoppingDate,
                payment,
                products
            }
            this.setState((state) => {
                return {
                    ...state,
                    alert: {
                        className: 'alert alert-success',
                        message: 'You have succesfully add bill to bill tracker!!!',
                        visibility: true
                    },
                    requiredForm: {
                        price: '',
                        shopName: '',
                        shoppingDate: '',
                        tags: []
                    },
                    optionalForm: {
                        products: [],
                        payment: 'unknown'
                    }
                }
            })
            this.props.addBill(bill)
        } else if (!this.checkPrices(products, price)) {
            this.setState((state) => {
                return {
                    ...state,
                    alert: {
                        className: 'alert alert-danger',
                        message: 'Prices from forms are not equal!!!',
                        visibility: true
                    }
                }
            })
        }
        setTimeout(() => {
            this.setState((state) => {
                return {
                    ...state,
                    alert: {
                        className: '',
                        message: '',
                        visibility: false
                    }
                }
            })
        }, 2000);
    }
    handleOnChangeReqForm = e => {
        console.log(123)
        this.setState({
            ...this.state, requiredForm: {
                ...this.state.requiredForm,
                [e.target.name]: e.target.value
            }
        })
    }
    handleOnChangeOptForm = e => {
        console.log(456)
        this.setState({
            ...this.state, optionalForm: {
                ...this.state.optionalForm,
                [e.target.name]: e.target.value
            }
        })
    }
    addSingleProduct = (product) => {
        this.setState({
            ...this.state,
            optionalForm: {
                ...this.state.optionalForm,
                products: [...this.state.optionalForm.products, product]
            }
        })
    }
    editSingleProduct = (uid, editedProduct) => {
        const products = this.state.optionalForm.products;
        const newProducts = products.map(product => {
            if (product.uid === uid) {
                return editedProduct
            }
            else {
                return product
            }
        });
        this.setState({
            ...this.state,
            optionalForm: {
                ...this.state.optionalForm,
                products: newProducts
            }
        })
    }
    deleteSingleProduct = (uid) => {
        const products = this.state.optionalForm.products;
        const newProducts = products.filter(product => product.uid !== uid);
        this.setState({
            ...this.state,
            optionalForm: {
                ...this.state.optionalForm,
                products: newProducts
            }
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.alert.visibility ?
                        <div style={{ width: '60%', zIndex: 9000, position: "fixed", top: "70px", left: "50%", transform: "translateX(-50%)" }} className={this.state.alert.className} role="alert">
                            {this.state.alert.message}
                        </div>
                        : null
                }
                <form onSubmit={this.handleOnSubmit}>
                    <div className={window.innerWidth < 993 ? "container-fluid" : "container"}>
                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-6 bill-form__col">
                                <BillFormRequired
                                    setTagsToState={this.setTagsToState}
                                    validState={this.state.reqFormValidState}
                                    requiredFormState={this.state.requiredForm}    // konkretne nazwy
                                    handleOnChange={this.handleOnChangeReqForm}
                                />
                                <button className="my-3 btn btn-primary btn-block btn-lg bill-form__submit-btn">
                                    Add bill
                                </button>
                            </div>
                            <div className="col-sm-12 col-md-6 mb-4 bill-form__col">
                                <BillFormOptional
                                    handleOnChange={this.handleOnChangeOptForm}
                                    optionalFormState={this.state.optionalForm}
                                    addSingleProduct={this.addSingleProduct}
                                    editSingleProduct={this.editSingleProduct}
                                    deleteSingleProduct={this.deleteSingleProduct}
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