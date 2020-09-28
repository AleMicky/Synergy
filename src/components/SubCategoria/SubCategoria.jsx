import React, { useState } from 'react';
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import Axios from 'axios';
import { apiURL } from '../../config';

export default function SubCategoria({subCategotia, setProducto, pagina}) {

    const [checked, setChecked] = useState([]);
    
    const handletitulo = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    const handleToggle = ( value, id ) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [checked];

        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        handleApi(id);
        
    };

    const handleApi = id => {
     Axios.get(`${apiURL}sub-categorias/${id}`)
      .then(function (response) {
        const producto = [];
       const  rest =  response.data.productos.map((value) => {

            let objeto = {
              id : value.id,
              nombre : value.nombre,
              portada : value.portada,
              sub_categoria : {
                pagina: pagina
              } 
            }

            producto.push(objeto);

            return true;
        });
        console.log(rest);
        if(rest){
          setProducto(producto)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return (
        <List>
        {subCategotia.map((value, index) => {
          const labelId = `checkbox-list-label-${value.nombre}`;
          return (
            <ListItem key={index} role={undefined} dense button onClick={handleToggle(index, value.id)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId}
                primary={<Typography variant="subtitle1" color="textPrimary">
                   {handletitulo(value.nombre)}
                  </Typography>}
              />
            </ListItem>
          );
        })}
      </List>
    )
}
