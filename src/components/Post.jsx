import React from 'react'
import { makeStyles, Paper, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      height:600,
      // marginBottom: theme.spacing(1),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0, 
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(7),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(1),
        paddingRight: 0,
      },
    },
    mainFeaturedPostEnventos: {
      display:  'flex',
      flexDirection: 'column',
      alignItems:'flex-end',
      position: 'relative',
   
    },

    sidebarAboutBox: {
      display:  'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center',
      width: 300,
      margin:10,
      padding: theme.spacing(1),
    }
}));
export const Post = ({ post, azul }) => {
    let history = useHistory();

    const classes = useStyles();
 
    return (
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostEnventos}>
              <Paper elevation={3} className={classes.sidebarAboutBox}>
                <Button variant="contained"
                  color={azul ? 'primary' : 'secondary'}
                  disableElevation
                  onClick={
                    () => history.push('/home/pizarra-digital')
                  }>
                  {azul ? 'Carpinteros de Calidad' : 'Instaladores de Calidad'}
                </Button>
                <p style={{ alignSelf: 'center' }}>
                  {azul ? '¿Requieres los servicios de un técnico especializado en carpintería?' : '¿Requieres los servicios de un técnico especializado en construcción en seco?'}
                </p>
              </Paper>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <p style={{ alignSelf: 'center' }}>
                  {azul ? 'Forma parte del club del carpintero Synergy.' : 'Forma parte del club del instalador Synergy.'}
                </p>
                <Button variant="contained"
                  color={azul ? 'primary' : 'secondary'}
                  disableElevation
                  onClick={
                    () => history.push('/home/formulario-preregistro')
                  }>
                  Formulario de pre registro
                </Button>
              </Paper>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
              <p style={{ alignSelf: 'center' }}>
                  {azul ? 'Realiza el cálculo referencial de materiales aquí Medidas Estándar: 1.24 x 2.75 Revisar catalogo poner medidas por Proveeedor.' : 'Realiza el cálculo referencial de materiales aquí.'}
                </p>
                <Button variant="outlined"
                  color={azul ? 'primary' : 'secondary'}
                  disableElevation
                  onClick={
                    () => history.push('/home/calculadora')
                  }>
                  Calculadora
                </Button>
              </Paper>
            </div>
          </Grid>
        </Grid>
    </Paper>
    )
}


