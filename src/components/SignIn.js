import React, {useState} from 'react'

/**
* @author
* @function SignIn
**/

export const SignIn = (props) => {

    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })


    const {logIn, history, location} = props;
    
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= (e) => {
        e && e.preventDefault();
        logIn(formValues.username);
        location?.state?.from?.pathname ? 
        history.push(location.state.from.pathname) : 
        history.push("/");
    }


  return(
    <>
    <h2>Sign In</h2>
    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:"column"}}>
        <div style={{marginBottom:"1em"}}>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} id="username" name="username" type="text" value={formValues.username} />
        </div>
        <div style={{marginBottom:"1em"}}>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} id="password" name="password" type="password" value={formValues.password} />
        </div>
        <div style={{marginBottom:"1em"}}>
            <input value="Log in" type="submit" />
        </div>
    </form>
    </>
    
   )

 }