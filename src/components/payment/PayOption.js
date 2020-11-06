//Displays different types of payment options
import React, { Fragment } from 'react'

import styles from '../../Form.module.css'

const PayOption = ({ handlePaymentOption }) => {
    return (
        <Fragment>
            <img
                src="./static/cards.png"
                alt="credit"
                name="credit"
                width="100%"
                className={styles.optionContainer}
                onClick={handlePaymentOption}
            />
            <img
                src="./static/oxxo.png"
                alt="oxxo"
                name="oxxo"
                width="100%"
                className={styles.optionContainer}
                onClick={handlePaymentOption}
            />
        </Fragment>
    )
}

export default PayOption
