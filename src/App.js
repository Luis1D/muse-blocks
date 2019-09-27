import React, { useState, useEffect } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import Header from './components/Header';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig(['store_write', 'publish_data'])
const userSession = new UserSession({ appConfig: appConfig })

const  App = () => {
  const [myData, setUserData] = useState();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        // this.setState({ userData: userData})
        setUserData({ myData: userData })
        // console.log(myData)
      });
    }
  },[])

// ****
// console.log(myData)
console.log('APP.JS: ')
// ****

  const handleSignIn = e => {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  const handleSignOut = e => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

    return (
      <div className="site-wrapper">
        <Header userSession={userSession} handleSignOut={ handleSignOut } />
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ handleSignOut } />
          }
        </div>
      </div>
    );
}

export default App;