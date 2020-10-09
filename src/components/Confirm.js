import React, { Fragment, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Modal from 'react-modal'
import TransactionConfirm from './TransactionConfirm'

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
                    <button onClick={setModalState}>Cancel</button>
                    <button onClick={handleTransaction}>Confirm Payment</button>
                    <div>Hello World</div>
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
