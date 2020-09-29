import React, { useState } from 'react'
// import { makeStyles, Grid, Link, Modal, Fade, Backdrop, CssBaseline } from '@material-ui/core';
import { makeStyles, Grid, Link, CssBaseline } from '@material-ui/core';
import { ImageGallerry } from '../../components/ImageGallerry';
// import { Swipeable } from '../../components/Swipeable';
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';

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
}));


export const Contenido = () => {

    const classes = useStyles();
    let { id } = useParams();
   
    const { loading, data } = useFetch(`https://banck-end.herokuapp.com/productos/${id}`);
    
    const [titulo, setTitulo] = useState(loading?'':data.sub_productos[0].nombre)
    const [codigo, setCodigo] = useState(loading?'':data.sub_productos[0].codigo)
    const [medida, setMedida] = useState(loading?'':data.sub_productos[0].medidas)
    const [descripcion, setDescripcion] = useState(loading?'':data.sub_productos[0].descripcion)

    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.contenido}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {
                            loading?(
                                <h1>loading</h1>
                            ):( <ImageGallerry  
                                sub_productos={data.sub_productos}
                                setTitulo={setTitulo} 
                                setCodigo={setCodigo}
                                setMedida={setMedida}
                                setDescripcion={setDescripcion}/>)
                        }
                       
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div style={{margin:15}}>
                            <h3>Codigo: {codigo}</h3>
                            <h3>Nombre: {titulo}</h3>
                            <h3>Medidas: {medida}</h3>
                            <h3><b>Descripcion:</b>{descripcion}</h3>
                            <h3>Proyectos en lo que se utilizo estos materiales:</h3>
                            <h3><Link href="https://synerx.com.bo/"
                                                                                            target="_blank"
                                                                                            >
                                                                                <img className={classes.logotipo}
                                                                                        src={require('../../assets/ayn.png')}
                                                                                        alt='logotipo' /> 
                                                                            </Link></h3>                                                
                            {/* <Link href="#" onClick={handleOpen}>
                                Lorem, ipsum dolor sit amet consectetur
                                
                           </Link>
                           
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                  
                                    <Swipeable />           
                                </Fade>
                            </Modal> */}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
