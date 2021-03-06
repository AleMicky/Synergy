import React, { useEffect, useState } from 'react'
// import { makeStyles, Grid, Link, Modal, Fade, Backdrop, CssBaseline } from '@material-ui/core';
import { makeStyles, Grid, Link, CssBaseline, Paper } from '@material-ui/core';
// import { Swipeable } from '../../components/Swipeable';
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    contenido: {
        margin: 10,
        //  height: '80vh'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: "url(https://i.imgur.com/HeGEEbu.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: '2px solid #000',
        hight: 800, 
        width: 800, 
        boxShadow: theme.shadows[5],
        padding: theme.spacing(30),
    },
    logotipo: {
        width: 100,
      },

    producto : {
        flexGrow: 1,
        maxWidth: 840,
        maxHeight: 500,
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
    paperProducto: {
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
    th: {
        padding: 10, 
        textAlign:'left',
        // border: 1,
        //border: '1px solid black'
    },
    final: {
        padding: 10, 
        textAlign:'left',
        // border: 1,
       // borderBottom: '1px solid black'
    },
    proyecto: {
        padding: 10, 
        textAlign:'right',
        // border: 1,
        //border: '1px solid black'
    },
}));


export const Contenido = () => {

    const classes = useStyles();
    const { id } = useParams();
   
    const { loading, data } = useFetch(`${apiURL}productos/${id}`);
    const [contenido, setContenido] = useState([]);

    const [muestra, setMuestra] = useState('');
    const [titulo, setTitulo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [medida, setMedida] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if(!loading){
            setContenido(data.sub_productos);
            if(data.sub_productos.length > 0 ){
                if(muestra === ''){
                    setMuestra(data.sub_productos[0].portada === null ? 'https://source.unsplash.com/random' :apiImg+data.sub_productos[0].portada.url);
                    setTitulo(data.sub_productos[0].nombre)
                    setCodigo(data.sub_productos[0].codigo)
                    setMedida(data.sub_productos[0].medidas)
                    setDescripcion(data.sub_productos[0].descripcion)
                }
            }
          
        }
    }, [loading, data, muestra])

    const changeBackground = (e, t, c, m, d) => {
        setMuestra(e);
        setTitulo(t);
        setCodigo(c);
        setMedida(m);
        setDescripcion(d);
    }
    return (
        <div className={classes.root}>
             <CssBaseline />
             <div className={classes.contenido}>
             <Grid container>
                <Grid item xs={12} md={6}> 
                        <div className={classes.producto}>
                         <Grid container>
                            <Grid item xs={3}>
                            <ul className={classes.gridList}>
                                {
                                        contenido.map((value, index) => {
                                            return (
                                                <li  className={classes.seccion}
                                                    key={index}>
                                                            <Paper className={classes.paperProducto}
                                                                  onMouseOver={() => changeBackground(value.portada === null ? 'https://source.unsplash.com/random':apiImg+value.portada.url, 
                                                                                                        value.nombre, 
                                                                                                        value.codigo, 
                                                                                                        value.medidas,
                                                                                                        value.descripcion)}
                                                                    style={{ backgroundImage: `url(${value.portada === null ? 'https://source.unsplash.com/random':apiImg+value.portada.url})`}} />
                                                </li>
                                            );
                                        })
                                }
                            </ul>
                            </Grid>
                            <Grid item xs={9}>
                            <div style={{marginBlockStart: 20}}>
                                <Paper className={classes.muestra} style={{ backgroundImage: `url(${muestra})` }} />
                            </div>
                            </Grid>
                         </Grid>
                         </div>
                </Grid>
                <Grid item xs={12} md={6}> 
                <div style={{margin:15}}>
                                <table style={{width:'100%', borderCollapse: 'collapse'}}>
                                    <tr>
                                        <th className={classes.th} style={{width:'1%'}}>CÓDIGO:</th>
                                        <th className={classes.th}>{codigo}</th>
                                    </tr>
                                    <tr>
                                        <th className={classes.th}>NOMBRE:</th>
                                        <th className={classes.th}>{titulo}</th>
                                    </tr>
                                    <tr>
                                        <th className={classes.th}>MEDIDAS:</th>
                                        <th className={classes.th}>{medida}</th>
                                    </tr>
                                    <tr>
                                        <th className={classes.final}>DESCRIPCIÓN:</th>
                                        <th className={classes.final}>{descripcion}</th>
                                    </tr>
                                
                                </table>
                               <div style={{
                                            borderTop: '1px solid black', 
                                            display: 'flex',
                                            justifyContent :"flex-end"
                                            
                                            }}>
                                        
                                             <h3 style={{marginRight:10, marginTop:20}}>VISITA PROYECTOS:</h3>
                                              <h3 style={{marginRight:10}}><Link href="https://synerx.com.bo/"target="_blank" >
                                                                                <img className={classes.logotipo}
                                                                                        src={require('../../assets/ayn.png')}
                                                                                        alt='logotipo' /> 
                                                                            </Link></h3>  
                                        
                               </div>
                        </div>
                </Grid>
             </Grid>
            </div>
        </div>
    );
};
