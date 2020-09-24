import React from 'react';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Player } from 'video-react';


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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,

  },
  paper: {
    padding: theme.spacing(50),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  video: {
    maxHeight: 600,
    maxWidth: 600,
    margin: 10
}
}));

const cards = [
    {
        nombre:'Instalacion Techos',
        url:'',
        poster: ''
    },
    {
        nombre:'Instalacion de Gas',
        url:''
    },
    {
        nombre:'Instalacion de Cortinas',
        url:''
    },
    {
        nombre:'Taller de Madera',
        url:''
    },
    {
        nombre:'Instalacion Parquek',
        url:''
    },
    {
        nombre:'Instalacion Parquek',
        url:''
    }

];

export const DetalleVideo = () => {

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
                <div className={classes.video}>
                            <Player playsInline
                                    poster="https://source.unsplash.com/random"
                                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        </div>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Container>
    </div>
  );
}