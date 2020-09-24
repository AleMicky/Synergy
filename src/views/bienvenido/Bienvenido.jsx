import React from 'react';
import { makeStyles, Grid, CardActionArea } from '@material-ui/core';
import { LinkButton } from '../../components/LinkButton';
import { useHistory } from "react-router-dom";
// import { Context } from '../../components/Context';

export const Bienvenido = () => {


    //const {synergy } = useContext(Context);

    // const {tabAzul, tabAzulOut} = synergy;

    let history = useHistory();

    const classes = useStyles();
  

    const handleClick = (tipo) => {
            // if (tipo === 'rojo'){
            //     tabAzulOut();
            // }else{
            //     tabAzul();
            // }

        history.push("/home");
      }

    return (
        <div className={classes.root}>
            <Grid container direction="row"
                            justify="center"
                            alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.paper}>
                    <img src={require('../../assets/Logo.png')} alt="logotipo"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardActionArea className={classes.paper} onClick={()=>handleClick('rojo')}>
                    <hr  width='40%'  align="center" size='5' color="#FF0000"/>

                        <LinkButton titulo = "MATERIAL DE CONTRUCCIÓN" />
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardActionArea className={classes.paper} onClick={()=>handleClick('Azul')}>
                    <hr  width='40%'  align="center" size='5'color="#007AC0"/>

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
        padding: theme.spacing(10),
        textAlign: 'center',
    },
}));