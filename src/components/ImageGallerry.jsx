import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 840,
        maxHeight: 500,
       // border: '1px solid #060606'
    },
    paper: {
        position: 'relative',
        padding: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        cursor: 'pointer'    
    },
    muestra: {
        position: 'relative',
        padding: theme.spacing(22),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        color: theme.palette.text.secondary,
    },
    seccion: {
        listStyleType: 'none',
        margin: 10,
    },
    gridList: {
        overflow: 'auto',
        height: 355,
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },
}));
export const ImageGallerry = ({sub_productos, setTitulo, setCodigo, setMedida, setDescripcion}) => {

    const classes = useStyles();
    
    const [muestra, setMuestra] = useState(`https://banck-end.herokuapp.com${sub_productos[0].portada.url}`);

     useEffect(() => {
        halndeIncio();
     }, [])


     const halndeIncio = () => {
        // setTitulo(sub_productos[0].nombre);
        // setCodigo(sub_productos[0].codigo);
        // setMedida(sub_productos[0].medidas);
        // setDescripcion(sub_productos[0].descripcion);
     }
    const changeBackground = (e, t, c, m, d) => {
        setMuestra(e);
        setTitulo(t);
        setCodigo(c);
        setMedida(m);
        setDescripcion(d);
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <ul className={classes.gridList}>
                        {
                                sub_productos.map((value, index) => {
                                    return (
                                        <li  className={classes.seccion}
                                             key={index}>
                                                    <Paper className={classes.paper}
                                                            onMouseOver={() => changeBackground(`https://banck-end.herokuapp.com${value.portada.url}`, 
                                                                                                 value.nombre, 
                                                                                                 value.codigo, 
                                                                                                 value.medidas,
                                                                                                 value.descripcion)}
                                                            style={{ backgroundImage: `url(https://banck-end.herokuapp.com${value.portada.url})`}} />
                                        </li>
                                    );
                                })
                        }
                    </ul>
                </Grid>
                <Grid item xs={9} >
                    <div style={{marginBlockStart: 20}}>
                        <Paper className={classes.muestra} style={{ backgroundImage: `url(${muestra})` }} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

