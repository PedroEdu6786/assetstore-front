import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from '../classes/auth'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!auth.isAuthenticated()) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/auth',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export default ProtectedRoute
