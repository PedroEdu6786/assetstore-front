import React, { Fragment } from 'react'

const OxxoForm = ({ continuePayment, emptyInputs }) => {
    const validateInputs = () => {
        if (!emptyInputs()) {
            continuePayment()
            return
        }

        // Print out error modal
    }

    return (
        <Fragment>
            <form id="payment-form" name="processCard">
                <label>Phone Number:</label>
                <input data-openpay-card="phone_number" size="50" type="text" />
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

export default OxxoForm
