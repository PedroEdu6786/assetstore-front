//Displays different types of payment options
import React, { Fragment } from 'react'

const PayOption = ({ handlePaymentOption }) => {
    return (
        <Fragment>
            <img
                src="./static/cards.png"
                alt="credit"
                name="credit"
                width="20%"
                onClick={handlePaymentOption}
            />
            <img
                src="./static/oxxo.png"
                alt="oxxo"
                name="oxxo"
                width="20%"
                onClick={handlePaymentOption}
            />
        </Fragment>
    )
}

export default PayOption
