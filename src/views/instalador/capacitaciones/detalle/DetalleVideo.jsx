import React from 'react';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Player } from 'video-react';
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


export const DetalleVideo = ({pagina}) => {

  const classes = useStyles();
  const { loading, data } = useFetch(`${apiURL}videos`);
 
 console.log(data);

  return (
    <div>
      <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {
            loading?(
              <h1>loading</h1>
            ):(
              data.filter(v => v.pagina === pagina).map((card, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                  <div className={classes.video}>
                              <Player playsInline
                                      poster={card.portada === null ?'https://source.unsplash.com/random':apiImg+card.portada.url}
                                      src={apiImg+card.tutorial.url}/>
                          </div>
                  </Card>
                </Grid>
              ))


            )
        }
            
         
            </Grid>
          </Container>
    </div>
  );
}