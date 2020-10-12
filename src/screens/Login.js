import React from 'react'
import auth from '../classes/auth'
import OpenPay from '../classes/OpenPay'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const Login = (props) => {
    const login = () => {
        auth.login()
        let sessionId = OpenPay.deviceData.setup()
        localStorage.setItem('sessionId', sessionId)
        props.history.push('/charge')
    }

    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            spacing={0}
            className="login"
        >
            <Grid item>
                <Button color="primary" variant="contained" onClick={login}>
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login
