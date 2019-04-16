import moment from 'moment';

export const getMaxPrice = bills => {
    const prices = bills.map(bill => bill.price);
    return Math.max(...prices);
}

export const getShopNames = bills => {
    const names = bills.map(bill => bill.nameShop);
    return [...new Set(names)];
}
export const sortBills = (bills, trend) => ({
    none: () => {
        return bills;
    },
    price: () => {
        const sortedBills = bills.sort((a, b) => {
            return a.price - b.price;
        });
        return trend ? sortedBills : sortedBills.reverse();
    },
    quantity: () => {
        const sortedBills = bills.sort((a, b) => {
            return a.products.length - b.products.length;
        });
        return trend ? sortedBills : sortedBills.reverse();
    },
    payment: () => {
        const sortedBills = [...bills.filter(bill => bill.payment === 'cash'), ...bills.filter(bill => bill.payment === 'card')];
        return trend ? sortedBills : sortedBills.reverse();
    },
    date: () => {
        const sortedBills = bills.sort((a, b) => {
            return new Date(a.shoppingDate).getTime() - new Date(b.shoppingDate).getTime();
        })
        return trend ? sortedBills : sortedBills.reverse();
    }
})

export const sortBillsByDate = (bills, trend) => {
    const sortedBills = bills.sort((a, b) => {
        return new Date(a.shoppingDate).getTime() - new Date(b.shoppingDate).getTime();
    })
    return trend ? sortedBills : sortedBills.reverse();
}

export const getBillsFiltredByPrice = (bills, rangeInputValue) => {
    const filtredBills = bills.filter((bill) => {
        if (bill.price >= rangeInputValue[0] && bill.price <= rangeInputValue[1]) {
            return true
        }
        else return false
    })
    return filtredBills;
}

export const getBillsFiltredByShopName = (bills, shopName) => {
    const filtredBills = bills.filter((bill) => bill.nameShop.toLowerCase() === shopName.toLowerCase());
    return filtredBills;
}
export const getBillsFiltredByDate = (bills, rangeDate) => {
    const startDate = rangeDate.split('-')[0].trim();
    const endDate = rangeDate.split('-')[1].trim();
    const filteredBills = bills.filter((bill) => {
        const shoppingDate = moment(bill.shoppingDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
        if (moment(shoppingDate, 'DD/MM/YYYY').isBetween(moment(startDate, 'DD/MM/YYYY'), moment(endDate, 'DD/MM/YYYY'))) {
            return true;
        } else return false;
    });

    return filteredBills;
}
