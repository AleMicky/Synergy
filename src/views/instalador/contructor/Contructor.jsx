import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, useTheme, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './ContructorStyle';
import { filter, map } from 'lodash'
import { useFetch } from '../../../hooks/useFetch';
import { TabPanel, TabsComponent } from '../../../components/TabsComponent/TabsComponent';
import { apiImg, apiURL } from '../../../config';

export default function Contructor() {
    const classes = useStyles();
    const theme = useTheme();

    
    const [value, setValue] = useState(0);
    const [checked, setChecked] = useState([0]);
    const [ciudad, setCiudad] = useState([]);
    const [peronsas, setPeronsas] = useState([]);
    const { loading, data } = useFetch(`${apiURL}contruccion-registros`);
    const [newLista, setNewLista] = useState('');

    useEffect(() => {
        if (!loading) {
            const array = data.map(v => {
                return v.ciudad
            })
            const lugar = array.filter((el, index) => array.indexOf(el) === index)
            setCiudad(lugar);
            const arreglo = [];
            map(lugar, (lugar)=>{
                let objeto = {
                    lugar,
                    personas:  handleData(data.filter(v => v.ciudad === lugar && v.activo === true),newLista)
                };
                arreglo.push(objeto);

            })
            console.log(arreglo);
            setPeronsas(arreglo);
           }
    }, [loading, data, newLista])

    const handleChange = (event, newValue) => { 
        console.log(event);
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleData = (record, evento)  => {
        
       const filtro = [];
       if(evento !== ''){
         filter(record, function(data) {       
            for (const [key , valor] of Object.entries(data)) {
                if(key === evento && valor){
                    filtro.push(data)
                }
            }  
           });
           return filtro;
       }
      return record;
    }
    const handleToggle = (value) => () => {    
        const currentIndex = checked.indexOf(value);
        const newChecked = [checked];
        if (currentIndex === -1) {
            newChecked.push(value);
            setChecked(newChecked);
            setNewLista(value);
        } else {
            newChecked.splice(currentIndex, 1);
            setNewLista('');
        }
        setChecked(newChecked);
    };
    
    return (
        <div className={classes.root}>
                           
        <TabsComponent titulo={ciudad}
            value={value}
            handleChange={handleChange}
            handleChangeIndex={handleChangeIndex}
            color={'secondary'}>
            {
                peronsas.map((t, i) => {
                    return (
                        <TabPanel key={t.lugar}
                            value={value}
                            index={i}
                            dir={theme.direction}>
                            {
                                <Grid container className={classes.contendor}>
                                    <Grid item xs={12} md={3}>
                                        <List className={classes.root}>
                                            {
                                                opciones.map((value, index) => {
                                                    const labelId = `checkbox-list-label-${value.nombre}`;
                                                    return (
                                                        <ListItem key={index}
                                                            role={undefined}
                                                            dense
                                                            button
                                                            onClick={handleToggle(value.value)}>
                                                            <ListItemText id={labelId} primary={value.nombre} />
                                                            <ListItemIcon>
                                                                <Checkbox
                                                                    edge="start"
                                                                    checked={checked.indexOf(value.value) !== -1}
                                                                    tabIndex={-1}
                                                                    disableRipple
                                                                    color={'secondary'}
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                />
                                                            </ListItemIcon>
                                                        </ListItem>
                                                    );
                                                })}
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Grid container spacing={4}>
                                            {
                                                map(t.personas, (p, index) => (
                                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                                        <Card className={classes.card}>
                                                            <CardActionArea onClick={() => console.log(1)}>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={ p.foto === null ?'https://source.unsplash.com/random':apiImg + p.foto.url}
                                                                    title="Contemplative Reptile"
                                                                />
                                                            </CardActionArea>
                                                            <CardContent className={classes.cardContent}>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    {`${p.nombres} ${p.apellidos}`}
                                                                </Typography>
                                                                <Typography>
                                                                    <b>Celular:</b> {p.celular}

                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions className={classes.acciones}>
                                                                <Rating name="simple-controlled"
                                                                    value={p.calificacion}
                                                                    disabled />
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Grid>

                                </Grid>

                            }
                        </TabPanel>
                    )
                })
            }
        </TabsComponent>
    </div>
    )
}


const opciones = [
    {
        nombre: 'Tabiqueria',
        value: 'tabiqueria'
    },
    {
        nombre: 'Cielo Falso',
        value: 'cieloFalso'
    },
    {
        nombre: 'Cerchas Metálicas',
        value: 'cherchasMetalicas'
    },
    {
        nombre: 'Alucobest',
        value: 'alucobest'
    },
    {
        nombre: 'Policarbonatos',
        value: 'policarbonatos'
    },
    {
        nombre: 'Puertas Precolgadas',
        value: 'puertasPrecolgadas'
    },
    {
        nombre: 'Pintura',
        value: 'pintura'
    },
    {
        nombre: 'TegaHome',
        value: 'tegaHome'
    },
    // {
    //     nombre: 'Aislantes Térmicos',
    //     value: 'aislantes_termicos'
    // },
    {
        nombre: 'Cielo Acústico',
        value: 'tegaHome'
    },
    {
        nombre: 'Impermeabilizantes',
        value: 'impermeabilizantes'
    },
    {
        nombre: 'Piso Vinilico',
        value: 'pisoVinilico'
    },
    {
        nombre: 'Pisos Flotantes',
        value: 'pisosFlotantes'
    },
    {
        nombre: 'Muros',
        value: 'muros'
    }
];