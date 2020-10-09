import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import payments from '../classes/PayOptions'
import TokenGenerator from '../classes/TokenGenerator'
import ChargeDTO from '../classes/ChargeDTO'
import OpenPayPayment from '../classes/OpenPayPayment'
import customer from '../utils/customerDetails'
import product from '../utils/productDetails'

const TransactionConfirm = ({ paymentMethod }) => {
    const history = useHistory()

    const handlePayment = () => {
        const form = document.getElementById('payment-form')
        switch (paymentMethod) {
            case payments.CREDIT:
                TokenGenerator.generateToken(form, handleSuccess, handleError)
                break
            case payments.OXXO:
                history.push('/success')
                break
            default:
                break
        }
    }

    const handleSuccess = async (response) => {
        const tokenId = response.data.id
        var charge = setChargeBody(tokenId)
        var transaction = new OpenPayPayment(charge)
        var res = await transaction.charge()
        if (res.status === 'completed') {
            history.push('/success')
        }
    }

    const handleError = (response) => {}

    const setChargeBody = (tokenId) => {
        const sessionId = localStorage.getItem('sessionId')
        var charge = new ChargeDTO()

        charge.setAmount(product.amount)
        charge.setDescription(product.concept)
        charge.setCustomer(customer)
        charge.setDeviceSessionId(sessionId)
        charge.setTokenId(tokenId)

        return charge
    }

    useEffect(() => {
        handlePayment()
    })

    return <Fragment />
}

export default TransactionConfirm
