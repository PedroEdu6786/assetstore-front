// Displays form of payment option selected
import React, { useState, Fragment } from 'react'
import CardForm from './credit/CardForm'
import OxxoForm from './oxxo/OxxoForm'
import payments from '../../classes/PayOptions'
import Confirm from '../Confirm'

const PaymentForm = ({ payment }) => {
    const [paymentState, setPaymentState] = useState(false)

    const continuePayment = () => {
        setPaymentState(true)
    }

    const emptyInputs = () => {
        const inputs = document.querySelectorAll('input')
        for (let i = 0; i < inputs.length - 1; i++) {
            if (inputs[i].value.split(' ') === '') return true
        }

        return false
    }

    switch (payment) {
        case payments.CREDIT:
            return (
                <Fragment>
                    <CardForm
                        continuePayment={continuePayment}
                        emptyInputs={emptyInputs}
                    />
                    <Confirm
                        state={paymentState}
                        setState={setPaymentState}
                        paymentMethod="credit"
                    />
                </Fragment>
            )
        case payments.OXXO:
            return (
                <Fragment>
                    <OxxoForm
                        continuePayment={continuePayment}
                        emptyInputs={emptyInputs}
                    />
                    <Confirm
                        state={paymentState}
                        setState={setPaymentState}
                        paymentMethod="oxxo"
                    />
                </Fragment>
            )
        default:
            return <Fragment />
    }
}

export default PaymentForm
