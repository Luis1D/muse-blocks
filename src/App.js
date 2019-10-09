import React, { useState, useEffect } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import DayModeContext from './context/DayModeContext';
import Footer from './components/Footer';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig(['store_write', 'publish_data'])
const userSession = new UserSession({ appConfig: appConfig })

const  App = () => {
  const [myData, setUserData] = useState();
  const [dayMode, setDayMode] = useState(false);

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

  const handleSignIn = e => {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  const handleSignOut = e => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  const dayModeFunc = () => {
    setDayMode(!dayMode);
    console.log("Clicked", dayMode)
  }

    return (
      
      <div className={ !dayMode ? "site-wrapper" : "day-mode-body" }>
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ handleSignIn } />
            : <DayModeContext.Provider value={{ dayMode, dayModeFunc }}>
                <Profile dayMode={dayMode} userSession={userSession} handleSignOut={ handleSignOut } />
                <Footer />
              </DayModeContext.Provider>
          }
        </div>
      </div>
    );
}

export default App;