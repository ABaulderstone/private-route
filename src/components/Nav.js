import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function Nav
**/

export const Nav = (props) => {
    const {loggedInUser, logOut} = props;
  return(
    <nav>
    <ul style={{display:'flex', justifyContent:"space-around", listStyleType:"none"}}>
        <li><span>Welcome {loggedInUser || "guest"}</span></li>
        <li><Link to="/sign_in">Sign In</Link></li>
        <li><Link to="/restricted">Restricted</Link></li>
        <li><Link to="/public">Public</Link></li>
        <li><Link to="/sign_out" onClick={logOut}>Sign Out</Link></li>
    </ul>
    </nav>
   )

 }