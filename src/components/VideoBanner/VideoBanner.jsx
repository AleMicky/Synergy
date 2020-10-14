import React from 'react';
import './VideoBanner.css'

export default function VideoBanner({url}) {
    return (
        <div className="banner2">
            <video autoPlay muted loop>
                <source src={url} type="video/mp4"/>
            </video>
        </div>
    )
}
