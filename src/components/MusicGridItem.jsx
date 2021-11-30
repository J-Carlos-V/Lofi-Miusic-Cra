import React from 'react'

export const MusicGridItem = ({id,title,artist,url,details}) => {
    
    return (
            <div>
                <div>
                <img src={url} alt={title}/>
                <h3> {title} </h3>
                <p>por: {artist} </p>
                <a href= {details}>leer más <i className="fas fa-angle-double-right"></i></a>   
                </div>
            </div>       
    )
}
