import React from 'react';
import { CardActionArea, Typography } from '@material-ui/core';
import { useStyles } from './InnovacionStyle';

export default function Innovacion({ titulo, icon , handleOpen}) {
    const classes = useStyles();

    return (
        <CardActionArea className={classes.card} onClick={handleOpen}>
                {icon}
            <Typography align='center'
                        className={classes.titulo}
                        variant="h5"
                        component="h4">
                {titulo}
            </Typography>
        </CardActionArea>
    )
}
