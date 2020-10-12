import React, { useContext } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { saveItem } from '../../utils/storage';
import { Context } from '../../components/Context';

export const Bienvenido = () => {

    let history = useHistory();
    const classes = useStyles();

    const { synergy  } = useContext(Context);

    const handleContruccion = () => {
        synergy.tabAzulOut();
        saveItem('pagina','Contruccion');
        history.push("/home");
    }
    const handleMadera = () => {
        synergy.tabAzul();
        saveItem('pagina','Madera');
        history.push("/home");
    }
    return (
        <div className={classes.root}>
            <Grid container direction="row"
                            justify="center"
                            alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.paper}>
                        <img className={classes.logo} src={require('../../assets/Logo.png')} alt="logotipo"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                        <div className={classes.contendor}>
                            <Button className={classes.useButton}
                                    onClick={()=> handleContruccion()}>
                                    MATERIAL DE CONTRUCCIÓN
                            </Button>
                        </div>
                        
                </Grid>
                <Grid item xs={12} sm={6}>
                        <div className={classes.contendor}>
                        <Button className={classes.useButton}
                                onClick={()=> handleMadera()}>
                               DIVISIÓN TABLEROS DE MADERA
                        </Button>
                        </div>
                </Grid>
            </Grid>
        </div>

    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8),
        textAlign: 'center',
    },
    logo: {
        height:100,
        width: 200,
        [theme.breakpoints.up('sm')]: {
            height:200,
            width: 500,
        }
    },
    contendor:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    useButton: {
        height: 60,
        padding: '0 25px',
        fontSize: 14,
        "&:hover": {
          borderBottomWidth: 4,
          backgroundColor: 'transparent',
          borderColor: '#000000',
          borderStyle: 'solid'
        }
      },
}));