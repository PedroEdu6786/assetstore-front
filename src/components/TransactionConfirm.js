import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import payments from '../classes/PayOptions'
import TokenGenerator from '../classes/TokenGenerator'
import ChargeDTO from '../classes/ChargeDTO'
import OpenPayPayment from '../classes/OpenPayPayment'
import customer from '../utils/customerDetails'
import product from '../utils/productDetails'
import { getRandomInt } from '../utils/randomNumbers';

const TransactionConfirm = ({ paymentMethod, setLoading }) => {
    const history = useHistory()

    const handlePayment = () => {
        switch (paymentMethod) {
            case payments.CREDIT:
                console.log("pagando...");
                var form = document.getElementById('payment-form')
                setLoading(true)
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

    const handleError = (response) => {
        var desc =
            response.data.description != undefined
                ? response.data.description
                : response.message
        alert('ERROR [' + response.status + '] ' + desc)
    }

    const setChargeBody = (tokenId) => {
        const sessionId = localStorage.getItem('sessionId')
        var charge = new ChargeDTO()

        const newCustomer = customer[getRandomInt(0, 4)];

        charge.setAmount(product.amount)
        charge.setDescription(product.concept)
        charge.setCustomer(newCustomer)
        charge.setDeviceSessionId(sessionId)
        charge.setTokenId(tokenId)

        return charge
    }

    useEffect(() => {
        handlePayment();
    }, [])

    return <Fragment />
}

export default TransactionConfirm
