import React from 'react'
import { Backdrop, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { map } from "lodash";
import { Context } from '../../components/Context';
import Carosel from '../../components/Carosel/Carosel';
import Innovacion from '../../components/Innovacion/Innovacion';
import { innovamoRojo, noImg, proyectoAzul, proyectoRojo, innovamoAzul } from '../../utils/DatosHome';
import { useStyles } from './HomeStyle';
import { apiURL } from '../../config';
import { useFetch } from '../../hooks/useFetch';

export const Home = () => {

  const classes = useStyles();

  let history = useHistory();

  

  const { loading, data } = useFetch(`${apiURL}carosels`);

  const handleOpen = (url) => {
    history.push(`/home/${url}`);
  };

  return (
    <Context.Consumer>
      {
        ({ azul }) => {
          const bandera = azul ? 'Madera' : 'Construccion';
          return (
            <div className={classes.root}>
                <div className="animate__animated animate__flipInX animate__repeat-4">
                  <Carosel record={loading?noImg:data.filter(record => record.pagina === bandera)} />    
                </div>
                  <h2 className={classes.titulo}>{`Soluciones para tus proyectos`}</h2>
                          <Grid container>
                            {
                              map(azul?proyectoAzul:proyectoRojo, (proyecto, index) => (
                                <Grid item key={index} xs={12} sm={6} md={3}>
                                    <Card className={classes.card}>
                                          <CardActionArea onClick={() => handleOpen(proyecto.ruta)}>
                                          <CardMedia
                                              className={classes.cardMedia}
                                              image= {proyecto.imagen} 
                                              title="Image title"
                                          />
                                          </CardActionArea>
                                            <CardContent  CardContent className={azul?classes.cardContentAzul:classes.cardContent}>
                                            <Typography style={{color :'#fafafa'}} gutterBottom variant="h6" component="h2">
                                              {proyecto.titulo.toUpperCase()}
                                            </Typography>
                                          </CardContent>
                                      </Card>
                                </Grid>
                              ))
                            }
                          </Grid>
                          <h2 className={classes.titulo}>
                            Innovamos
                          </h2>
                    <Grid container className={ azul?classes.inovacionAzul: classes.inovacion}>
             
                        {
                          map(azul?innovamoAzul:innovamoRojo, (innovamo, index) => (

                            <Grid item key={index} xs={12} sm={6} md={3}>
                                <Innovacion titulo={innovamo.titulo} 
                                            icon={innovamo.icon}
                                            handleOpen={() => handleOpen(innovamo.ruta)}/>
                            </Grid>
                          ))
                        }
               
                
              </Grid>
            
              <Backdrop className={classes.backdrop} open={loading}>
               <CircularProgress color="secondary" />
            </Backdrop>
            </div>
          )
        }
      }
    </Context.Consumer>

  )
};
