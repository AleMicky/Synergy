import React, { useContext } from 'react';
import { makeStyles, Grid, CardActionArea } from '@material-ui/core';
import { LinkButton } from '../../components/LinkButton';
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
                    <CardActionArea className={classes.paper} onClick={()=> handleContruccion()}>
                    <hr  width='50%'  align="center" size='5' color="#FF0000"/>

                        <LinkButton titulo = "MATERIAL DE CONTRUCCIÓN" />
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardActionArea className={classes.paper} onClick={()=> handleMadera()}>
                    <hr  width='50%'  align="center" size='5'color="#007AC0"/>

                        <LinkButton titulo = "DIVISIÓN TABLEROS DE MADERA" />
                    </CardActionArea>
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
    }
}));