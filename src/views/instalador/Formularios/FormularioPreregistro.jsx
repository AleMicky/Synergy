import React, { useState } from 'react'
import { makeStyles, CssBaseline, Container, Typography } from '@material-ui/core';
import { Context } from '../../../components/Context';
import { FormB } from './form/FormB';
import { FormCDC } from './form/FormCDC';
import Axios from 'axios';
import SimpleSnackbar from '../../../components/Snackbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const FormularioPreregistro = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [mensajes, setMensajes] = useState('Registro Existoso');
    const host = window.location.host;
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Context.Consumer>
                    {
                        ({ azul }) => {

                                                    
                        const handlerSubmint = (e , v) => {
                            e.preventDefault();
                            Axios.post('https://banck-end.herokuapp.com/preregistro-maderas', {
                            nombres: v.nombres,
                            apellidos: v.apellidos,
                            celular: v.celular, 
                            telefono: v.telefono, 
                            direccion: v.direccion, 
                            ci: v.ci, 
                            nit: v.nit, 
                            correo: v.correo, 
                            personas: v.grupo_trabajo, 
                            antiguedad :v.antiguedad,    
                            tabiqueria : v.tabiqueria,
                            cieloFalso : v.cielo_falso,
                            cherchasMetalicas : v.cerchas_metálicas,
                            alucobest : v.alucobest,
                            policarbonatos : v.policarbonatos,
                            puertasPrecolgadas : v.puertas_precolgadas,
                            pintura : v.pintura,
                            tegaHome : v.tega_home,
                            cieloAcustico : v.cielo_acustico,
                            impermeabilizantes : v.impermeabilizantes,
                            pisoVinilico : v.piso_vinilico,
                            pisosFlotantes : v.pisos_flotantes,
                            muros : v.muros,
                            ciudad: v.ciudad,
                            qr: host+'/qr/'+v.ci,
                            capacitarte: v.capacitarte
                        }).then(response => {
                                handleClick();
                            }).catch(e => {
                                setMensajes(e);
                                handleClick();
                            });
                        }

                      



                            return (
                                <div className={classes.paper}>
                                    {
                                        azul?(
                                            <img style={{ width: 110, height: 110 }} src={require('../../../assets/LogoCDC-RGB-01.png')} alt="logotipo" />
                                        ):(
                                            <img style={{ width: 100, height: 100 }} src={require('../../../assets/LogoB-01.png')} alt="logotipo" />
                                        )
                                    }
                                    <Typography component="h1" variant="h5">
                                        Fomulario de Preregistro
                                    </Typography>
                                    {
                                        azul?(
                                            <FormCDC handlerSubmint= {handlerSubmint}/>
                                        ):(
                                            <FormB handlerSubmint= {handlerSubmint}/>
                                        )
                                    }
                                </div>
                            )
                        }
                    }

                </Context.Consumer>
            </Container>
            <SimpleSnackbar open = {open}
                            handleClose = {handleClose}
                            mensaje ={mensajes}/>
        </div>
    );
}
