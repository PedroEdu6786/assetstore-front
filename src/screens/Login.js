import React from 'react'
import auth from '../classes/auth'
import OpenPay from '../classes/OpenPay'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from '../Login.module.css'

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
            className={styles.login}
        >
            <Grid item>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={login}
                    className={styles.button}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login
