import { ADD_BILL, DELETE_BILL } from './types'

export const addBill = (bill) => {
    return {
        type: ADD_BILL,
        payload: bill
    }
}
export const deleteBill = (bill) => {
    return {
        type: DELETE_BILL,
        payload: bill
    }
}