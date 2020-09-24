import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 175,
        [theme.breakpoints.up('sm')]: {
            height: 380
          },   
    }
}));

export default function Carosel({record}) {
    const classes = useStyles();
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
                {
                    record.map((data, index) => {
                        return(
                        <div key={index}>
                            <img className={classes.root}
                                 src={data.imagen}  
                                 alt={data.nombre}/>
                        </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}
