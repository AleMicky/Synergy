import React from 'react';
import { Context } from '../../components/Context';
import ProductoContruccion from './productoContruccion/ProductoContruccion';
import ProductoMadera from './productoMadera/ProductoMadera';

 const ViewProducto = () => {

  return (
    <Context.Consumer>
      {
        ({ pagina }) => {
           
          return (
              <React.Fragment>
                {
                  pagina === 'Construccion'?(
                    <ProductoContruccion />
                  ):(
                    <ProductoMadera/>
                  )
                }
               
              </React.Fragment>
          )
        }
      }
    </Context.Consumer>
  );
};
export default ViewProducto