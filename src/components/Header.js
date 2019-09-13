import React from 'react';

const Header = props => {
        return (
        props.userSession.isUserSignedIn() ? 
        <header>
            <h1 className="header-logo">Muse<span className="orange">Block</span></h1>
            <button onClick={ props.handleSignOut.bind(this) } className="logout-btn">Logout</button>
        </header>
        : null
    )
}

export default Header;