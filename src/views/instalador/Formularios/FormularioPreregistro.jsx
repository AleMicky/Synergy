import React, { useState } from 'react'
import { makeStyles, CssBaseline, Container, Typography } from '@material-ui/core';
import { Context } from '../../../components/Context';
import { FormB } from './form/FormB';
import { FormCDC } from './form/FormCDC';
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
                                            <FormCDC handleClick= {handleClick} setMensajes ={setMensajes} />
                                        ):(
                                            <FormB handleClick= {handleClick} setMensajes ={setMensajes}/>
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
