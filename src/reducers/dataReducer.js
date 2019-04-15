const initialState = {
    bills: [
        {
            price: 65,
            nameShop: 'Jolka',
            shoppingDate: '2019-02-14',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        },
        {
            price: 12,
            nameShop: 'Orlen',
            shoppingDate: '2019-03-07',
            payment: 'card',
            products: [
                { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
                { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
            ]
        },
        {
            price: 123,
            nameShop: 'Jolka',
            shoppingDate: '2019-03-14',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        },
        {
            price: 44,
            nameShop: 'Jolka',
            shoppingDate: '2019-02-24',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        },
        {
            price: 59,
            nameShop: 'Orlen',
            shoppingDate: '2019-05-17',
            payment: 'card',
            products: [
                { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
                { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
            ]
        },
        {
            price: 80,
            nameShop: 'Jolka',
            shoppingDate: '2019-01-14',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        },
        {
            price: 27.54,
            nameShop: 'Jolka',
            shoppingDate: '2019-05-22',
            payment: 'cash',
            products: [
                { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
            ]
        },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 34,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 65,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 12,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-06-07',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 123,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-03-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 44,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-24',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 59,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-05-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 80,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 27.54,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-09-22',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 150,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-03-11',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 67,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-06-12',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 100,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-01-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 53,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-04-17',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 10,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-02-19',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 110,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-11-14',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 340.23,
        //     nameShop: 'Orlen',
        //     shoppingDate: '2019-10-02',
        //     payment: 'card',
        //     products: [
        //         { uid: 'fdlkmrkrkeri', productName: 'Benzyna', productPrice: 5.5, productAmount: 10 },
        //         { uid: '283744fmrjcs', productName: 'Gaz', productPrice: 2.3, productAmount: 2 }
        //     ]
        // },
        // {
        //     price: 160.23,
        //     nameShop: 'Jolka',
        //     shoppingDate: '2019-05-23',
        //     payment: 'cash',
        //     products: [
        //         { uid: 'safadskfasdnf', productName: 'Piwo', productPrice: 5, productAmount: 2 }
        //     ]
        // }
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