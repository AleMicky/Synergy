import React from 'react'
import { makeStyles, Typography, CardActionArea } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 50,
        maxWidth: 200,
        minHeight: '30vh'
    },
    icono:{
        fontSize: 70, 
        color: '#fafafa'
    },
    titulo:{
        color: '#fafafa'
    }
}));


export const CardInnovacion = ({ titulo }) => {
    const classes = useStyles();

    return (

        <CardActionArea className={classes.card}>
            <AssignmentIndIcon  className={classes.icono}/>
            <Typography align='center'
                        className={classes.titulo}
                        variant="h5"
                        component="h4">
                {titulo}
            </Typography>
        </CardActionArea>

    )
}
