import React from 'react'
import { Backdrop, CircularProgress, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { map } from "lodash";
import { Context } from '../../components/Context';
import Carosel from '../../components/Carosel/Carosel';
import Proyecto from '../../components/Proyecto/Proyecto';
import Innovacion from '../../components/Innovacion/Innovacion';
import { innovamoRojo, noImg, proyectoRojo } from '../../utils/DatosHome';
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
                          <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center">
                            {
                              map(proyectoRojo, (proyecto, index) => (
                                <Grid item key={index} xs={6} sm={6} md={3} lg={3} xl={3}>
                                  <Proyecto imagen={proyecto.imagen}
                                            handleOpen={() => handleOpen(proyecto.ruta)}
                                            azul={azul} />
                                </Grid>
                              ))
                            }
                          </Grid>
                          <h2 className={classes.titulo}>
                            Innovamos
                          </h2>
                    <Grid container className={ azul?classes.inovacionAzul: classes.inovacion}>
             
                        {
                          map(innovamoRojo, (innovamo, index) => (

                            <Grid item key={index} xs={6} sm={3}>
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
