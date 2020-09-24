import { Container, CssBaseline, Grid, Link } from '@material-ui/core';
import React from 'react'
import { RedSocial } from '../../utils/DatosGenerales';
import Social from '../Social';
import { useStyles } from './FooterStyle';
// import { Link } from "react-router-dom";

export default function Footer({sections}) {

    const classes = useStyles();


    return (
        <div className={classes.footer}>
            <CssBaseline />
            <Grid container >
                <Grid item xs={12} sm={3}>
                    <Container maxWidth="xl">
                        <ul>
                            {
                                sections.map((value, index) => {
                                    return (
                                        <li key={index}
                                            className={classes.seccion}>
                                            {/* <Link to={value.url}>{value.title}</Link> */}

                                            <Link
                                                href={value.url}
                                                className={classes.text}>
                                                {value.title}
                                            </Link> 
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </Container>
                </Grid>
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={3} >
                    <Container maxWidth="xl" >
                        <div className={classes.asistencia}>
                            <Link href="#"
                                className={classes.text}>
                                {'Asistencia Tecnica '}
                            </Link>
                        </div>
                        <div className={classes.asistencia}>
                            <img className={classes.logotipo}
                                src={require('../../assets/Logo.png')}
                                alt='logotipo' />
                        </div>
                        <Social RedSocial={RedSocial} />
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}
