import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardMedia, Container, Grid, makeStyles } from '@material-ui/core';
import { useFetch } from '../../../hooks/useFetch';
import { apiURL, apiImg } from '../../../config';
import { Banner } from '../../../components/Banner';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      // paddingTop: theme.spacing(8),
      // paddingBottom: theme.spacing(8),
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
  
export default function Arquitectos({handleOpen}) {

    const classes = useStyles();
    const { loading, data } = useFetch(`${apiURL}arquitectura-hogars`);


    const { loading:load, data:dataBanner } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost, setMainFeaturedPost] = useState({})

    useEffect(() => {

        if(!load){
        const banner = dataBanner.filter(b => b.interfaz === 'mobiliaria_especializado');
        setMainFeaturedPost({
            title: banner[0].titulo,
            description: banner[0].descripcion?banner[0].descripcion:'',
            image: banner[0].imagen?apiImg + banner[0].imagen.url:'https://source.unsplash.com/random',
            imgText: banner[0].titulo,
        });
        }
      
    }, [load, dataBanner ])

    return (
        <React.Fragment>
                <Banner post={mainFeaturedPost} />
            <Container className={classes.cardGrid} maxWidth="xl">
              <Grid container >
                {
                loading?(
                  <h3>loading</h3>
                ):(
                  data.map((card , index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardActionArea onClick={() => handleOpen(card.portafolio)}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={apiImg + card.portada.url}
                            title={card.nombre}
                          />
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                )
                }
                
              
              </Grid>
            </Container>
        </React.Fragment>
    )
}
