import React from 'react';
import './CardStyle.css';
export default function CardStyle ({nombre , url, handleClick}) {
    return (
        <div className="card 1" onClick={handleClick}>
            <div className="card_image"> <img src={url} alt={nombre}/> </div>
            <div className="card_title title-white">
                <p>{nombre}</p>
            </div>
        </div>
      
    )
}
