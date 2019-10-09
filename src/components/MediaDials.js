import React, { useContext, useEffect } from 'react';
import DayModeContext from '../context/DayModeContext';

const MediaDials = () => {
    const { dayMode } = useContext(DayModeContext);
    const mySong = new Audio(['../assets/trial.wav']);
    
    const playSong = () => {
            mySong.play();
            console.log('clicked..')
        }
    const play = playSong();

    return (
        <div className={ !dayMode ? "night-mode" : "user-info-day" } id="MediaDials">
            <div className="song-description">
                <span className="song-name">Song Name</span>
                <span className="song-duration">3m:24s</span>
            </div>
            <div className="dial-container">
                <img 
                    src={ !dayMode ? require('../assets/fast-forward-media-control-button.svg') : require('../assets/fast-forward-black.svg') } 
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    alt="rewind"
                    className="dial rewind-btn arrow" 
                />
                <img 
                    src={ !dayMode ? require('../assets/play-button.svg') : require('../assets/play-button-black.svg') } 
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    className="dial play-btn" 
                    onClick={ playSong }
                    alt="Play"
                />
                <img 
                    src={ !dayMode ? require('../assets/fast-forward-media-control-button.svg') : require('../assets/fast-forward-black.svg') } 
                    // <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    className="dial fast-forward-btn arrow" 
                    alt="fast forward"
                />
            </div>
            
        </div>
    )
}

export default MediaDials;