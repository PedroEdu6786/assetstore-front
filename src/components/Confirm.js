import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TransactionConfirm from './TransactionConfirm'
import Loader from './Loader'
import '../index.css'

import styles from '../Confirm.module.css'

const Confirm = ({ state, setState, paymentMethod }) => {
    const [confirm, setConfirm] = useState(false)
    const [loading, setLoading] = useState(false)

    const modalStyles = {
        overlay: {
            backgroundColor: '#151618',
        },
    }

    const handleTransaction = () => {
        setConfirm(true)
    }

    const setModalState = () => {
        setState(false)
    }

    return (
        <Fragment>
            <Modal
                closeTimeoutMS={500}
                isOpen={state}
                style={modalStyles}
                className={styles.modal}
            >
                <Loader loading={loading} />
                <Typography variant="h4" className={styles.font}>
                    Sure you want to proceed with payment?
                </Typography>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={setModalState}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTransaction}
                    className={styles.button}
                >
                    Confirm Payment
                </Button>
            </Modal>
            {confirm ? (
                <TransactionConfirm
                    paymentMethod={paymentMethod}
                    setLoading={setLoading}
                />
            ) : (
                <Fragment />
            )}
        </Fragment>
    )
}

export default Confirm
