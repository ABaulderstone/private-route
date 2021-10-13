import React from 'react'

/**
* @author
* @function Restricted
**/

export const Restricted = (props) => {
    console.log(props);
    const {message, loggedInUser} = props
  return(
    <h3> {message} {loggedInUser} </h3>
   )

 }