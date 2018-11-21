const initialState = {
    bills: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BILL":
            return {
                ...state,
                bills: [...state.bills, action.payload]
            }
        default:
            return state
    }
}