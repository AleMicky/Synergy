import React from 'react'
import { makeStyles, CssBaseline, Grid, Container, Card, CardMedia, CardActionArea, CardHeader, Button, CardActions, Typography } from '@material-ui/core';
import { Post } from '../../components/Post';
import { useHistory } from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';
import { Context } from '../../components/Context';

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
        paddingTop: theme.spacing(8),
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
                                        spacing={4}>
                                    <Grid item xs={12} sm={3} md={3}>
                                    <div className="animate__animated animate__bounceInLeft animate__repeat-4">
                                            <Card className={classes.card}>
                                            <CardHeader title={'Como Utilizo Mi Tarjeta'} />

                                                <CardActionArea onClick={() => hanlderNav('/home/mi-tarjeta')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image="https://source.unsplash.com/random"
                                                        title="Image title"
                                                    />
                                                </CardActionArea>
                                               
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardHeader title={'Beneficios'} />
                                            <CardActionArea onClick={() => console.log(1)}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random"
                                                    title="sads"
                                                />
                                            </CardActionArea>
                                            <CardActions>
                                                <Button href="https://drive.google.com/file/d/1JrqmiHX2tz5OiB6AO3GYMHHSSE9yRRxb/view?usp=sharing" target="_blank">
                                                    <GetAppIcon className={classes.playIcon} />
                                                </Button>
                                                <Typography component="h6" variant="h6">
                                                    Ver
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardHeader title={'Politicas'} />
                                            <CardActionArea onClick={() => console.log(1)}>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random"
                                                    title="sads"
                                                />
                                            </CardActionArea>
                                            <CardActions>
                                                <Button href="https://drive.google.com/file/d/1JrqmiHX2tz5OiB6AO3GYMHHSSE9yRRxb/view?usp=sharing" target="_blank">
                                                    <GetAppIcon className={classes.playIcon} />
                                                </Button>
                                                <Typography component="h6" variant="h6">
                                                    Ver
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                    <div className="animate__animated animate__bounceInLeft animate__repeat-4">
                                            <Card className={classes.card}>
                                            <CardHeader title={'Capacitaciones'} />

                                                <CardActionArea onClick={() => hanlderNav('/home/capacitacion')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image="https://source.unsplash.com/random"
                                                        title="Image title"
                                                    />
                                                </CardActionArea>
                                                
                                            </Card>
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