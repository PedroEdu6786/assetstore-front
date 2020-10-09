import React, { Fragment } from 'react'
// import OpenPay from '../../../classes/OpenPay'

const CardForm = ({ continuePayment, emptyInputs }) => {
    const validateInputs = () => {
        if (!emptyInputs()) {
            continuePayment()
        }
    }

    // const validCard = () => {}

    // const validCvc = () => {}

    // const validDate = () => {}

    return (
        <Fragment>
            <form id="payment-form" name="processCard">
                <label>Holder Name:</label>
                <input data-openpay-card="holder_name" size="50" type="text" />
                <label>Card number:</label>
                <input data-openpay-card="card_number" size="50" type="text" />
                <label>Expiration year:</label>
                <input
                    data-openpay-card="expiration_year"
                    size="4"
                    type="text"
                />
                <label>Expiration month:</label>
                <input
                    data-openpay-card="expiration_month"
                    size="4"
                    type="text"
                />
                <label>cvv2:</label>
                <input data-openpay-card="cvv2" size="5" type="text" />
                <input
                    id="makeRequestCard"
                    type="button"
                    value="Continue"
                    onClick={validateInputs}
                />
            </form>
        </Fragment>
    )
}

export default CardForm
