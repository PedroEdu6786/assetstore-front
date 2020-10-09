import React, { Fragment, useState } from 'react'
import OpenPay from '../../../classes/OpenPay'

const CardForm = ({ continuePayment, emptyInputs }) => {
    const [card, setCard] = useState(true)
    const [cvc, setCvc] = useState(true)
    const [date, setDate] = useState(true)

    const validateInputs = () => {
        var card = validCard()
        var cvc = validCvc()
        var date = validDate()
        if (!emptyInputs() && card && cvc && date) {
            continuePayment()
        }
    }

    const validCard = () => {
        var card = document.getElementById('card').value
        var state = OpenPay.card.validateCardNumber(card) //openpay validates if card number is valid and returns answer
        setCard(state)
        return state
    }

    const validCvc = () => {
        var cvc = document.getElementById('cvc').value
        var state = OpenPay.card.validateCVC(cvc) //openpay validates if card number is valid and returns answer
        setCvc(state)
        return state
    }

    const validDate = () => {
        var month = document.getElementById('month').value
        var year = document.getElementById('year').value
        var state = OpenPay.card.validateExpiry(month, year) //openpay validates if card number is valid and returns answer
        setDate(state)
        return state
    }

    return (
        <Fragment>
            <form id="payment-form" name="processCard">
                <label>Holder Name:</label>
                <input data-openpay-card="holder_name" size="50" type="text" />
                <label>Card number:</label>
                <input
                    id="card"
                    data-openpay-card="card_number"
                    size="50"
                    type="text"
                />
                <p style={card ? { display: 'none' } : { display: 'block' }}>
                    Invalid Card Number
                </p>
                <label>Expiration year:</label>
                <input
                    id="year"
                    data-openpay-card="expiration_year"
                    size="4"
                    type="text"
                />
                <label>Expiration month:</label>
                <input
                    id="month"
                    data-openpay-card="expiration_month"
                    size="4"
                    type="text"
                />
                <p style={date ? { display: 'none' } : { display: 'block' }}>
                    Invalid Date
                </p>
                <label>CVC:</label>
                <input id="cvc" data-openpay-card="cvv2" size="5" type="text" />
                <p style={cvc ? { display: 'none' } : { display: 'block' }}>
                    Invalid CVC
                </p>
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
