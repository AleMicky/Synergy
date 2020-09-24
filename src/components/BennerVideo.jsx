import React from 'react'
import './BennerVideo.css';
export const BennerVideo = () => {
    return (
        <div className="banner">
            <video autoPlay muted loop>
                <source src="https://res.cloudinary.com/dkepyautb/video/upload/v1595337621/MUESTRA_VIDEO_1.mp4" type="video/mp4"/>
            </video>
        </div>
    )
};