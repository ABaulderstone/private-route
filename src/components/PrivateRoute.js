import React from 'react'
import { Redirect, Route } from 'react-router'


export const PrivateRoute = (props) => {
    const {loggedInUser, redirectRoute, children, ...rest} = props;
  return(
    <Route {...rest} render={props => loggedInUser ? children : <Redirect to={{pathname: redirectRoute, state: {from: props.location}}} />} />
   )
 }