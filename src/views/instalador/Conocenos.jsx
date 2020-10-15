import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Grid, Container, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Post } from '../../components/Post';
import { useHistory } from "react-router-dom";
import { Context } from '../../components/Context';
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';
import contructorPdf from '../../assets/pdf/BeneficiosConstruccion.pdf';
import contructorImg from '../../assets/pdf/BeneficiosConstruccion.png';
import carpinteriarPdf from '../../assets/pdf/BeneficiosCarpinteria.pdf';
import carpinteriarImg from '../../assets/pdf/BeneficiosCarpinteria.png';

import contructorPoliticaPdf from '../../assets/pdf/PoliticasConstruccion.pdf';
import contructorPoliticaImp from '../../assets/pdf/politicaConstruccion.png';

import carpinterarPoliticaPdf from '../../assets/pdf/PoliticasCarpinteria.pdf';
import carpinterarPoliticaImg from '../../assets/pdf/politicaCarpinteria.png';

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
        height: '40vh',
    },
    cardContent: {
        flexGrow: 1,
    },
}));


export const Conocenos = () => {
    let history = useHistory();
    const classes = useStyles();


    const { loading, data } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost, setMainFeaturedPost] = useState({})

    useEffect(() => {

        if(!loading){
         const banner = data.filter(b => b.interfaz === 'conocenos');
         
         setMainFeaturedPost({
            title: banner[0].titulo,
            description: banner[0].descripcion?banner[0].descripcion:'',
            image: banner[0].imagen?apiImg + banner[0].imagen.url:'https://source.unsplash.com/random',
            imgText: banner[0].titulo,
        });
        }
      
    }, [loading, data ])


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
                                            <Card className={classes.card}>
                                                <CardActionArea onClick={() => hanlderNav('/home/capacitacion')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image={'https://source.unsplash.com/random'}
                                                        title="Image title"
                                                    />
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea href={azul?carpinteriarPdf:contructorPdf} target='_blank'>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={azul?carpinteriarImg:contructorImg}
                                                    title="Benificios"
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea href={azul?carpinterarPoliticaPdf:contructorPoliticaPdf} target='_blank'>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image={azul?carpinterarPoliticaImg:contructorPoliticaImp}
                                                    title="Politicas"
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3}>
                                        <div className="animate__animated animate__bounceInLeft animate__repeat-4">
                                            <Card className={classes.card}>
                                                <CardActionArea onClick={() => hanlderNav('/home/mi-tarjeta')}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image={'https://source.unsplash.com/random'}
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