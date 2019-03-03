import React from 'react'
import BillFormSingleProduct from '../BillFormSingleProduct'

const BillFormProductsList = ({ products, editSingleProduct, deleteSingleProduct }) => {
    return (
        <ul className="list-group mb-3">
            {
                products === [] ?
                    null
                    :
                    products
                        .map(product =>
                            <BillFormSingleProduct
                                key={product.uid}
                                productName={product.productName}
                                productAmount={product.productAmount}
                                productPrice={product.productPrice}
                                uid={product.uid}
                                editSingleProduct={editSingleProduct}
                                deleteSingleProduct={deleteSingleProduct} />
                        )
            }
        </ul>
    )
}

export default BillFormProductsList