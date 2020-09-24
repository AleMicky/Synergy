import React from 'react'
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import { Accordions } from '../../components/Accordions';
import { FormContacto } from '../../components/FormContacto';
import { Context } from '../../components/Context';
import { Banner } from '../../components/Banner';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
      //  padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const mainFeaturedPost = {
    title: 'Contacto',
    description: "",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};
export const Contacto = () => {
    const classes = useStyles();

    return (
        <Context.Consumer>
            {
                ({ azul }) => {

                    return (
                        <div className={classes.root}>            
                        <CssBaseline />
                        <Banner post={mainFeaturedPost} />

                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <div className={classes.paper}>
                                        <Accordions azul = {azul}/>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className={classes.paper}>
                                        <FormContacto azul = {azul}/>
                                    </div>
                                </Grid>
                            </Grid>
                    </div>
                    )
                }
            }
               
        </Context.Consumer>

    )
}
