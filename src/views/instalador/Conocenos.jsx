import React from 'react'
import { makeStyles, CssBaseline, Grid, Container, Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core';
import { Post } from '../../components/Post';
import { useHistory } from "react-router-dom";
import { Context } from '../../components/Context';
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';


import capacitacicionRojoImg from '../../assets/pdf/1-Capacita.jpg';

import capacitacicionAzulImg from '../../assets/pdf/1-Capacita-a.jpg';

import tarjetaRojoImg from '../../assets/pdf/4-Tarjeta.jpg';
import tarjetaAzulImg from '../../assets/pdf/4-Tarjeta-a.jpg';


import contructorPdf from '../../assets/pdf/BeneficiosConstruccion.pdf';
import contructorImg from '../../assets/pdf/2-Beneficios.jpg';

import carpinteriarPdf from '../../assets/pdf/BeneficiosCarpinteria.pdf';
import carpinteriarImg from '../../assets/pdf/2-Beneficios-a.jpg';

import contructorPoliticaPdf from '../../assets/pdf/PoliticasConstruccion.pdf';
import contructorPoliticaImp from '../../assets/pdf/3-Politica.jpg';

import carpinterarPoliticaPdf from '../../assets/pdf/PoliticasCarpinteria.pdf';
import carpinterarPoliticaImg from '../../assets/pdf/3-Politica-a.jpg';

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
        margin: 15
    },
    cardMedia: {
        width: '100%',
        height: '35vh',
    },
    cardContent: {
        flexGrow: 1,
        height: '8vh',
        backgroundColor: '#FF0000'
      },
      cardContentAzul: {
        flexGrow: 1,
        height: '8vh',
        backgroundColor: '#0067b2'
      }
}));


export const Conocenos = () => {
    let history = useHistory();
    const classes = useStyles();


    const { loading, data } = useFetch(`${apiURL}banners`);

    const hanlderNav = (url) => {
        history.push(url);
    };
    return (
        <Context.Consumer>
            {
                ({ azul }) => {


                    const bandera = azul? 'conocenos_carpinteria':'conocenos_contruccion';
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            {
                                loading?(
                                    <h2>loading</h2>
                                ):(
                                    <Post post={

                                        data.filter(b => b.interfaz === bandera).map(valor => {
                                         return  {
                                                        title: valor.titulo,
                                                        description: valor.descripcion?valor.descripcion:'',
                                                        image:  valor.imagen? apiImg + valor.imagen.url: 'https://source.unsplash.com/random',
                                                        imgText: valor.titulo,
                                                     }


                                        })[0] 



                                    } azul={azul} />
                                )
                            }
                            
                                
                            <Container className={classes.cardGrid} maxWidth="xl">
                                <Grid container
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={12} sm={3} md={3}>
                                            <Card className={classes.card}>
                                                <CardActionArea onClick={() => hanlderNav('/home/capacitacion')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image={azul?capacitacicionAzulImg:capacitacicionRojoImg}
                                                        title="Image title"
                                                    />
                                                </CardActionArea>
                                                <CardContent CardContent className={azul ? classes.cardContentAzul : classes.cardContent}>
                                                <Typography style={{ color: '#fafafa' }} gutterBottom variant="h5" component="h2">
                                                    {'Capacitación'}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea href={azul ? carpinteriarPdf : contructorPdf} target='_blank'>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={azul ? carpinteriarImg : contructorImg}
                                                    title="Beneficios"
                                                />
                                            </CardActionArea>
                                            <CardContent CardContent className={azul ? classes.cardContentAzul : classes.cardContent}>
                                                <Typography style={{ color: '#fafafa' }} gutterBottom variant="h5" component="h2">
                                                    {'Beneficios'}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea href={azul?carpinterarPoliticaPdf:contructorPoliticaPdf} target='_blank'>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={azul?carpinterarPoliticaImg:contructorPoliticaImp}
                                                    title="Políticas"
                                                />
                                            </CardActionArea>
                                            <CardContent CardContent className={azul ? classes.cardContentAzul : classes.cardContent}>
                                                <Typography style={{ color: '#fafafa' }} gutterBottom variant="h5" component="h2">
                                                    {'Políticas'}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                            <Card className={classes.card}>
                                                <CardActionArea onClick={() => hanlderNav('/home/mi-tarjeta')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image={azul?tarjetaAzulImg:tarjetaRojoImg}
                                                        title="Image title"
                                                    />
                                                </CardActionArea>
                                                <CardContent CardContent className={azul ? classes.cardContentAzul : classes.cardContent}>
                                                    <Typography style={{ color: '#fafafa' }} gutterBottom variant="h5" component="h2">
                                                        {'Mi Tarjeta'}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
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