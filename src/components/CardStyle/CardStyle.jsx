import React from 'react';
import './CardStyle.css';
export default function CardStyle ({nombre , url}) {
    return (
        <div className="card 1">
            <div className="card_image"> <img src={url} /> </div>
            <div className="card_title title-white">
                <p>{nombre}</p>
            </div>
      </div>
      
    )
}
