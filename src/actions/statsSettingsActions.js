import {
    SET_SHOPPINGTYPE_RANGE,
    SET_PAYMENT_METHOD_RANGE,
    SET_EXPENSES_RANGE
} from './types';

export const setShoppingDateRange = (shoppingDateRange) => {
    return {
        type: SET_SHOPPINGTYPE_RANGE,
        shoppingDateRange
    }
}
export const setPaymentMethodsDateRange = (paymentMethodDateRange) => {
    return {
        type: SET_PAYMENT_METHOD_RANGE,
        paymentMethodDateRange
    }
}
export const setExpensesDateRange = (expensesDateRange) => {
    return {
        type: SET_EXPENSES_RANGE,
        expensesDateRange
    }
}