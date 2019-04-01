import moment from 'moment'


const getDaysFromCurrentMonth = () => {
    return 31;
}
const getInitialDateRange = () => {
    return moment().format('YYYY/MM/01') + " - " + moment().format(`YYYY/MM/${getDaysFromCurrentMonth()}`);
}
const initialDate = getInitialDateRange();
const initialState = {
    shoppingDateRange: initialDate,
    paymentMethodDateRange: initialDate,
    expensesDateRange: initialDate
};


export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_PAYMENT_METHOD_RANGE':
            return { ...state, paymentMethodDateRange: action.paymentMethodDateRange };

        case 'SET_EXPENSES_RANGE':
            return { ...state, expensesDateRange: action.expensesDateRange };

        case 'SET_SHOPPINGTYPE_RANGE':
            return { ...state, shoppingDateRange: action.shoppingDateRange };

        default:
            return state;
    }
}