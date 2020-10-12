import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../screens/Login'
import Payment from '../screens/Payment'
import Success from '../screens/Success'
import ProtectedRoute from '../components/ProtectedRoute'

const Charge = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/auth" component={Login} />
                <ProtectedRoute exact path="/charge" component={Payment} />
                <Route exact path="/success" component={Success} />
                <Route path="*" component={() => '404 Not Found'} />
            </Switch>
        </Router>
    )
}

export default Charge
