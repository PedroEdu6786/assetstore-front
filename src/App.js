import React, { Fragment } from 'react'
import Charge from './app/Charge'
import OpenPaySetup from './components/OpenPaySetup'

const App = () => {
    return (
        <Fragment>
            <OpenPaySetup />
            <Charge />
        </Fragment>
    )
}

export default App
