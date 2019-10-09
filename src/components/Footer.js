import React, { useContext} from 'react';
import DayModeContext from '../context/DayModeContext';

const Footer = () => {
    const { dayMode } = useContext(DayModeContext);

    return (
        <div className={ !dayMode ? "night-mode-footer" : "day-mode-footer" }>
        </div>
    )
}

export default Footer;