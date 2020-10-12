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
        var inputs = document.querySelectorAll('input')
        console.log(inputs[0].value.split(' ').join('') === '')
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.split(' ').join('') === '') return true
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
