import React, { useState } from 'react';
import { Context } from '../../components/Context';
import { SpringModal } from '../../components/SpringModal';
import { Swipeable } from '../../components/Swipeable';
import Contructor from './contructor/Contructor';
import Madera from './madera/Madera';

export const PizarraDigital = () => {

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
                    return (
                        <React.Fragment>
                            {
                                pagina === 'Construccion'?(
                                    <Contructor handleOpen = {handleOpen} />
                                ):(
                                   <Madera handleOpen ={handleOpen} />
                                )
                            }
                              <SpringModal open={open} handleClose={handleClose}>
                              <Swipeable titulo = 'Proyecto' portafolio = {portafolio}/>
                                </SpringModal> 
                        </React.Fragment>
                    )
                }
            }
        </Context.Consumer>
    )
}

