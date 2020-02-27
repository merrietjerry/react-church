import * as React from 'react';
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={props => {
        if(localStorage.getItem('user')){
             return <Component {...props} />
        }else{
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
    }
        
    } />
)

