import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Grid, useTheme, ListItem, ListItemText, IconButton, Divider } from '@material-ui/core';
import { FormContacto } from '../../components/FormContacto';
import { Context } from '../../components/Context';
import { Banner } from '../../components/Banner';
import { TabPanel, TabsComponent } from '../../components/TabsComponent/TabsComponent';
import PlaceIcon from '@material-ui/icons/Place';
import SimpleSnackbar from '../../components/Snackbar';
import { apiImg, apiURL } from '../../config';
import { useFetch } from '../../hooks/useFetch';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        //marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          fontSize: 35
        },
      }
}));

// const mainFeaturedPost = {
//     title: 'Contacto',
//     description: "",
//     image: 'https://source.unsplash.com/random',
//     imgText: 'main image description',
// };
export const Contacto = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = useState(0);  //   {'llevar'}

    const { loading, data } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost, setMainFeaturedPost] = useState({})

    useEffect(() => {

        if(!loading){
         const banner = data.filter(b => b.interfaz === 'contactos');
         
         setMainFeaturedPost({
            title: banner[0].titulo,
            description: banner[0].descripcion?banner[0].descripcion:'',
            image: banner[0].imagen?apiImg + banner[0].imagen.url:'https://source.unsplash.com/random',
            imgText: banner[0].titulo,
        });
        }
      
    }, [loading, data ])

    const handleChange = (event, newValue) => { //   {'llevar'}
        setValue(newValue);
    };
    const handleChangeIndex = (index) => { //   {'llevar'}
        setValue(index);
    };


    const [open, setOpen] = useState(false);
    const [mensajes, setMensajes] = useState('Registro Existoso');

    const handleClick = () => {
        setOpen(true);
    };

    const handleClickMap = () => {
        //alert('url');
        window.open("https://goo.gl/maps/5UFt2ebiaqPTx3Rf6", "_blank");
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Context.Consumer>
            {
                ({ azul }) => {

                    return (
                        <div className={classes.root}>            
                        <CssBaseline />
                        <div className="animate__animated animate__bounceInUp animate__repeat-4">
                        <Banner post={mainFeaturedPost} />
                        </div>
                      

                            <Grid container>
                                <Grid item xs={12} sm={12}>
                                <TabsComponent titulo={['Santa Cruz','Cochabamba','La Paz','EL Alto','Tarija']} 
                                       value={value}
                                       handleChange={handleChange}
                                       handleChangeIndex={handleChangeIndex}
                                       color={azul?'primary':'secondary'}>
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
                                            // {
                                            //     nombre:'Suc. Mutualista: 4to anillo entre Av. Mutualista y Av. Paraguá',
                                            //     telefono: '(591-3) 346 5909',
                                            //     fax: ''
                                            // },
                                            // {
                                            //     nombre:'Suc. Banzer: Av. Cristo Redentor (Banzer) km7',
                                            //     telefono: '(591-3) 365 0345',
                                            //     fax: ''
                                            // },
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
                                                nombre:'Oficina Central: Av. Villazón Km 2 ½ acera sud (Carretera a Sacaba)',
                                                telefono: '(591-4) 449 6372',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Sucursal BG2: Av. Blanco Galindo Km 4 c entre Abel Rivas y Av. Segunda, Zona Busch',
                                                telefono: '(591-4) 424 4021',
                                                fax: ''
                                            },
                                            {
                                                nombre:'Sucursal BG1: Av. Blanco Galindo Km 1 ½ N° 1188 esq. Av. Peru',
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
                                        <TabPanel   key={i} 
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
                                                                          color={azul?'primary':'secondary'}
                                                                        //   onClick={() => alert('url')}
                                                                          onClick={handleClickMap}
                                                                          >
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
                        </TabsComponent>
                        </Grid>
                        
                        </Grid>
                        <Divider />
                    
                        <h2 className={classes.titulo}>
                                        Formulario de contacto
                                    </h2>
                            <Grid container>

                                
                            <Grid item xs={12} sm={6}>

                                <div className={classes.paper}>
                                
                                    <FormContacto  handleClick = {handleClick} setMensajes = {setMensajes}azul = {azul}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <div className={classes.paper}>
                                    <img style={{height:450,width:450}} src='https://source.unsplash.com/random' alt='contactos'/>
                                </div>
                                </Grid>
                            </Grid>





                        <SimpleSnackbar open = {open}
                            handleClose = {handleClose}
                            mensaje ={mensajes}/>
                    </div>
                    )
                }
            }
               
        </Context.Consumer>

    )
}
