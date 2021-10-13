import React, {useState} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { PrivateRoute } from './components/utility/PrivateRoute'
import { Restricted } from './components/Restricted'
import { SignIn } from './components/SignIn'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const logIn = (username) => {
    setLoggedInUser(username)
  }
  const logOut = () => {
    setLoggedInUser(null)
  }

  return (
    <div >
      <BrowserRouter>
          <Nav loggedInUser={loggedInUser} logOut={logOut}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign_in" render={props => <SignIn {...props} logIn={logIn}/>}/>
            <Route exact path="/sign_out">
               <Redirect to="/" />
            </Route>
            <PrivateRoute exact path="/restricted" redirectRoute={"/sign_in"} loggedInUser={loggedInUser}>
                <Restricted message="hello there" loggedInUser={loggedInUser} />
            </PrivateRoute>
          </Switch>
      </BrowserRouter>
        
    </div>
  )
}

export default App
