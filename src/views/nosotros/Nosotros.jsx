import React from 'react';
import { makeStyles, CssBaseline, Grid, createMuiTheme, Container, Card, CardContent, Typography } from '@material-ui/core';
import { BennerVideo } from '../../components/BennerVideo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        margin: 15,
        color: theme.palette.text.secondary,
    },
    lista: {
        textAlign: 'justify',
        fontSize: 18,
        color: '#202020',
        lineHeight: 0.1
    },
    card: {
        display: 'flex',
        marginLeft: 5,
        marginRight: 5,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 50,
            marginRight: 50,
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 50,
            marginRight: 50,
        },
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 100,
    },
    video: {
        height:700,
        width: 1000,
        margin: 10
    }

}));
const theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.h6 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

export const Nosotros = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="xl">
                <BennerVideo/>
                <Grid container>
                <Container>
                <Grid item xs={12} sm={12}>
                        <div className="animate__animated animate__bounceInRight animate__repeat-4">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                    <Typography variant="h6"
                                                color="textPrimary" 
                                                gutterBottom>
                                        Nuestra Misión
                                    </Typography>
                                    <Typography variant="subtitle1"
                                                color="textPrimary" 
                                                align="justify"
                                                paragraph>
                                        Proveer a nuestros Clientes con Productos y Servicios de alta Calidad en tiempo y forma para contribuir a su desarrollo y crecimiento, respaldándolos con Servicios Integrales desde el inicio de sus Proyectos hasta la entrega final, protegiendo la integridad y solidez financiera de la Empresa,www.pureintime.net de nuestras fuentes de trabajo y asegurando el cumplimiento de la Calidad requerida mediante un trabajo de mejora continua de la Empresa y de todo su personal.
                                    </Typography>
                                    <hr/>
                                    <Typography variant="h6"
                                                color="textPrimary" 
                                                gutterBottom>
                                        Nuestra Visión
                                    </Typography>
                                    <Typography variant="subtitle1"  
                                                color="textPrimary" 
                                                align="justify"
                                                paragraph>
                                        Mantener el Liderazgo a nivel Nacional y ser el referente en la Fabricación, Comercialización de Materiales para la Construcción y Tableros de Madera; transmitiendo excelencia a través de servicios especializados en el desarrollo y aplicación de productos de alta tecnología para el Constructor y Fabricante.
                                    </Typography>


                                        <hr/>
                                        <Typography  variant="h6"
                                                    color="textPrimary"
                                                    gutterBottom>
                                            Nuestros Valores
                                        </Typography>
                                        <ul>
                                            <li className={classes.lista}>
                                                <Typography variant="subtitle1"
                                                    color="textPrimary"
                                                    align="justify"
                                                    paragraph>
                                                    Actuamos con Integridad, Respeto y Responsabilidad con nuestras familias, colegas, clientes, proveedores, sociedad y medio ambiente.
                                                </Typography>
                                            </li>
                                            <li className={classes.lista}>
                                                <Typography variant="subtitle1"
                                                    color="textPrimary"
                                                    align="justify"
                                                    paragraph>
                                                    Velamos por el bienestar familiar de nuestro personal que son el pilar fundamental de la empresa, aportando a su desarrollo profesional mediante capacitación para asegurar nuestro crecimiento sostenido.
                                                </Typography>
                                            </li>
                                            <li className={classes.lista}>
                                                <Typography variant="subtitle1"
                                                    color="textPrimary"
                                                    align="justify"
                                                    paragraph>
                                                    Aseguramos a nuestros funcionarios y clientes que haremos todos los esfuerzos posibles para superar sus expectativas.
                                                    </Typography>
                                            </li>
                                            <li className={classes.lista}>
                                                <Typography variant="subtitle1"
                                                    color="textPrimary"
                                                    align="justify"
                                                    paragraph>
                                                    El compromiso con el cumplimiento de normas de Calidad, Seguridad, Salud y Medio Ambiente es prioritario y no es negociable.
                                                    </Typography>
                                            </li>
                                            <li className={classes.lista}>
                                                <Typography variant="subtitle1"
                                                    color="textPrimary"
                                                    align="justify"
                                                    paragraph>
                                                    La participación activa y aporte de todos los niveles son considerados y valiosos.
                                                </Typography>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </div>
                            </Card>
                        </div>
                    </Grid>

                </Container>
                   
                </Grid>
            </Container>
        </div>
    )
}
