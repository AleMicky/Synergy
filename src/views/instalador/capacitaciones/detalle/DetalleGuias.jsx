import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, CardHeader, CardActions, Button, Container } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useFetch } from '../../../../hooks/useFetch';
import { apiImg, apiURL } from '../../../../config';
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

export const DetalleGuias = ({pagina}) => {
  
  const classes = useStyles();
  
  const { loading, data } = useFetch(`${apiURL}guias-de-instalacions`);

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
            <CardHeader title={value.nombre}/>
                <CardMedia
                  className={classes.cardMedia}
                  image={apiImg+value.portada.url}
                  title="sads"
                />
              <CardActions>
              <Button href={apiImg+value.pdf.url} target="_blank">
                <GetAppIcon className={classes.playIcon} />
              </Button>
              <Typography component="h6" variant="h6">
                Descarga
              </Typography>
              </CardActions>
            </Card>
          </Grid>

          ))
        )
      }
     
    </Grid>
    </Container>
  );
}

