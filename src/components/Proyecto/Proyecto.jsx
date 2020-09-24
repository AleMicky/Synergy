import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useStyles } from './ProyectoStyle';

export default function Proyecto({ imagen, handleOpen, azul }) {
    
    const classes = useStyles();

    return (
        <Card className={azul? classes.Azroot: classes.root}>
            <CardActionArea onClick={handleOpen}>
                <CardMedia  className={classes.media}
                            image={imagen}
                            title="Contemplative Reptile"/>
            </CardActionArea>
        </Card>
    );
}
