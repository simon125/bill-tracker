import React from 'react'

class Product extends React.Component {

    state = {
        editMode: false,
        newName: '',
        newPrice: '',
        newAmount: ''
    }

    // editProduct = (editedProductName, newName, newPrice, newAmount)

    handleOnSaveClick = (productName, newName, newPrice, newAmount) => {
        this.props.editProduct(productName, newName, newPrice, newAmount)
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

        const { productName, productAmount, productPrice, deleteProduct } = this.props

        return (
            this.state.editMode ?
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="lead">
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="newName"
                            className="form-control form-control-sm"
                            value={this.state.newName} />

                    </span>
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newAmount"
                            className="form-control form-control-sm"
                            value={this.state.newAmount} />
                    </span>
                    x
                    <span>
                        <input
                            onChange={this.handleOnChange}
                            type="number"
                            id="newPrice"
                            className="form-control form-control-sm"
                            value={this.state.newPrice} />
                    </span> PLN

                    <span>
                        <button
                            type="button"
                            className="btn btn-success btn-sm"
                            onClick={() => this.handleOnSaveClick(productName, this.state.newName, this.state.newPrice, this.state.newAmount)}
                        >
                            <i className="fa fa-check fa-2x"></i>
                        </button>
                    </span>
                </li>
                :
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="lead"> {productName} </span>
                    <span>  {productAmount} x {productPrice} PLN</span>
                    <span>
                        <button
                            type="button"
                            className="btn btn-outline-info mr-3"
                            onClick={() => this.setState({ editMode: true })}
                            style={{ fontSize: '20px' }}>
                            <i className="fas fa-edit "></i>
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => deleteProduct(productName)}
                            style={{ fontSize: '20px' }}>
                            &times;
                    </button>
                    </span>
                </li>
        )
    }

}
export default Product