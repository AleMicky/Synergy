import React from 'react'
import { makeStyles, CssBaseline, Grid, Container } from '@material-ui/core';
import { Post } from '../../components/Post';
import { useHistory } from "react-router-dom";
import { Context } from '../../components/Context';
import Proyecto from '../../components/Proyecto/Proyecto';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titulo: {
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '50%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const mainFeaturedPost = {
    title: 'Conocenos',
    description: "",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};

export const Conocenos = () => {
    let history = useHistory();
    const classes = useStyles();
    const hanlderNav = (url) => {
        history.push(url);
    };
    return (
        <Context.Consumer>
            {
                ({ azul }) => {
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <div className="animate__animated animate__bounceInUp animate__repeat-4">
                                <Post post={mainFeaturedPost} azul={azul} />
                            </div>
                            <Container className={classes.cardGrid} maxWidth="xl">
                                <Grid container
                                    justify="center"
                                    alignItems="center"
                                   >
                                    <Grid item xs={12} sm={3} md={3}>
                                        <div className="animate__animated animate__bounceInLeft animate__repeat-4">
                                            <Proyecto imagen={'https://source.unsplash.com/random'}
                                                handleOpen={() => hanlderNav('/home/capacitacion')}
                                                azul={azul} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Proyecto imagen={'https://source.unsplash.com/random'}
                                            handleOpen={() => console.log(1)}
                                            azul={azul} />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Proyecto imagen={'https://source.unsplash.com/random'}
                                            handleOpen={() => console.log(1)}
                                            azul={azul} />
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <div className="animate__animated animate__bounceInLeft animate__repeat-4">
                                            <Proyecto imagen={'https://source.unsplash.com/random'}
                                                handleOpen={() => hanlderNav('/home/mi-tarjeta')}
                                                azul={azul} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    )
                }
            }
        </Context.Consumer>

    )
};