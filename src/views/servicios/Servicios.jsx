import React, { useState } from 'react'
import { makeStyles, CssBaseline, Grid, Container, /*Card, CardMedia, CardContent, Typography, CardActionArea,*/ Paper } from '@material-ui/core';
import { Banner } from '../../components/Banner';
import { SpringModal } from '../../components/SpringModal';
import ButtonBases from '../../components/ButtonBases';
import { Context } from '../../components/Context';


const mainFeaturedPost2 = {
  title: 'Servicios Especializados',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae nulla deleniti quae repudiandae, nisi, culpa",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  mainFeatured: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width:600,
    height:600
  },
}));
const cards = [
  {
    titulo: 'Salud',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Akustik',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Viviendas',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'K-Span',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Cubiertas selladas',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Puertas y Ventanas PVC',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  }
];

const cards2 = [
  {
    titulo: 'Mobiliario Dormitorio',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Mobiliario Oficina',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  },
  {
    titulo: 'Mobiliario Comercial',
    imagen: 'https://source.unsplash.com/random',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a sequi ipsum facere necessitatibus rerum nobis'
  }
];

export const Servicios = () => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Context.Consumer>
    {
                ({ azul }) => {

                  const arreglo = azul?cards2:cards;
                  return (
                      <div className={classes.root}>
                        <CssBaseline />
                        <Banner post={mainFeaturedPost2} />
                        <Container className={classes.cardGrid} maxWidth="xl">
                          <Grid container spacing={4}>
                            {arreglo.map((card,index ) => (
                              <Grid item key={index} xs={12} sm={6} md={4}>
                                <ButtonBases title = {card.titulo} 
                                            width ={'80%'} 
                                            url={'https://source.unsplash.com/random'}
                                            handleOpen={handleOpen}/>
                              </Grid>
                            ))}
                          </Grid>
                        
                          
                        </Container>
                        <SpringModal open={open} handleClose={handleClose}>
                          <Paper className={classes.mainFeatured} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
                            {<img style={{ display: 'none' }} src={'https://source.unsplash.com/random'} alt={'img'} />}
                          </Paper>
                        </SpringModal>
                      </div>
                  )
                            }
            }

    </Context.Consumer>
  );
}