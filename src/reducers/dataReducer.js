const initialState = {
    bills: [
        {
            price: 100,
            nameShop: 'Lidl',
            shoppingDate: '2015-03-20',
            payment: 'card',
            products: [
                { productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { productName: 'Śmietana', productPrice: 3, productAmount: 4 },
                { productName: 'Kawa', productPrice: 20, productAmount: 2 },
                { productName: 'Mleko', productPrice: 4, productAmount: 10 },
                { productName: 'Śmietana', productPrice: 3, productAmount: 4 }
            ]
        },
        {
            price: 50,
            nameShop: 'Orlen',
            shoppingDate: '2016-06-07',
            payment: 'card',
            products: [
                { productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
                { productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
            ]
        },
        {
            price: 100,
            nameShop: 'Jolka',
            shoppingDate: '2018-02-14',
            payment: 'cash',
            products: [
                { productName: 'Piwo', productPrice: 5, productAmount: 2 }
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