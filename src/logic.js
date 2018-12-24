export const isValid = (price, products) => {
    if (products.length === 0) {
        return true
    }
    const totalPrice = products.reduce((sum, product) => {
        const sumPrice = product.productAmount * product.productPrice;
        return sum += sumPrice
    }, 0)
    if (parseInt(price) === totalPrice) {
        return true
    }
    else {
        return false
    }
}