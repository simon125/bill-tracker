import React, { useState } from 'react';
import { Range } from 'rc-slider';
import { filterByDate, filterByPrice, filterByShopName } from '../../logic';
import DateWidget from '../DateWidget';

export default function index({ setFilteredBills }) {

    const [shopName, setShopName] = useState('none');
    const [rangeInputValue, setRangePrice] = useState();
    const [rangeDate, setRangeDate] = useState();
    const [isDateWidgetOpen, toggleDateWidget] = useState();

    const handleOnRangeChange = (value) => {
        setRangePrice(value);
        // this.setState({ ...this.state, rangeInputValue: value })
    }

    // const handleSortClick = (bills) => {
    //     const sortedBills = sortBills(bills, sortTrend)[sortBy]();
    //     setSortedBills(sortedBills);
    //     setSrotTrend(!sortTrend);
    // }
    // const handleOnChange = e => {
    //     setSortOption(e.target.value);
    //     setSrotTrend(null);
    // }

    const handleOnFilterClick = () => {
        const { rangeDate, rangeInputValue, shopName } = this.state;
        const { bills } = this.props;
        let filteredBills = filterByPrice(bills, rangeInputValue);

        if (shopName !== 'all') {
            filteredBills = filterByShopName(filteredBills, shopName)
        }
        if (rangeDate.trim() !== '') {
            filteredBills = filterByDate(filteredBills, rangeDate);
        }
        setFilteredBills(filteredBills);
    }

    const getMaxPrice = () => {
        return 100;
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
            {/* <Range
                id="rangePrice"
                onChange={handleOnRangeChange}
                defaultValue={[20, 80]}
                value={rangeInputValue}
                min={0}
                max={getMaxPrice}// do wyliczenia
            /> */}
            {/* <span className="d-flex justify-content-between my-2">
                <span>{rangeInputValue[0]} PLN</span>
                <span>{rangeInputValue[1]} PLN</span>
            </span> */}
            {/* <div className="form-group mt-2">
                <label htmlFor="shopName">
                    Choose shop name
                                        </label>
                <select
                    value={shopName}
                    onChange={this.changeShopNameFilter}
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
                    onClick={this.handleOnDatePickerClick}
                    id="date-range"
                    className="form-control"
                    placeholder="Choose date range"
                    onChange={() => { }}
                    style={{ maxWidth: '200px' }} />
            </div>
            <button onClick={handleOnFilterClick} className="btn btn-info btn-block">
                Filter
                                    </button> */}
            {/* 
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={this.setDateRange}
                    onCloseClick={this.handleOnDatePickerClick}
                />
            </section> */}

        </div>
    )
}
