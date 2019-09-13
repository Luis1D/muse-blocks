import React, { useState } from 'react';
import MediaList from './MediaList';

const MediaPlayer = props => {
    const [mediaFile, setMediaFile] = useState([{ file: "", id: null }]);

    const handleChange = e => {
        // console.log(e.target.value);
        setMediaFile([{
            ...mediaFile,
            [e.target.name]: e.target.value,
            id: Math.random()
        }])
    }

    const handleSubmit = e => {
        e.preventDefault();
        // setMediaFile([{ file: "", id: null }]);
        
        console.log(mediaFile);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="file" 
                    value={mediaFile.file}
                    name="file"
                    onChange={handleChange}
                />
                <button>Add To Player</button>
            </form>
            {
                mediaFile.map((file, key) => {
                    return <MediaList file={file} key={key} />
                })
                // console.log(mediaFile)
            }
        </div>
    )
}

export default MediaPlayer;