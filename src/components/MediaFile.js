import React, { useContext} from 'react';
import DayModeContext from '../context/DayModeContext';

const MediaFile = () => {
    const { dayMode } = useContext(DayModeContext);
    // const myTrack = new Audio(['../assets/lofiAtemFin.mp3']);

    // const playSong = () => {
    //     console.log("PLAY")
    //     myTrack.play();
    // }
    // const pauseSong = () => {
    //     myTrack.pause();
    // }

    return (
        <div className="MediaFile">
            <div className={ !dayMode ? "night-mode" : "user-info-day" } id="file-container">
                <img 
                    src={require('../assets/music-note.svg')} 
                    alt="Track" 
                    className="track-img" 
                    // onClick={playSong} 
                />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button className={ !dayMode ? "button-night" : "button-day" }>Share</button>
                    <button className={ !dayMode ? "button-night" : "button-day" }>Delete</button>
                </div>
            </div>
            
            <div className={ !dayMode ? "night-mode" : "user-info-day" } id="file-container">
                <img 
                    src={require('../assets/music-note.svg')} 
                    alt="Track" 
                    className="track-img" 
                    // onClick={playSong} 
                />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button className={ !dayMode ? "button-night" : "button-day" }>Share</button>
                    <button className={ !dayMode ? "button-night" : "button-day" }>Delete</button>
                </div>
            </div>

            <div className={ !dayMode ? "night-mode" : "user-info-day" } id="file-container">
                <img 
                    src={require('../assets/music-note.svg')} 
                    alt="Track" 
                    className="track-img" 
                    // onClick={playSong} 
                />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button className={ !dayMode ? "button-night" : "button-day" }>Share</button>
                    <button className={ !dayMode ? "button-night" : "button-day" }>Delete</button>
                </div>
            </div>

            <div className={ !dayMode ? "night-mode" : "user-info-day" } id="file-container">
                <img 
                    src={require('../assets/music-note.svg')} 
                    alt="Track" 
                    className="track-img" 
                    // onClick={playSong} 
                />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button className={ !dayMode ? "button-night" : "button-day" }>Share</button>
                    <button className={ !dayMode ? "button-night" : "button-day" }>Delete</button>
                </div>
            </div>

            <div className={ !dayMode ? "night-mode" : "user-info-day" } id="file-container">
                <img 
                    src={require('../assets/music-note.svg')} 
                    alt="Track" 
                    className="track-img" 
                    // onClick={playSong} 
                />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button className={ !dayMode ? "button-night" : "button-day" }>Share</button>
                    <button className={ !dayMode ? "button-night" : "button-day" }>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default MediaFile;