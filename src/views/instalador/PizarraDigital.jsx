import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Grid, Card, CardMedia, CardContent, Typography, CardActions, CardActionArea, Box, Container, useTheme, AppBar, Tabs, Tab, Checkbox, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Swipeable } from '../../components/Swipeable';
import SwipeableViews from 'react-swipeable-views';
import { pizzarra } from './pizzarra';
import { SpringModal } from '../../components/SpringModal';
import { Context } from '../../components/Context';
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';
import { TabPanel, TabsComponent } from '../../components/TabsComponent/TabsComponent';
import PlaceIcon from '@material-ui/icons/Place';

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
    
    const [value, setValue] = useState(0);  //   {'llevar'}
    const handleChange = (event, newValue) => { //   {'llevar'}
        setValue(newValue);
    };
    const handleChangeIndex = (index) => { //   {'llevar'}
        setValue(index);
    };



    // const [pizzara] = useState(pizzarra);
    // const [checked, setChecked] = useState([0]);
    // const [open, setOpen] = useState(false);
    // const [lista, setLista] = useState([]);

    // const { loading, data } = useFetch(`${apiURL}contruccion-registros`);

    // useEffect(() => {
    //     if (!loading) {
    //         setLista(data.filter(v => v.ciudad === 'Cochabamba' && v.activo === true))
    //     }
    // }, [loading, data])




    // const handleToggle = (value) => () => {
       
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [checked];
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //         setChecked(newChecked);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //         console.log(data);
    //     }
    //     setChecked(newChecked);
    //    const resultado =[]
       
    //     data.filter(v => v.ciudad === 'Cochabamba' && v.activo === true).map(e => {
    //         for (const [key , val] of Object.entries(e)) {
    //             if(key === value && val){
    //                 resultado.push(e);
    //             }
    //         }
    //         return true
    //     })
       
    //     setLista(resultado)
        


    // };
    // const handleChange = (event, newValue) => {

    //     const lugar = newValue === 0 ? 'Cochabamba' : 'Santa_Cruz';

    //     const personas = data.filter(v => v.ciudad === lugar && v.activo === true).map((v) => {
    //         return v
    //     });
    //     setLista(personas);
    //     setValue(newValue);
    // };

    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <Context.Consumer>
            {
                ({pagina}) => {
                    return(
                    <div className={classes.root}>
                        {/* {'llevar'} */}
                        <TabsComponent titulo={['Santa Cruz','Cochabamba','La Paz','EL Alto','Tarija']} 
                                       value={value}
                                       handleChange={handleChange}
                                       handleChangeIndex={handleChangeIndex}>
                            {
                                [
                                 
                                    {
                                        nombre: 'Santa Cruz',
                                        oficina:[
                                            {
                                             nombre:'Oficina Central: 3er Anillo interno entre Av. Alemania y Av. Mutualista N° 3275',
                                             telefono: '(591-3) 342 0345',
                                             fax: ''
                                            },
                                            {
                                                nombre:'Suc. Mutualista: 4to anillo entre Av. Mutualista y Av. Paraguá',
                                                telefono: '(591-3) 346 5909',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Banzer: Av. Cristo Redentor (Banzer) km7',
                                                telefono: '(591-3) 365 0345',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Santos Dumont: Av. Santos Dumont entre 4to y 5to Anillo (frente a Villa Olímpica)',
                                                telefono: '(591-3) 356 4144',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Montero: Circunvalacion Este/Calle Luis Gius',
                                                telefono: '(591-3) 922 7875',
                                                fax: ''
                                            }
                                        ]
                                    },
                                    {
                                        nombre: 'Cochabamba',
                                        oficina:[
                                            {
                                                nombre:'Oficina Central: Av. Blanco Galindo Km1 N° 1184 esq. Av. Peru',
                                                telefono: '(591-4) 424 7147',
                                                fax: '(591-4) 411 4792'
                                            },
                                            {
                                                nombre:'Sucursal BG2: Av. Blanco Galindo Km 4 ½ entre Abel Rivas y Av. Segunda, Zona Busch',
                                                telefono: '(591-4) 424 4021',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Sacaba: Av. Villazón Km 2 1/2 acera sud (carretera a Sacaba)',
                                                telefono: '(591-4) 449 6372',
                                                fax: ''
                                           },
                                           {
                                                nombre:'Sucursal Beijing: Av. Beijing N° 115 entre C.23 de Enero y Yuracare',
                                                telefono: '(591-4) 443 2305',
                                                fax: ''
                                          }
                                        ]
                                    },
                                    {
                                        nombre: 'La Paz',
                                        oficina:[
                                            {
                                                nombre:'Suc. Miraflores: Av. Saavedra N° 1513 (Plaza Uyuni)',
                                                telefono: '(591-2) 224 3479',
                                                fax: '(591-2) 211 8976'
                                            },
                                            {
                                                nombre:'Suc. Cota Cota: C.25 N° 23 Cota Cota esq. Av. Ballivian ',
                                                telefono: '(591-2) 277 3600',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Calacoto: Av. Ballivián  N°7881 esq. C/24 Zona Calacoto',
                                                telefono: '(591-2) 214 6229',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Oficina Central: C.21 Calacoto N° 7721 esq. Gabino Villanueva',
                                                telefono: '(591-2) 277 4285',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Suc. Cota Cota: C.348 N° 402 esq. Av. La Merced',
                                                telefono: '(591-2) 277 2496',
                                                fax: ''
                                            }
                                        ]
                                    },
                                    {
                                        nombre: 'EL Alto',
                                        oficina:[
                                            {
                                             nombre:'Suc. Rio Seco: Av. Juan Pablo II N° 100 - Galpón 8 y 9 ',
                                             telefono: '(591-2) 284 5677',
                                             fax: ''
                                            },
                                            {
                                                nombre:'Suc. Villa Avaroa: Av. Ladislao Cabrera N° 100',
                                                telefono: '(591-2) 282 5393',
                                                fax: ''
                                            }
                                        ]
                                    },
                                    {
                                        nombre: 'Tarija',
                                        oficina:[{
                                             nombre:'Oficina Central: Prolongación Ballivián y Av. Circunvalación S/N frente a Cadepia',
                                             telefono: '(591-4) 665 8606',
                                             fax: ''
                                        }]
                                    }


                                ].map((t, i) => {
                                    return(
                                        <TabPanel   key={t}
                                                    value={value}
                                                    index={i}
                                                    dir={theme.direction}>
                                                    {
                                                       t.oficina.map((lugar, index) => {

                                                        return (
                                                            <ListItem key={index}>
                                                            <ListItemText className={classes.listText}
                                                                          primary={lugar.nombre}
                                                                          secondary={`Telf.: ${lugar.telefono}`}/>
                                                              <IconButton aria-label="ubicacion"
                                                                          color={'primary'}
                                                                          onClick={() => alert('url')}>
                                                                    <PlaceIcon />
                                                             </IconButton>
                                                        </ListItem>
                                                        )
                                                       })
                                                    }
                                        </TabPanel>
                                    )
                            })
                            }
                  {/* {'llevar'} */}
                        </TabsComponent>
                        {/* <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor={'primary'}
                                textColor={'primary'}
                                variant="fullWidth">
                                {
                                    pizzarra.map((value, index) => {
                                        return (
                                            <Tab key={index} label={value.lugar} {...a11yProps(index)} />
                                        )
                                    })
                                }
                            </Tabs>
                        </AppBar>
                        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={value}
                                        onChangeIndex={handleChangeIndex}>
                                            <TabPanel key={0}
                                                        value={value}
                                                        index={0}
                                                        dir={theme.direction}>

                                         </TabPanel>
                                            
                        </SwipeableViews> */}
                    </div>
                    )
                }
            }
        </Context.Consumer>
        
    )
}



{/* <Context.Consumer>
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
</Context.Consumer> */}