import React, { useState } from 'react';
import { sortBills } from '../../logic'

export default function index({ setSortedBills, bills }) {

    const [sortBy, setSortOption] = useState('none');
    const [sortTrend, setSrotTrend] = useState(null);
    const handleSortClick = (bills) => {
        const sortedBills = sortBills(bills, sortTrend)[sortBy]();
        setSortedBills(sortedBills);
        setSrotTrend(!sortTrend);
    }
    const handleOnChange = e => {
        setSortOption(e.target.value);
        setSrotTrend(null);
    }

    return (
        <div>
            <div className="form-group mt-4">
                <label htmlFor="sortBy">Choose sort option</label>
                <select
                    value={sortBy}
                    onChange={(e) => handleOnChange(e)}
                    className="form-control"
                    name="sortBy"
                    id="sortBy">
                    <option value="none">--none--</option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                    <option value="quantity">Quantity</option>
                    <option value="payment">Payment</option>
                </select>
            </div>
            <button onClick={() => handleSortClick(bills)} className="btn btn-info btn-block">
                Sort
                {
                    sortTrend === null ? null : sortTrend ?
                        <i className="ml-1 fas fa-sort-up"></i>
                        :
                        <i className="ml-1 fas fa-sort-down"></i>
                }
            </button>
        </div>
    )
}
