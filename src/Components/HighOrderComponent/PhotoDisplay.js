import React from 'react';
import myHoc from './HOC'
import '../../App.scss'

function PhotoDisplay(props){
    const displayData = props.data.map((photo, i) => {
        return (
            <div key={i}
            className="display-container"
            >
                <img src={photo.download_url}
                alt="picsum" />
                <h1>{photo.author}</h1>
            </div>
        )
    })
    return (
        <div>
            {displayData}
        </div>
    )
}

export default myHoc(PhotoDisplay, "https://picsum.photos/v2/list");