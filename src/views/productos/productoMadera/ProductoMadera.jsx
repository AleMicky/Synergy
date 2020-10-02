import React, { useEffect, useState } from 'react';
import { productoStyles } from '../ProductosStyles';
import { Card, CardActionArea, CardHeader, CardMedia, Checkbox, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { useFetch } from '../../../hooks/useFetch';
import { apiImg, apiURL } from '../../../config';
import { Search } from '../../../components/Search';
import { useHistory } from 'react-router-dom';


export default function ProductoMadera() {
    
    let history = useHistory();

    const classes = productoStyles();
    const { loading, data } = useFetch(`${apiURL}categorias`);
    const { loading:loadingProducto, data:dataProducto } = useFetch(`${apiURL}producto`);

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const [checked, setChecked] = useState([]);
    const [subCategoria, setSubCategoria] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [titulo, setTitulo] = useState('Productos');
    const [subID, setSubID] = useState('');
    const [Producto, setProducto] = useState([]);

    useEffect(() => {
       if(!loading){
           setCategoria(data.filter(c => c.pagina === 'Madera'))
       }
    }, [loading, data]);

    useEffect(() => {
      if(!loadingProducto){
        setProducto(handleProducto(dataProducto.filter(p => p.sub_categoria.pagina === 'Madera'), buscar,subID ));
      }
    }, [loadingProducto, dataProducto, buscar, subID]);


    const handleProducto = (record, evento, subID) => {
        
        if (evento.trim().length > 1) {
           return record.filter(name => name.nombre.includes(evento.toUpperCase()));
        }
        if(subID !== ''){
            return record.filter(name => name.sub_categoria.sub_categoria_id === subID);

        }

        return record
    }

    const handleListItemClick = (event, index, rec) => {
        console.log(event);
        setSelectedIndex(index);
        setSubCategoria(rec.sub_categorias);
        setTitulo(rec.nombre);
    };
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
        setSubID(id);  
    };
    const handlefiltro = (inputValue) => {
        setBuscar(inputValue);
    }
    const hanlderNavegacion = (id) => {
        history.push(`/home/contenido/${id}`);
     };
    return (
        <div className={classes.root}>
            <Grid container className={classes.contendor}>
                <Grid item xs={12} md={3}>
                <div className= {classes.categoria}>
                    <List component="nav" aria-label="categoria">
                    <ListItem>
                        <Search buscar={buscar}
                                handlefill={handlefiltro} />
                    </ListItem>
                    {
                       categoria.map((record, index) => {
                        return (
                            <ListItem button
                                    key={index}
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index, record)}>
                                <ListItemText primary={
                                    <Typography type="body1"
                                                color="textPrimary">
                                        <b>{record.nombre}</b>
                                    </Typography>}
                                />
                            </ListItem>
                        )
                        })
                     }
                    </List>
                    <Divider />
                    <List style={{backgroundColor: '#f3f4f5'}} aria-label="sub Categoria">
                    {subCategoria.map((value, index) => {
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
                </div>
                </Grid>
                <Grid item xs={12} md={9}>
                <div className={classes.paper}>
                <div>
                      <h2 style={{ textAlign: 'left' }}> {titulo.toUpperCase()}</h2>
                    </div>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center">
                    
                    {Producto.map((card, index) => {

                        return (
                        <Grid  item key={index} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                            <CardHeader title={card.nombre} />
                                <CardActionArea onClick={() => hanlderNavegacion(card.id)}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image= {card.portada === null ? 'https://source.unsplash.com/random' : apiImg+card.portada.url} 
                                    title="Image title"
                                />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        )
                    })}
                </Grid>
                </div>
                </Grid>
            </Grid>
        </div>
    )
}
