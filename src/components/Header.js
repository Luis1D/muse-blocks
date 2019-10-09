import React, { useContext} from 'react';
import DayModeContext from '../context/DayModeContext';

const Header = props => {
    const { dayModeFunc, dayMode } = useContext(DayModeContext);
    // const personFunction = () => {
    //     return 'Anonymous';
    // }
    // const [person, setPerson] = useState(personFunction)
    // console.log("HEADER",dayModeFunc)

    return (
        props.userSession.isUserSignedIn() ? 
        <header className={ !dayMode ? "night-mode" : "day-mode-header" }>
            <h1 className="header-logo">Muse<span className="orange">Block</span></h1>
            <h1 className="user-name"><span id="heading-name">{ props.person.name() ? props.person.name() : 'Nameless Person' }</span></h1>
            <div className="button-container">
                <img 
                    src={ !dayMode ? require('../assets/logout.svg') : require('../assets/logout-black.svg') }
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  
                    onClick={ props.handleSignOut.bind(this) }
                    alt="logout"
                    className="logout-btn"
                />
                <img 
                    src={ !dayMode ? require('../assets/settings.svg') : require('../assets/settings-black.svg') }
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  
                    alt="settings"
                    className="settings-btn"
                />
                <img 
                    src={ !dayMode ? require('../assets/sun.svg') : require('../assets/night.svg')}
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  
                    className="settings-btn day-mode-btn"
                    alt="day mode"
                    onClick={dayModeFunc}
                />
            </div>
        </header>
        : null
    )
}

export default Header;