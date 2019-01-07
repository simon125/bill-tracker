import React from 'react'

class Product extends React.Component {

    state = {
        editMode: false,
        newName: '',
        newPrice: '',
        newAmount: ''
    }

    handleOnSaveClick = (uid, newName, newPrice, newAmount) => {
        const newProduct = { uid, productName: newName, productPrice: newPrice, productAmount: newAmount };
        this.props.editSingleProduct(uid, newProduct)
        this.setState({
            editMode: false
        })
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

        const { productName, productAmount, productPrice, uid, deleteSingleProduct } = this.props

        return (
            this.state.editMode ?
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="newName"
                            className="form-control form-control-sm is-invalid"
                            value={this.state.newName} />
                        <div className="invalid-feedback">
                            asdfasdfasdf
                        </div>
                    </span>
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newAmount"
                            className="form-control form-control-sm is-invalid"
                            value={this.state.newAmount} />
                        <div className="invalid-feedback">
                            asdfasdfasd
                        </div>
                    </span>
                    x
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newPrice"
                            className="form-control form-control-sm is-invalid"
                            value={this.state.newPrice} />
                        <div className="invalid-feedback">
                            sadfasdfsd
                        </div>
                    </span> PLN
                    <span>
                        <button
                            type="button"
                            className="btn btn-success btn-sm p-1 ml-1"
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
                            style={{ fontSize: '20px' }}>
                            <i className="fas fa-edit "></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteSingleProduct(uid)}
                            style={{ fontSize: '20px' }}>
                            &times;
                    </button>
                    </span>
                </li>
        )
    }

}
export default Product