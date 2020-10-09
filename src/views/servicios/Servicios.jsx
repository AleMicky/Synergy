import React, { useState } from 'react'
import { CssBaseline } from '@material-ui/core';
import { useStyles } from './ServiciosStyles';
import { Context } from '../../components/Context';
import Sistemas from './sistemas/Sistemas';
import Arquitectos from './arquitectos/Arquitectos';
import { SpringModal } from '../../components/SpringModal';
import { Swipeable } from '../../components/Swipeable';



export const Servicios = () => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [portafolio, setPortafolio] = useState([]);

  


  const handleOpen = (url) => {
    setOpen(true);
    setPortafolio(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Context.Consumer>
    {
        ({ pagina }) => {
          return(
            <div className={classes.root}>
              <CssBaseline />
              
                {
                  pagina === 'Construccion'?(
                    <Sistemas handleOpen={handleOpen}/>
                  ):(
                    <Arquitectos handleOpen={handleOpen}/>
                  )  
                }
                  <SpringModal open={open} handleClose={handleClose}>
                  <Swipeable titulo = 'Actividad' portafolio = {portafolio}/>
                </SpringModal> 
            </div>
          )
        }
    }
    </Context.Consumer>
  );
}

