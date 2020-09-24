import React from 'react'
import { makeStyles, CssBaseline, Breadcrumbs, Link, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 5
    },
}));
export const Proyecto = () => {
    let history = useHistory();

    const classes = useStyles();
    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
        history.push('/home');
      }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container maxWidth="xl">
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                   Synergy
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Inicio
                </Link>
                <Typography color="textPrimary">Hipermax</Typography>
            </Breadcrumbs>
            </Container>
        </div>
    )
}
