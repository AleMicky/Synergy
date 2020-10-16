import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Container, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Banner } from '../../components/Banner';
import { Tarjeta } from '../../components/Tarjeta';
import { Context } from '../../components/Context';
import { apiImg, apiURL } from '../../config';
import { useFetch } from '../../hooks/useFetch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    formControl: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        margin: 15
    },
    cardMedia: {
        width: '100%',
        height: '40vh',
    },
    cardContent: {
        flexGrow: 1,
    },
    cover: {
        width: 500,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    table: {
        minWidth: 700,
    },
    tableColor: {
        backgroundColor: '#FF0000',
    },
    tableAzul: {
        backgroundColor: '#0067b2',
    },
    cellColor: {
        color: '#fafafa'
    }
}));


export const Metal = () => {

    const classes = useStyles();

    const { loading, data } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost2, setMainFeaturedPost2] = useState({})


    useEffect(() => {

        if (!loading) {
            const banner = data.filter(b => b.interfaz === 'calculadora_contruccion');
            setMainFeaturedPost2({
                title: banner[0].titulo?banner[0].titulo:'',
                description: banner[0].descripcion ? banner[0].descripcion : '',
                image: apiImg + banner[0].imagen.url,
                imgText: banner[0].titulo,
            });

            const banner2 = data.filter(b => b.interfaz === 'calculadora_carpinteria');
            setMainFeaturedPost2({
                title: banner2[0].titulo?banner2[0].titulo:'',
                description: banner2[0].descripcion ? banner2[0].descripcion : '',
                image: apiImg + banner2[0].imagen.url,
                imgText: banner2[0].titulo,
            });
        }

    }, [loading, data])



    return (
        <div className={classes.root}>
            <CssBaseline />
            
                <Context.Consumer>
                    {
                        ({ azul }) => {
                            return (

                                    <React.Fragment>
                                        <div className="animate__animated animate__bounceInUp animate__repeat-4">
                                            <Banner post={mainFeaturedPost2} />
                                        </div>
                                        <Container className={classes.cardGrid} maxWidth="xl">
                                            <Tarjeta title="Metal"
                                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, explicabo omnis odit sint tempora esse, sed commodi ratione, architecto sapiente soluta asperiores veniam dolor debitis reiciendis perferendis quisquam. Sapiente, hic?"
                                                image="https://source.unsplash.com/random"
                                                imageTitle="Image Text" />
                                            <Grid container>
                                             {
                                                 [
                                                     {
                                                        nombre : '1'
                                                     },
                                                     {
                                                        nombre : '2'
                                                     },
                                                     {
                                                        nombre : '3'
                                                     }
                                                 ].map((card , index) => (
                                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                                    <Card className={classes.card}>
                                                        <CardActionArea onClick={() => console.log(1)}>
                                                        <CardMedia
                                                            className={classes.cardMedia}
                                                            image={'https://source.unsplash.com/random'}
                                                            title={card.nombre}
                                                        />
                                                        </CardActionArea>
                                                    </Card>
                                                    </Grid>
                                                ))
                                             }
                                            </Grid>
                                        </Container>
                                    </React.Fragment>
                            )
                        }
                    }
                </Context.Consumer>
        </div>
    )
}