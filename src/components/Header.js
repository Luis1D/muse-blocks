import React from 'react';

const Header = props => {
        console.log('HEADER:',props)
        return (
        props.userSession.isUserSignedIn() ? 
        <header>
            <h1 className="header-logo">Muse<span className="orange">Block</span></h1>
            <div className="button-container">
                {/* <button onClick={ props.handleSignOut.bind(this) } className="logout-btn">Logout</button> */}
                <img 
                    src={require('../assets/logout-web-button.svg')}  
                    onClick={ props.handleSignOut.bind(this) }
                    className="logout-btn"
                />
            </div>
        </header>
        : null
    )
}

export default Header;