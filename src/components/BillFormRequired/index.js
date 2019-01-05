import React from 'react'

const BillFormRequired = ({ state, handleOnChange, }) => {

    return (
        <div className="card card-body  text-left">
            <h3 className="text-center">Required</h3>
            <div className="form-group mt-3">
                <label htmlFor="price">Price</label>
                <input
                    min="0"
                    value={state.billData.price}
                    onChange={handleOnChange}
                    type="text"
                    name="price"
                    placeholder="Price..."
                    id="price"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                />
                <div className="invalid-feedback">
                    Please type correct price.
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="nameShop">Shop name</label>
                <input
                    max="15"
                    value={state.billData.nameShop}
                    onChange={handleOnChange}
                    type="text"
                    name="nameShop"
                    placeholder="Shop name..."
                    id="nameShop"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                />
                <div className="invalid-feedback">
                    Please type correct name of shop.
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="shoppingDate">Shopping date</label>
                <input
                    value={state.billData.shoppingDate}
                    onChange={handleOnChange}
                    type="date"
                    name="shoppingDate"
                    placeholder="Date..."
                    id="shoppingDate"
                    className={window.innerWidth < 590 ? "form-control form-control-sm" : "form-control form-control-lg"}
                />
                <div className="invalid-feedback">
                    Please type correct shopping date.
                </div>
            </div>
        </div>
    )
}
export default BillFormRequired