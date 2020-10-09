import React, { Fragment } from 'react'
import auth from '../classes/auth'
import OpenPay from '../classes/OpenPay'

const Login = (props) => {
    const login = () => {
        auth.login()
        //generate sessionId
        let sessionId = OpenPay.deviceData.setup()
        localStorage.setItem('sessionId', sessionId)
        props.history.push('/charge')
    }

    return (
        <Fragment>
            <button onClick={login}>Login</button>
        </Fragment>
    )
}

export default Login
