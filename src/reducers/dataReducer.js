const initialState = {
    bills: [
        {
            price: 100,
            nameShop: 'Lidl',
            shoppingDate: '2015-03-20',
            payment: 'card',
            products: [
                { uid: 'sdfvcxz', productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { uid: 'fads', productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { uid: 'fhjddfvv', productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { uid: 'iuytr', productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { uid: 'ert', productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { uid: 'ccfsdf', productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { uid: 'vdfvdf', productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { uid: '23d234', productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { uid: 'dsafrf5', productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { uid: 'acsdcx', productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { uid: '87tfde', productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { uid: 'wrw5yv', productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { uid: 'cwt54c', productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { uid: 'ertwvtg', productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { uid: 'xwgwfdxdf', productName: 'Śmietana', productPrice: 3, productAmount: 4 }
            ]
        },
        {
            price: 50,
            nameShop: 'Orlen',
            shoppingDate: '2016-06-07',
            payment: 'card',
            products: [
                { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
                { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
            ]
        },
        {
            price: 100,
            nameShop: 'Jolka',
            shoppingDate: '2018-02-14',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        }
    ]
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