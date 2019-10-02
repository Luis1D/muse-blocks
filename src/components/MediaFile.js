import React, { useEffect } from 'react';

const MediaFile = () => {

    const myTrack = new Audio(['../assets/lofiAtemFin.mp3']);

    const playSong = () => {
        console.log("PLAY")
        myTrack.play();
    }
    const pauseSong = () => {
        myTrack.pause();
    }

    return (
        <div className="MediaFile">
            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>

            <div className="file-container">
                <img src={require('../assets/music-note.svg')} alt="Track" className="track-img" onClick={playSong} />
                <div className="file-info">
                    <h3>Track Title</h3>
                    <h4>2m:54s</h4>
                </div>
                <div className="file-btn-container">
                    <button>Share</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
            
        </div>
    )
}

export default MediaFile;