import React from 'react'
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

