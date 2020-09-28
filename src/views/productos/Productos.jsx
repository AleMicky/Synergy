import React, { useEffect, useState } from 'react';
import { productoStyles } from './ProductosStyles';
import { Context } from '../../components/Context';
import { Grid, Divider, Card, CardHeader, CardActionArea, CardMedia } from '@material-ui/core';
import { apiImg, apiURL } from '../../config';
import { useFetch } from '../../hooks/useFetch';
import Categoria from '../../components/Categoria';
import SubCategoria from '../../components/SubCategoria/SubCategoria';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

 const ViewProducto = () => {

  let history = useHistory();
  const classes = productoStyles();
  const [subCategotia, setSubCategotia] = useState([]);
  const [producto, setProducto] = useState([]);
  const [titulo, setTitulo] = useState('')
  const { loading, data } = useFetch(`${apiURL}categorias`);

  useEffect(() => {
    Axios.get(`${apiURL}producto`)
      .then(function (response) {
        setProducto(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  // useEffect(() => {
  //   if (pagina.length > 0){
  //      setSubCategotia([]);
  //   }
  // }, [pagina])
  const handleSubCategoria = (sub) => {
    setSubCategotia(sub);
  }
  const hanlderNav = (id) => {
    history.push(`/home/contenido/${id}`);
  };
  // const handlerPagina = (value) => {
  //   setPagina(value);
  // }
  return (
    <Context.Consumer>
      {
        ({ azul }) => {
           let pagina = azul?'Madera':'Construccion';
          
          return (
              <div className={classes.root}>
                  <Grid container className={classes.contendor}>
                    <Grid item xs={3}>
                      <div className={classes.categoria}>
                        {
                          loading?(
                              <h3 style={{alignSelf:'center'}}>loading</h3>
                          ):(
                            <React.Fragment>
                              <Categoria data = {data.filter(c => c.pagina === pagina)}
                                         handleSubCategoria = {handleSubCategoria}
                                         producto = {producto}
                                         setProducto = {setProducto}
                                         setTitulo= {setTitulo}/>
                              <Divider />
                              <SubCategoria subCategotia = {subCategotia}
                                            setProducto = {setProducto}
                                            pagina = {pagina}/>
                            </React.Fragment>
                          )
                        }
                      </div>
                    </Grid>
                    <Grid item xs={9}>
                    <div className={classes.paper}>
                    <div>
                      <h2 style={{ textAlign: 'left' }}> {titulo}</h2>
                    </div>
                    <Grid container>
                      {producto.filter(por => por.sub_categoria.pagina === pagina).map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                          <Card className={classes.card}>
                            <CardHeader title={card.nombre} />
                            <CardActionArea onClick={() => hanlderNav(card.id)}>
                              <CardMedia
                                className={classes.cardMedia}
                                image={apiImg+card.portada.url}
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
              </div>
          )
        }
      }
    </Context.Consumer>
  );
};
export default ViewProducto