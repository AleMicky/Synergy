import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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

const cards = [
    {
        nombre:'Instalacion Techos',
        fecha:'2/9/2020',
    },
    {
        nombre:'Instalacion de Gas',
        fecha:'12/9/2020',
    },
    {
        nombre:'Instalacion de Cortinas',
        fecha:'3/10/2020',
    },
    {
        nombre:'Taller de Madera',
        fecha:'10/10/2020',
    },
    {
        nombre:'Instalacion Parquek',
        fecha:'11/10/2020',
    }


];

export const DetalleCapacitacion = () => {

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.nombre}
                    </Typography>
                    <Typography>
                    {`Fecha Inicio: ${card.fecha}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Container>
    </div>
  );
}