import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from '../../../Form.module.css'

const OxxoForm = ({ continuePayment, emptyInputs }) => {
    const validateInputs = () => {
        if (!emptyInputs()) {
            continuePayment()
            return
        }
    }

    return (
        <form id="payment-form" name="processCard">
            <Grid container direction="column">
                <Grid item>
                    <TextField
                        label="Phone Number"
                        placeholder="999 425 9456"
                        data-openpay-card="phone_number"
                        type="text"
                        className={styles.input}
                    />
                </Grid>
                <Grid item>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        id="makeRequestCard"
                        type="button"
                        onClick={validateInputs}
                        className={styles.button}
                    >
                        Continue
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default OxxoForm
