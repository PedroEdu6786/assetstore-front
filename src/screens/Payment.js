import React, { useState } from 'react'
import ProductInfo from '../components/payment/ProductInfo'
import PayOption from '../components/payment/PayOption'
import TransactionForm from '../components/payment/TransactionForm'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

import styles from '../Form.module.css'

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
        <Container maxWidth="md" className="payment-container">
            <Paper className={styles.paper}>
                <Typography variant="h3" className={styles.font}>
                    Información de pago
                </Typography>
                <ProductInfo />
                <PayOption handlePaymentOption={handlePaymentOption} />
                <TransactionForm payment={payment} />
                <ThemeToggle />
            </Paper>
        </Container>
    )
}

export default Payment
