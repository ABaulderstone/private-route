import React from 'react'

/**
* @author
* @function Restricted
**/

export const Restricted = (props) => {
    const {message, loggedInUser} = props
  return(
    <h3> {message} {loggedInUser} </h3>
   )

 }