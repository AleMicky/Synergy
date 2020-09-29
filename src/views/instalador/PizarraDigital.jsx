import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Grid, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Box, Container, useTheme, AppBar, Tabs, Tab, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Swipeable } from '../../components/Swipeable';
import SwipeableViews from 'react-swipeable-views';
import { pizzarra } from './pizzarra';
import { SpringModal } from '../../components/SpringModal';
import { Context } from '../../components/Context';
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: 'column'
    },
    titulo: {
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
    },
    contendor: {
        display: 'flex',
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
    media: {
        paddingTop: 300,
    },
    acciones: {
        display: 'flex',
        justifyContent: 'center',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Container maxWidth="xl">
                        {children}
                    </Container>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const opciones = [
    {
        nombre: 'Tabiqueria',
        value: 'tabiqueria'
    },
    {
        nombre: 'Cielo Falso',
        value: 'cielo_falso'
    },
    {
        nombre: 'Cerchas Metálicas',
        value: 'cerchas_metálicas'
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
        value: 'puertas_precolgadas'
    },
    {
        nombre: 'Pintura',
        value: 'pintura'
    },
    {
        nombre: 'TegaHome',
        value: 'tega_home'
    },
    {
        nombre: 'Aislantes Térmicos',
        value: 'aislantes_termicos'
    },
    {
        nombre: 'Cielo Acústico',
        value: 'cielo_acustico'
    },
    {
        nombre: 'Impermeabilizantes',
        value: 'impermeabilizantes'
    },
    {
        nombre: 'Piso Vinilico',
        value: 'piso_vinilico'
    },
    {
        nombre: 'Pisos Flotantes',
        value: 'pisos_flotantes'
    },
    {
        nombre: 'Muros',
        value: 'muros'
    }];
const opciones2 = [
    {
        nombre: 'Melamina'
    },
    {
        nombre: 'Formica'
    },
    {
        nombre: 'Multilaminado'
    },
    {
        nombre: 'MDF Trupan'
    },
    {
        nombre: 'Tablero OSB'
    },
    {
        nombre: 'Accesorio Madera'
    },
    {
        nombre: 'Aglomerado'
    },
    {
        nombre: 'Hardboard Liso'
    },
    {
        nombre: 'Herrajes'
    },
    {
        nombre: 'Tablero Ranurado'
    },
    {
        nombre: 'Venestas'
    },
    {
        nombre: 'Tablas Tableros Pino'
    },
    {
        nombre: 'Vinilico'
    },
    {
        nombre: 'Flotantes'
    },
    {
        nombre: 'Muros'
    }
];

export const PizarraDigital = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [pizzara] = useState(pizzarra);
    const [checked, setChecked] = useState([0]);
    const [open, setOpen] = useState(false);
    const [lista, setLista] = useState([]);

    const { loading, data } = useFetch(`${apiURL}contruccion-registros`);

    useEffect(() => {
        if (!loading) {
            setLista(data.filter(v => v.ciudad === 'Cochabamba' && v.activo === true))
        }
    }, [loading, data])




    const handleToggle = (value) => () => {
       
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
            setChecked(newChecked);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        const resultado = [];
        
        checked.map(va => {
            if (va !== 0){
                lista.map(e => {
                    for (const [key , val] of Object.entries(e)) {
                        if(key === va && val){
                            
                            resultado.push(e);
                        }
                    }
                })
            }else{
                lista.map(e => {
                    for (const [key , val] of Object.entries(e)) {
                        if(key === value && val){
                            resultado.push(e);
                        }
                    }
                })
            }
        })
       console.log('--->',resultado);
      if(resultado.length > 0){
          setLista(resultado)
      }
        


    };
    const handleChange = (event, newValue) => {

        const lugar = newValue === 0 ? 'Cochabamba' : 'Santa_Cruz';

        const personas = data.filter(v => v.ciudad === lugar && v.activo === true).map((v) => {
            return v
        });
        // console.log(personas);
        setLista(personas);
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Context.Consumer>
            {
                ({ azul }) => {

                    const arreglo = azul ? opciones2 : opciones;
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor={azul ? 'primary' : 'secondary'}
                                    textColor={azul ? 'primary' : 'secondary'}
                                    variant="fullWidth">
                                    {
                                        pizzara.map((value, index) => {
                                            return (
                                                <Tab key={index} label={value.lugar} {...a11yProps(index)} />
                                            )
                                        })
                                    }
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}>
                                {
                                    pizzara.map((record, index) => {
                                        return (
                                            <TabPanel key={record.lugar}
                                                value={value}
                                                index={index}
                                                dir={theme.direction}>
                                                <Grid container className={classes.contendor}>
                                                    <Grid item xs={3}>
                                                        <List className={classes.root}>
                                                            {
                                                                arreglo.map((value, index) => {
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
                                                                                    color={azul ? 'primary' : 'secondary'}
                                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                                />
                                                                            </ListItemIcon>
                                                                        </ListItem>
                                                                    );
                                                                })}
                                                        </List>
                                                    </Grid>
                                                    <Grid item xs={9} >
                                                        <div className={classes.paper}>
                                                            <Grid container spacing={2}>
                                                                {
                                                                    lista.map((p, l) => {
                                                                        //  console.log(p);
                                                                        return (

                                                                            <Grid item key={l} xs={12} sm={6} md={4}>
                                                                                <Card className={classes.card}>
                                                                                    <CardActionArea onClick={handleOpen}>
                                                                                        <CardMedia
                                                                                            className={classes.media}
                                                                                            image={apiImg + p.foto.url}
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
                                                                        )
                                                                    })
                                                                }

                                                            </Grid>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </TabPanel>
                                        )
                                    })
                                }
                            </SwipeableViews>
                            <SpringModal open={open} handleClose={handleClose}>
                                <Swipeable />
                            </SpringModal>
                        </div>
                    );
                }
            }
        </Context.Consumer>
    )
}
