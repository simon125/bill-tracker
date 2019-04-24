import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setShoppingDateRange } from '../../actions/statsSettingsActions';

import DateWidget from '../DateWidget';
import DoughnutChart from '../DoughnutChart'

function ExpenseTypeStats({ setShoppingDateRange, shoppingTypeDateRange }) {

    const [isDateWidgetOpen, toggleDateWidget] = useState(false);


    const handleOnDatePickerClick = () => {
        toggleDateWidget(!isDateWidgetOpen);
    }


    return (
        <React.Fragment>
            <h3 className="mb-3">Shopping/expense types</h3>
            <DoughnutChart />

            <div className="form-group mt-2 text-left d-flex">
                <div className="w-50">
                    <label htmlFor="date-range">Date range</label>
                    <input
                        onClick={handleOnDatePickerClick}
                        id="date-range"
                        className="form-control"
                        placeholder="Choose date range"
                        onChange={() => { }}
                        value={shoppingTypeDateRange} />
                </div>
            </div>
            <section className={isDateWidgetOpen ? "" : "d-none"}>
                <DateWidget
                    setDateRange={(dateRange) => setShoppingDateRange(dateRange)}
                    onCloseClick={handleOnDatePickerClick}
                />
            </section>

        </React.Fragment>
    )
}


const mapStateToProps = state => {

    return {
        shoppingTypeDateRange: state.statsSettings.shoppingDateRange
    }
}

export default connect(mapStateToProps, { setShoppingDateRange })(ExpenseTypeStats)