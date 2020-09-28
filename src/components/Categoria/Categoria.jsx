import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Search } from '../../components/Search';
import { apiURL } from '../../config';
import Axios from 'axios';
export default function Categoria({ data, handleSubCategoria, producto, setProducto, setTitulo }) {

   

   const [buscar, setBuscar] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);



    const handleListItemClick = (event, index, sub, nombre) => {
            setSelectedIndex(index);
            handleSubCategoria(sub);
            setTitulo(nombre);
    };

    const handleBuscar = () => {
        setProducto([]);
        const resultado = producto.filter(name => name.nombre.includes(buscar)).map(resul => {
          return resul
        });
        setProducto(resultado);
      }

    const handlefiltro = (inputValue) => {
        setBuscar(inputValue.toUpperCase());
        if (inputValue.trim().length > 1) {
            const resultado = producto.filter(name => name.nombre.includes(inputValue.toUpperCase())).map(resul => {
            return resul
            });
            setProducto(resultado);
        } else {
            Axios.get(`${apiURL}producto`)
                .then(function (response) {
                    setProducto(response.data);
                })
                .catch(function (error) {
                    console.log(error);
            });
         }
    }
    const handletitulo = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
            <List component="nav" aria-label="categoria">
                <ListItem>
                    <Search buscar={buscar}
                            handleBuscar={handleBuscar}
                            handlefill={handlefiltro} />
                </ListItem>
                {
                    data.map((record, index) => {
                                return (
                                    <ListItem button
                                              key={index}
                                              selected={selectedIndex === index}
                                              onClick={(event) => handleListItemClick(event, index, record.sub_categorias, record.nombre)}>
                                        <ListItemText primary={
                                            <Typography type="body1"
                                                    color="textPrimary">
                                                <b>{handletitulo(record.nombre)}</b>
                                            </Typography>}
                                        />
                                    </ListItem>
                                )
                    })
                }
            </List>
           
    )
}
