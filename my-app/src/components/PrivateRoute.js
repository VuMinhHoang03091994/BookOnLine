import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth'
const PrivateRoute = (props) =>{
    const {render,...rest} = props;
    console.log(auth.isAuthenticated())
    return (
        <>
            {JSON.parse(localStorage.getItem('auth')) === true ? 
            
            <Route {...rest} render={()=>render()}/>: <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
            }
        </>
    )
}

export default PrivateRoute;