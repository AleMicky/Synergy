import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { apiImg, apiURL } from '../../../../config';
import { useFetch } from '../../../../hooks/useFetch';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));


export const DetalleCapacitacion = ({pagina}) => {

  const classes = useStyles();

  const { loading, data } = useFetch(`${apiURL}capacitacions`);

  return (
    <React.Fragment>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="xl">
         
          <Grid container spacing={4}>
            {
            loading?(
              <h2>loading</h2>
            ):(
              data.filter(c => c.pagina === pagina).map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={apiImg+card.portada.url}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {card.titulo}
                      </Typography>
                      <Typography>
                      {`Fecha Inicio: ${card.fecha}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )
            
           }
            </Grid>
          </Container>
    </React.Fragment>
  );
}