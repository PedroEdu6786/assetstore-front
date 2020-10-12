import React, { Fragment, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Modal from 'react-modal'
import TransactionConfirm from './TransactionConfirm'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Confirm = ({ state, setState, paymentMethod }) => {
    const [confirm, setConfirm] = useState(false)

    const modalStyles = {
        overlay: {
            backgroundColor: '#ffffff',
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
            <CSSTransition in={state} timeout={300} classNames="dialog">
                <Modal closeTimeoutMS={500} isOpen={state} style={modalStyles}>
                    <Typography variant="h4">
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
                    >
                        Confirm Payment
                    </Button>
                </Modal>
            </CSSTransition>
            {confirm ? (
                <TransactionConfirm paymentMethod={paymentMethod} />
            ) : (
                <Fragment />
            )}
        </Fragment>
    )
}

export default Confirm
