import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import { useFetch } from '../../../../hooks/useFetch';
import { apiImg, apiURL } from '../../../../config';
import CardStyle from '../../../../components/CardStyle/CardStyle';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    width:'70%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: 100,
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

}));

export const DetalleFicha = ({pagina}) => {
  
  const classes = useStyles();
  
  const { loading, data } = useFetch(`${apiURL}fichas-tecnicas`);

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

              <CardStyle  key={index}
                          nombre ={value.nombre}
                          url ={apiImg+value.portada.url}
                          handleClick={(e) => handleDescargar(e, apiImg+value.pdf.url)}/>
          </Grid>

          ))
        )
      }
    </Grid>
    </Container>
  );
}

