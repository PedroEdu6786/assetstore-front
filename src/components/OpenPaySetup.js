import React, { useEffect } from 'react'
import OpenPay from '../classes/OpenPay'

//Sets all openpay api keys
const OpenPaySetup = () => {
    useEffect(() => {
        const fetchKeys = async () => {
            const res = await fetch('http://localhost:8080/credentials')
            const { merchantId, apiPublicKey } = await res.json()
            OpenPay.setId(merchantId)
            OpenPay.setApiKey(apiPublicKey)
            OpenPay.setSandboxMode(true)
        }
        fetchKeys()
    }, [])

    return <></>
}

export default OpenPaySetup
