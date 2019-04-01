import React, { useState } from 'react';
import BillFormInput from '../BillFormInput';
import TagInput from '../BillFormTagInput'

// import { WithContext as ReactTags } from 'react-tag-input';
// const KeyCodes = {
//     comma: 188,
//     enter: 13,
// };

// const delimiters = [KeyCodes.comma, KeyCodes.enter];


const BillFormRequired = ({ requiredFormState, handleOnChange, validState, setTagsToState }) => {


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
            <TagInput setTagsToState={setTagsToState} tags={requiredFormState.tags} />
        </div>
    )
}
export default BillFormRequired