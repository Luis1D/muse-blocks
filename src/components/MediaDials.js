import React from 'react';

const MediaDials = () => {
    return (
        <div className="MediaDials">
            <div className="song-description">
                <span className="song-name">Song Name</span>
                <span className="song-duration">3m:24s</span>
            </div>
            <div className="dial-container">
                <img src={require('../assets/fast-forward-media-control-button.svg')} className="dial rewind-btn arrow" />
                <img src={require('../assets/play-button.svg')} className="dial play-btn" />
                <img src={require('../assets/fast-forward-media-control-button.svg')} className="dial fast-forward-btn arrow" />
            </div>
        </div>
    )
}

export default MediaDials;