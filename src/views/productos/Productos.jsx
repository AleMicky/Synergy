import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, List, ListItem, ListItemText, Checkbox, Divider, CardActionArea, CardMedia, Card, CardHeader, Typography } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useHistory } from "react-router-dom";
// import data from './Data';
import { Search } from '../../components/Search';
import { useFetch } from '../../hooks/useFetch';
import Axios from 'axios';
import { Context } from '../../components/Context';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  contendor: {
    display: 'flex',
  },
  categoria: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: 5
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: 350,
  },
}));

const product = [
  {
    nombre: 'Martillo',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Piso I',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Piso II',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Piso III',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Color I',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Color II',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Color III',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Madera I',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Madera II',
    imagen: 'https://source.unsplash.com/random'
  },
  {
    nombre: 'Madera III',
    imagen: 'https://source.unsplash.com/random'
  }
]

export const Productos = () => {

  let history = useHistory();
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categoria, setCategoria] = useState([]);
  const [checked, setChecked] = useState([]);
  const [portafolio, setPortafolio] = useState([]);
  const [titulo, subTitulo] = useState('');
  const [buscar, setBuscar] = useState('')

  const { loading, data } = useFetch(`https://banck-end.herokuapp.com/categorias`);

  useEffect(() => {

    Axios.get('https://banck-end.herokuapp.com/productos')
      .then(function (response) {
        console.log(response.data);
        setPortafolio(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
     
      });
  }, [])
  
  const handleListItemClick = (event, index, record, nombre) => {
    setSelectedIndex(index);
    setCategoria(record);
    subTitulo(nombre);
  };

  const handleToggle = (value, id) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);


    Axios.get(`https://banck-end.herokuapp.com/sub-categorias/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.productos);
        setPortafolio(response.data.productos)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });


  };

  const hanlderNav = (id) => {
    history.push(`/home/contenido/${id}`);
  };
  const handleBuscar = () => {
    setPortafolio(product);
    const resultado = portafolio.filter(name => name.nombre.includes(buscar)).map(resul => {
      return resul
    });
    setPortafolio(resultado);
  }
  const handlefill = (inputValue) => {
    setBuscar(inputValue);
    if (inputValue.trim().length > 1) {
      const resultado = portafolio.filter(name => name.nombre.includes(inputValue)).map(resul => {
        return resul
      });
      setPortafolio(resultado);
    } else {
      setPortafolio(product);
    }
  }
  const handletitulo = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return (
    <div className={classes.root}>
      <Context.Consumer>
        {
          ({ azul }) => {

            let badera = azul?'Madera':'Construccion';
            return (
              <Grid container className={classes.contendor}>
                <Grid item xs={3}>
                  <div className={classes.categoria}>
                    <List component="nav" aria-label="categoria">
                      <ListItem>
                        <Search buscar={buscar}
                          handleBuscar={handleBuscar}
                          handlefill={handlefill} />
                      </ListItem>
                      {
                        loading ? (
                          <div>
                            Loading...
                          </div>
                        ) : (
                            data.filter(categoria => categoria.pagina === badera).map((record, index) => {
                              return (
                                <ListItem button
                                  key={index}
                                  selected={selectedIndex === index}
                                  onClick={(event) => handleListItemClick(event, index, record.sub_categorias, record.nombre)}
                                >
                                  <ListItemText
                                    primary={<Typography type="body1"
                                      color="textPrimary"><b>{handletitulo(record.nombre)}</b></Typography>}
                                  />
                                </ListItem>
                              )
                            })
                          )
                      }
                    </List>
                    <Divider />
                    <List>
                      {categoria.map((value, index) => {
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
                              primary={<Typography variant="subtitle1" color="textPrimary">{handletitulo(value.nombre)}</Typography>}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.paper}>
                    <div>
                      <h2 style={{ textAlign: 'left' }}> {titulo}</h2>
                    </div>
                    <Grid container spacing={4}>
                      {portafolio.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                            <CardHeader title={card.nombre} />
                            <CardActionArea onClick={() => hanlderNav(card.id)}>
                              <CardMedia
                                className={classes.cardMedia}
                                image={`https://banck-end.herokuapp.com${card.portada.url}`}
                                title={card.nombre}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      ))}

                    </Grid>
                  </div>
                </Grid>
              </Grid>
            )
          }
        }

      </Context.Consumer>
    </div>
  );
};