import React from 'react'

class Product extends React.Component {

    state = {
        editMode: false,
        newName: '',
        newPrice: '',
        newAmount: '',
        validState: {
            nameValidity: {
                className: 'form-control form-control-sm'
            },
            priceValidity: {
                className: 'form-control form-control-sm'
            },
            amountValidity: {
                className: 'form-control form-control-sm'
            },
        }
    }

    setValidity = (field, className) => {
        this.setState((state) => {
            return {
                ...state,
                validState: {
                    ...state.validState,
                    [field]: {
                        className
                    }
                }
            }
        })
    }

    checkValidity = (newName, newPrice, newAmount) => {
        let nameValidity, priceValidity, amountValidity;

        if (newName.trim() !== '' && newName.length < 15) {

            this.setValidity('nameValidity', 'form-control form-control-sm');
            nameValidity = true
        } else {
            this.setValidity('nameValidity', 'form-control form-control-sm is-invalid');
            nameValidity = false
        }
        if (parseFloat(newPrice) > 0 && newPrice.trim() !== '') {
            console.log(parseFloat(newPrice) > 0, ' newprice ', parseFloat(newPrice))
            this.setValidity('priceValidity', 'form-control form-control-sm');
            priceValidity = true
        } else {
            this.setValidity('priceValidity', 'form-control form-control-sm is-invalid');
            priceValidity = false
        }
        if (parseInt(newAmount) > 0 && newAmount.trim() !== '') {
            console.log(parseInt(newAmount) > 0, ' newamount ', parseInt(newAmount))
            this.setValidity('amountValidity', 'form-control form-control-sm');
            amountValidity = true
        } else {
            this.setValidity('amountValidity', 'form-control form-control-sm is-invalid');
            amountValidity = false
        }
        return nameValidity && priceValidity && amountValidity
    }

    handleOnSaveClick = (uid, newName, newPrice, newAmount) => {
        if (this.checkValidity(newName, newPrice, newAmount)) {
            const newProduct = { uid, productName: newName, productPrice: newPrice, productAmount: newAmount };
            this.props.editSingleProduct(uid, newProduct)
            this.setState({
                editMode: false
            })
        }

    }
    handleOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }
    componentDidMount() {
        const { productName, productAmount, productPrice } = this.props
        this.setState({
            newName: productName,
            newPrice: productPrice,
            newAmount: productAmount
        })
    }
    render() {

        const { productName, productAmount, productPrice, uid, deleteSingleProduct } = this.props;
        const { validState: { nameValidity, priceValidity, amountValidity } } = this.state;
        return (
            this.state.editMode ?
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="newName"
                            className={nameValidity.className}
                            value={this.state.newName} />
                    </span>
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newAmount"
                            className={amountValidity.className}
                            value={this.state.newAmount} />
                    </span>
                    x
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newPrice"
                            className={priceValidity.className}
                            value={this.state.newPrice} />
                    </span> PLN
                    <span>
                        <button
                            style={{ border: 'none' }}
                            type="button"
                            className="btn btn-outline-success btn-sm p-1 ml-1"
                            onClick={() => this.handleOnSaveClick(uid, this.state.newName, this.state.newPrice, this.state.newAmount)}
                        >
                            <i className="fa fa-check fa-lg"></i>
                        </button>
                    </span>
                </li>
                :
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="lead"> {productName} </span>
                    <span>  {productAmount} x {productPrice} PLN </span>
                    <span>
                        <button
                            type="button"
                            className="btn btn-outline-info mr-3 btn-sm ml-1"
                            onClick={() => this.setState({ editMode: true })}
                            style={{ fontSize: '20px', border: 'none' }}>
                            <i className="fas fa-edit "></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteSingleProduct(uid)}
                            style={{ fontSize: '20px', border: 'none' }}>
                            &times;
                    </button>
                    </span>
                </li>
        )
    }

}
export default Product