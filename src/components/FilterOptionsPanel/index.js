import React, { useState } from 'react';
import { Range } from 'rc-slider';
import { getBillsFiltredByDate, getBillsFiltredByPrice, getBillsFiltredByShopName } from '../../logic';
import DateWidget from '../DateWidget';

export default function index({ setFilteredBills, bills, shopNames, maxPrice }) {

    const [shopName, setShopName] = useState('all');
    const [rangeInputValue, setRangePrice] = useState([20, 80]);
    const [rangeDate, setDateRange] = useState('');
    const [isDateWidgetOpen, toggleDateWidget] = useState(false);

    const handleOnRangeChange = (value) => {
        setRangePrice([...value]);
    }
    const handleOnFilterClick = () => {
        let filteredBills = getBillsFiltredByPrice(bills, rangeInputValue);

        if (shopName !== 'all') {
            filteredBills = getBillsFiltredByShopName(filteredBills, shopName)
        }
        if (rangeDate.trim() !== '') {
            filteredBills = getBillsFiltredByDate(filteredBills, rangeDate);
        }
        setFilteredBills(filteredBills);
    }
    const handleOnChange = (e) => {
        setShopName(e.target.value);
    }
    const handleOnDatePickerClick = e => {
        toggleDateWidget(!isDateWidgetOpen);
    }
    return (
        <div>
            <h3 className="mt-3">
                <i className="fas fa-filter mr-1"></i>
                Filter by
            </h3>
            <label className="text-left" htmlFor="rangePrice">
                Choose price range
            </label>
            <Range
                id="rangePrice"
                onChange={handleOnRangeChange}
                defaultValue={[20, 80]}
                value={rangeInputValue}
                min={0}
                max={maxPrice}
            />
            <span className="d-flex justify-content-between my-2">
                <span>{rangeInputValue[0]} PLN</span>
                <span>{rangeInputValue[1]} PLN</span>
            </span>
            <div className="form-group mt-2">
                <label htmlFor="shopName">
                    Choose shop name
                </label>
                <select
                    value={shopName}
                    onChange={handleOnChange}
                    className="form-control"
                    name="shopName"
                    id="shopName">
                    <option value="all">All shops</option>
                    {
                        shopNames ?
                            shopNames.map(shopName => <option key={shopName} value={shopName}>{shopName}</option>)
                            :
                            null
                    }
                </select>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="date-range">Choose date range</label>
                <input
                    onClick={handleOnDatePickerClick}
                    id="date-range"
                    className="form-control"
                    placeholder="Choose date range"
                    onChange={() => { }}
                    defaultValue={rangeDate}
                    style={{ maxWidth: '200px' }} />
            </div>
            <button onClick={handleOnFilterClick} className="btn btn-info btn-block">
                Filter
            </button>
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => setDateRange(dateRange)}
                    onCloseClick={handleOnDatePickerClick}
                />
            </section>
        </div>
    )
}
