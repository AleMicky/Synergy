import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useFetch } from '../../../../hooks/useFetch';
import { apiImg, apiURL } from '../../../../config';
const useStyles = makeStyles((theme) => ({
  card: {
        margin: 15
    },
    cardMedia: {
        width: '100%',
        height: '40vh',
    },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

}));

export const DetalleGuias = ({pagina}) => {
  
  const classes = useStyles();
  
  const { loading, data } = useFetch(`${apiURL}guias-de-instalacions`);



  const handleDescargar = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');   
  }


  return (
    <Container className={classes.cardGrid} maxWidth="xl">
    
    <Grid container>
      {
        loading?(
          <h1>loading</h1>
        ):(
          data.filter(f =>f.pagina === pagina).map((value, index) => (

            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea onClick={(e) => handleDescargar(e, apiImg + value.pdf.url)}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={apiImg + value.portada.url}
                    title={value.nombre}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )
      }
     
    </Grid>
    </Container>
  );
}

