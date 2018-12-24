import React from 'react'

const BillFormRequired = ({ state, handleOnChange, }) => {

    return (
        <div className="col-6 col-sm-12 col-md-6">
            <div className="card card-body">
                <p className="h3">Required</p>
                <div className="form-group">
                    <input
                        min="0"
                        value={state.billData.price}
                        onChange={handleOnChange}
                        type="text"
                        name="price"
                        placeholder="Price..."
                        id="price"
                        className="form-control form-control-lg" />
                    <div className="invalid-feedback">
                        Please type correct price.
                    </div>
                </div>
                <div className="form-group">
                    <input
                        max="15"
                        value={state.billData.nameShop}
                        onChange={handleOnChange}
                        type="text"
                        name="nameShop"
                        placeholder="Shop name..."
                        id="nameShop"
                        className="form-control form-control-lg" />
                    <div className="invalid-feedback">
                        Please type correct name of shop.
                                        </div>
                </div>
                <div className="form-group">
                    <input
                        value={state.billData.shoppingDate}
                        onChange={handleOnChange}
                        type="date"
                        name="shoppingDate"
                        placeholder="Date..."
                        id="shoppingDate"
                        className="form-control form-control-lg" />
                    <div className="invalid-feedback">
                        Please type correct shopping date.
                                        </div>
                </div>
            </div>
            <button className="mt-5 btn btn-primary btn-block btn-lg">Add bill</button>
        </div>
    )
}


export default BillFormRequired