import React from 'react'
import BillFormSingleProduct from '../BillFormSingleProduct'

const BillFormProductsList = ({ products, editProduct, deleteProduct }) => {
    return (
        <ul className="list-group mb-3">
            {
                products === [] ?
                    null
                    :
                    products
                        .map(product =>
                            <BillFormSingleProduct
                                key={Math.random()}
                                productName={product.productName}
                                productAmount={product.productAmount}
                                productPrice={product.productPrice}
                                editProduct={editProduct}
                                deleteProduct={deleteProduct} />
                        )
            }
        </ul>
    )
}

export default BillFormProductsList