import React, { useState } from 'react'
import { CssBaseline } from '@material-ui/core';
import { Banner } from '../../components/Banner';
import { useStyles } from './ServiciosStyles';
import { Context } from '../../components/Context';
import Sistemas from './sistemas/Sistemas';
import Arquitectos from './arquitectos/Arquitectos';


const mainFeaturedPost2 = {
  title: 'Servicios Especializados',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae nulla deleniti quae repudiandae, nisi, culpa",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

export const Servicios = () => {

  const classes = useStyles();


  return (
    <Context.Consumer>
    {
        ({ pagina }) => {
          console.log(pagina);
          return(
            <div className={classes.root}>
              <CssBaseline />
                <Banner post={mainFeaturedPost2} />
                {
                  pagina === 'Construccion'?(
                    <Sistemas />
                  ):(
                    <Arquitectos />
                  )  
                }
                  
            </div>
          )
        }
    }
    </Context.Consumer>
  );
}




{/*
<Container  maxWidth="xl">
  <Grid container  direction="row"
justify="center"
alignItems="center" className={classes.cardGrid} >
    {
      loading ? (
        <h2>loading</h2>
      ) : (
          data.map((card, index) => (
            <Grid item key={index} xs={12} sm={3} md={3} xl={3}>

            
              <ButtonBases title={card.nombre}
                width={'80%'}
                url={'https://source.unsplash.com/random'}
                handleOpen={() => handleOpen('https://source.unsplash.com/random')} />
            </Grid>
          ))
        )
    }
  </Grid>
</Container>
<SpringModal open={open} handleClose={handleClose}>
  <Paper className={classes.mainFeatured} style={{ backgroundImage: `url(${apiImg + imagen})` }}>
    {<img style={{ display: 'none' }} src={apiImg + imagen} alt={'img'} />}
  </Paper>
</SpringModal> */}