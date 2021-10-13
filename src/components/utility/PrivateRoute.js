import React from 'react'
import { Redirect, Route } from 'react-router'
import { childrenWithProps } from './childrenWithProps';


export const PrivateRoute = (props) => {
    const {loggedInUser, redirectRoute, children, ...rest} = props;
  return(
    <Route {...rest} render={props => loggedInUser ? childrenWithProps(children, {...rest}) : <Redirect to={{pathname: redirectRoute, state: {from: props.location}}} />} />
   )
 }