import React, { useState } from 'react'
import OpenPay from '../../../classes/OpenPay'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const CardForm = ({ continuePayment, emptyInputs }) => {
    const [card, setCard] = useState(true)
    const [cvc, setCvc] = useState(true)
    const [date, setDate] = useState(true)

    const validateInputs = (e) => {
        e.preventDefault()
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
        <form id="payment-form" name="processCard" className="payment-form">
            <Grid container direction="column">
                <Grid item>
                    <Grid container direction="row" spacing={5}>
                        <Grid item>
                            <TextField
                                label="Holder Name"
                                placeholder="John Doe"
                                data-openpay-card="holder_name"
                                type="text"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Card Number"
                                placeholder="4111 1111 1111 1111"
                                id="card"
                                data-openpay-card="card_number"
                                type="text"
                                inputProps={{ maxLength: 16 }}
                            />
                            <p
                                style={
                                    card
                                        ? { display: 'none' }
                                        : { display: 'block' }
                                }
                            >
                                Invalid Card Number
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={5}>
                        <Grid item>
                            <TextField
                                label="Expiration Year"
                                placeholder="20"
                                id="year"
                                data-openpay-card="expiration_year"
                                type="text"
                                inputProps={{ maxLength: 2 }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Expiration Month"
                                placeholder="12"
                                id="month"
                                data-openpay-card="expiration_month"
                                type="text"
                                inputProps={{ maxLength: 2 }}
                            />
                        </Grid>
                    </Grid>
                    <p
                        style={
                            date ? { display: 'none' } : { display: 'block' }
                        }
                    >
                        Invalid Date
                    </p>
                </Grid>
                <Grid item>
                    <TextField
                        label="CVC"
                        placeholder="110"
                        id="cvc"
                        data-openpay-card="cvv2"
                        type="text"
                        inputProps={{ maxLength: 4 }}
                    />
                    <p style={cvc ? { display: 'none' } : { display: 'block' }}>
                        Invalid CVC
                    </p>
                </Grid>
                <Grid item>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        id="makeRequestCard"
                        type="button"
                        onClick={validateInputs}
                    >
                        Continue
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default CardForm
