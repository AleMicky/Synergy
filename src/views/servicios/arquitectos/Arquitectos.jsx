import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import CardStyle from '../../../components/CardStyle/CardStyle';
import { useFetch } from '../../../hooks/useFetch';
import { apiURL, apiImg } from '../../../config';
import { Banner } from '../../../components/Banner';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      // paddingTop: theme.spacing(8),
      // paddingBottom: theme.spacing(8),
    }
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
            <div className="animate__animated animate__bounceInUp animate__repeat-4">
                <Banner post={mainFeaturedPost} />
            </div>
            <Container className={classes.cardGrid} maxWidth="xl">
              <Grid container >
                {
                loading?(
                  <h3>loading</h3>
                ):(
                  data.map((card , index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <CardStyle nombre = {card.nombre}
                                  url= {apiImg+card.portada.url}
                                  handleClick= {() => handleOpen(card.portafolio)}/>
                    </Grid>
                  ))
                )
                }
                
              
              </Grid>
            </Container>
        </React.Fragment>
    )
}
