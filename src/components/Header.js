import React, {} from 'react';

const Header = props => {

        return (
        props.userSession.isUserSignedIn() ? 
        <header>
            <h1 className="header-logo">Muse<span className="orange">Block</span></h1>
            <div className="button-container">
                {/* <button onClick={ props.handleSignOut.bind(this) } className="logout-btn">Logout</button> */}
                <img 
                    src={require('../assets/logout.svg')}  
                    onClick={ props.handleSignOut.bind(this) }
                    className="logout-btn"
                />
                <img 
                    src={require('../assets/settings.svg')}  
                    className="settings-btn"
                />
            </div>
        </header>
        : null
    )
}

export default Header;