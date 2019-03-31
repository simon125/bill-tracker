import React, { useState } from 'react';
import BillFormInput from '../BillFormInput';
import TagInput from '../BillFormTagInput'

// import { WithContext as ReactTags } from 'react-tag-input';
// const KeyCodes = {
//     comma: 188,
//     enter: 13,
// };

// const delimiters = [KeyCodes.comma, KeyCodes.enter];


const BillFormRequired = ({ requiredFormState, handleOnChange, validState }) => {

    // const [types, addType] = useState(['Sport', 'Rozwój', 'Religia', 'Rozrywka', 'HeathCare', 'Samochód', 'Paliwo', 'Dom', 'Zwierzęta', 'Inne', 'add new'])
    // const [counterType, setCounterType] = useState(1);

    // const [tags, setTags] = useState([]);


    // const handleDelete = (i) => {
    //     setTags([...tags.filter((tag, index) => index !== i)]);
    // }

    // const handleAddition = (tag) => {
    //     setTags([...tags, tag]);
    // }

    // const handleDrag = (tag, currPos, newPos) => {
    //     const tagsCopy = [...tags];
    //     const newTags = tagsCopy.slice();

    //     newTags.splice(currPos, 1);
    //     newTags.splice(newPos, 0, tag);

    //     // re-render
    //     setTags([newTags]);
    // }



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
            <TagInput />
        </div>
    )
}
export default BillFormRequired