import React, { useState, Fragment } from 'react'
import ProductInfo from '../components/payment/ProductInfo'
import PayOption from '../components/payment/PayOption'
import TransactionForm from '../components/payment/TransactionForm'

const Payment = () => {
    //Type of payment ex. Oxxo, OpenPay
    const [payment, setPayment] = useState('')

    //Sets payment option
    const handlePaymentOption = (e) => {
        setPayment(e.target.name)
    }

    //First it displays the product's information
    // Displays options of payment
    // Displays the form to fill to complete transaction
    return (
        <Fragment>
            <h1>Información de pago</h1>
            <ProductInfo />
            <PayOption handlePaymentOption={handlePaymentOption} />
            <TransactionForm payment={payment} />
        </Fragment>
    )
}

export default Payment
