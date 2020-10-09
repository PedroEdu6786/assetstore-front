// Contains product info to get charged
import React, { Fragment } from 'react'
import product from '../../utils/productDetails'

const ProductInfo = () => {
    const { concept, good, id, amount } = product

    return (
        <Fragment>
            <p>{concept}</p>
            <p>{good}</p>
            <p>{id}</p>
            <p>{amount}</p>
        </Fragment>
    )
}

export default ProductInfo
