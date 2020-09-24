import React from 'react'
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        display: 'flex',
        margin: 8,
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    lista:{
        textAlign:'justify',
    }
});
export const Tarjeta = ({ title, description }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.cardDetails}>
                <CardContent>
                    <Typography component="h3" 
                                variant="h6"
                                color="textPrimary" 
                                gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1"  
                                color="textSecondary" 
                                align="justify"
                                paragraph>
                        {description}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
}
