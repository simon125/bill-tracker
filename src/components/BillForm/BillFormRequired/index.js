import React from 'react';
import BillFormInput from '../BillFormInput'

const BillFormRequired = ({ requiredFormState, handleOnChange, validState }) => {

    return (
        <div className="card card-body  text-left">
            <h3 className="text-center">Required</h3>
            <BillFormInput
                validState={validState.reqPrice}
                label="Price"
                inputValue={requiredFormState.price}
                handleOnChange={handleOnChange}
                type="number"
                id="price"
                placeholder="Price..."
                name="price"
            />
            <BillFormInput
                validState={validState.reqShop}
                label="Shop name"
                inputValue={requiredFormState.shopName}
                handleOnChange={handleOnChange}
                type="text"
                id="shopName"
                placeholder="Shop name..."
                name="shopName"
            />
            <BillFormInput
                validState={validState.reqDate}
                label="Shopping date"
                inputValue={requiredFormState.shoppingDate}
                handleOnChange={handleOnChange}
                type="date"
                id="shoppingDate"
                placeholder="Date..."
                name="shoppingDate"
            />
        </div>
    )
}
export default BillFormRequired