import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, Typography, IconButton, CardActions, TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
import { Banner } from '../../components/Banner';
import { OperacionCalular } from '../../utils/Operacione';
import { Tarjeta } from '../../components/Tarjeta';
import { Context } from '../../components/Context';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Reporte } from '../../utils/Reporte';
import { ReporteMadera } from '../../utils/ReporteMadera';
import { apiImg, apiURL } from '../../config';
import { useFetch } from '../../hooks/useFetch';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    formControl: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        display: 'flex',
    },
    content: {
        flex: '1',
    },
    cover: {
        width: 500,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    table: {
        minWidth: 700,
    },
    tableColor: {
        backgroundColor: '#FF0000',
    },
    tableAzul: {
        backgroundColor: '#0067b2',
    },
    cellColor: {
        color: '#fafafa'
    }
}));


export const Calculadora = () => {

    const classes = useStyles();
    const [resultado, setResultado] = useState([]);
    const [total, setTotal] = useState(0);
    const [tipo, setTipo] = useState('');
    const [m2, setM2] = useState(0);


    const [temanho1, setTemanho1] = useState(0);
    const [temanho2, setTemanho2] = useState(0);

    const [cantidad, setCantidad] = useState(0);

    // const [cantidad, setCantidad] = useState(0);
    const [largo, setLargo] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [tapLargo, setTapLargo] = useState(0);
    const [tapAncho, setTapAncho] = useState(0);
    const [cotizador, setCotizador] = useState([]);
    const [m2Azul, setM2Azul] = useState(0);


    const { loading, data } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost, setMainFeaturedPost] = useState({})
    const [mainFeaturedPost2, setMainFeaturedPost2] = useState({})


    useEffect(() => {

        if (!loading) {
            const banner = data.filter(b => b.interfaz === 'calculadora_contruccion');
            setMainFeaturedPost({
                title: banner[0].titulo?banner[0].titulo:'',
                description: banner[0].descripcion ? banner[0].descripcion : '',
                image: apiImg + banner[0].imagen.url,
                imgText: banner[0].titulo,
            });

            const banner2 = data.filter(b => b.interfaz === 'calculadora_carpinteria');
            setMainFeaturedPost2({
                title: banner2[0].titulo?banner2[0].titulo:'',
                description: banner2[0].descripcion ? banner2[0].descripcion : '',
                image: apiImg + banner2[0].imagen.url,
                imgText: banner2[0].titulo,
            });
        }

    }, [loading, data])



    const handleChange = (event) => {
        setTipo(event.target.value);
        if (resultado.length > 0) {
            setM2(0);
        }
    };
    const handleChangeInput = (event) => {
        setM2(event.target.value)
    }
    const handlerSubmint = e => {
        e.preventDefault();
        const operacion = OperacionCalular(tipo, m2);
        setResultado(operacion.resultado);
        setTotal((Math.round(operacion.tota * 100) / 100).toFixed(2));


    }
    let suma = 0;
    const handlerSubmintAzul = e => {

        e.preventDefault();

        const mtsTapacanto = largo * tapLargo + ancho * tapAncho;
        const mtnTotal = mtsTapacanto * 0.1 + mtsTapacanto;
        const m2Totla = (largo * ancho) * cantidad / 10000;
        const agregar = {
            cantidad,
            largo,
            ancho,
            tapLargo,
            tapAncho,
            mtsTapacanto,
            mtnTotal,
            m2Totla
        };
        setCotizador([...cotizador, agregar]);
        if (m2Azul === 0) {
            setM2Azul((temanho1 * temanho2) / 10000);
        }
        console.log(m2Azul);
        setCantidad(0);
        setLargo(0);
        setAncho(0);
        setTapLargo(0);
        setTapAncho(0);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            
                <Context.Consumer>
                    {
                        ({ azul }) => {
                            return (

                                azul ? (
                                    <React.Fragment>
                                            <Banner post={mainFeaturedPost2} />
                                        <Container className={classes.cardGrid} maxWidth="xl">
                                            <Tarjeta title="Calculadora"
                                                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, explicabo omnis odit sint tempora esse, sed commodi ratione, architecto sapiente soluta asperiores veniam dolor debitis reiciendis perferendis quisquam. Sapiente, hic?"
                                                image="https://source.unsplash.com/random"
                                                imageTitle="Image Text" />
                                            <Container maxWidth="md">
                                                <br />
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12} sm={12}>
                                                        <Typography component="h3"
                                                            variant="h6"
                                                            color="textPrimary"
                                                            gutterBottom>
                                                            Tamaño Tablero Cm
                                                                </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            color="primary"
                                                            name="cantidad"
                                                            value={temanho1}
                                                            onChange={(e) => setTemanho1(e.target.value)}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            variant="outlined"
                                                            color="primary"
                                                            name="cantidad"
                                                            value={temanho2}
                                                            onChange={(e) => setTemanho2(e.target.value)}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <hr />
                                                <form className={classes.form} onSubmit={handlerSubmintAzul}>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} sm={12}>
                                                            <Typography component="h3"
                                                                variant="h6"
                                                                color="textPrimary"
                                                                gutterBottom>
                                                                Tamaño Tablero
                                                                        </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>
                                                            <TextField
                                                                label="Cantidad"
                                                                variant="outlined"
                                                                color="primary"
                                                                name="cantidad"
                                                                value={cantidad}
                                                                onChange={(e) => setCantidad(e.target.value)}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>
                                                            <TextField
                                                                label="Largo Cm(Veta)"
                                                                variant="outlined"
                                                                color="primary"
                                                                name="largo"
                                                                value={largo}
                                                                onChange={(e) => setLargo(e.target.value)}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>
                                                            <TextField
                                                                label="Ancho Cm"
                                                                variant="outlined"
                                                                color="primary"
                                                                name="ancho"
                                                                value={ancho}
                                                                onChange={(e) => setAncho(e.target.value)}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>
                                                            <TextField
                                                                label="Tap. Largo"
                                                                variant="outlined"
                                                                color="primary"
                                                                name="tapLargo"
                                                                value={tapLargo}
                                                                onChange={(e) => setTapLargo(e.target.value)}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2}>
                                                            <TextField
                                                                label="Tap. Ancho"
                                                                variant="outlined"
                                                                color="primary"
                                                                name="tapAncho"
                                                                value={tapAncho}
                                                                onChange={(e) => setTapAncho(e.target.value)}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={2} style={{ display: 'flex', alignItems: 'center' }}>
                                                            <Button type="submit"
                                                                variant="contained"
                                                                color="primary">
                                                                Agregar
                                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                                <Grid container spacing={2}>
                                                    {
                                                        cotizador.length > 0 ? (
                                                            <Grid item xs={12} sm={4} style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Card className={classes.card}>
                                                                    <CardActions>
                                                                        <PDFDownloadLink document={<ReporteMadera resultado={cotizador}
                                                                            m2Azul={m2Azul}
                                                                            tipo={tipo}
                                                                            operacion={(Math.round((suma + suma * 0.08) * 100) / 100).toFixed(2)}
                                                                        />} fileName="calculo.pdf">
                                                                            <IconButton aria-label="pdf"
                                                                                color="primary">
                                                                                <PictureAsPdfIcon />
                                                                            </IconButton>
                                                                        </PDFDownloadLink>
                                                                    </CardActions>
                                                                </Card>
                                                            </Grid>) : null
                                                    }
                                                    <Grid item xs={12} sm={12}>
                                                        <br />
                                                        <TableContainer component={Paper}>
                                                            <Table className={classes.table} size="small" aria-label="simple table">
                                                                <TableHead>
                                                                    <TableRow className={classes.tableAzul}>
                                                                        <TableCell className={classes.cellColor} align="center">Cantidad</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Largo Cm(Veta)</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Ancho Cm</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Tap. Largo</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Tap. Ancho</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Mts Tapacanto</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">Total Mts Tapacanto</TableCell>
                                                                        <TableCell className={classes.cellColor} align="center">M2</TableCell>

                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {cotizador.map((row, index) => {
                                                                        suma = suma + row.m2Totla
                                                                        return (
                                                                            <TableRow key={index}>
                                                                                <TableCell align="center">{row.cantidad}</TableCell>
                                                                                <TableCell align="center">{row.largo}</TableCell>
                                                                                <TableCell align="center">{row.ancho}</TableCell>
                                                                                <TableCell align="center">{row.tapLargo}</TableCell>
                                                                                <TableCell align="center">{row.tapAncho}</TableCell>
                                                                                <TableCell align="center">{row.mtsTapacanto}</TableCell>
                                                                                <TableCell align="center">{row.mtnTotal}</TableCell>
                                                                                <TableCell align="center">{row.m2Totla}</TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    }
                                                                    )
                                                                    }
                                                                    <TableRow className={classes.tableAzul}>
                                                                        <TableCell className={classes.cellColor} rowSpan={1} />
                                                                        <TableCell className={classes.cellColor} colSpan={4}><b>M2</b></TableCell>
                                                                        <TableCell className={classes.cellColor} align="right"><b>{m2Azul}</b></TableCell>
                                                                    </TableRow>
                                                                    <TableRow className={classes.tableAzul}>
                                                                        <TableCell className={classes.cellColor} rowSpan={1} />
                                                                        <TableCell className={classes.cellColor} colSpan={4}><b>PZas M2</b></TableCell>
                                                                        <TableCell className={classes.cellColor} align="right"><b>{

                                                                            (Math.round((suma + suma * 0.08) * 100) / 100).toFixed(2)}</b></TableCell>
                                                                    </TableRow>
                                                                    <TableRow className={classes.tableAzul}>
                                                                        <TableCell className={classes.cellColor} rowSpan={3} />
                                                                        <TableCell className={classes.cellColor} colSpan={4}><b>Cantidad Tablero</b></TableCell>
                                                                        <TableCell className={classes.cellColor} align="right"><b>{(suma + suma * 0.08) > m2Azul ? (suma + suma * 0.08) / m2Azul : 0}</b></TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                        <br />
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </Container>
                                    </React.Fragment>
                                        ) : (
                                        <React.Fragment>
                                            <div className="animate__animated animate__bounceInUp animate__repeat-4">
                                                <Banner post={mainFeaturedPost} />
                                            </div>
                                            <Container className={classes.cardGrid} maxWidth="xl">
                                                <Tarjeta title="Calculadora"
                                                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, explicabo omnis odit sint tempora esse, sed commodi ratione, architecto sapiente soluta asperiores veniam dolor debitis reiciendis perferendis quisquam. Sapiente, hic?"
                                                    image="https://source.unsplash.com/random"
                                                    imageTitle="Image Text" />
                                                <Container maxWidth="md">
                                                    <form className={classes.form} onSubmit={handlerSubmint}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} sm={4}>
                                                                <FormControl className={classes.formControl}>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Tipo de Calculo</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        color="secondary"
                                                                        value={tipo}
                                                                        onChange={handleChange}
                                                                        label="Tipo">
                                                                        <MenuItem value={'colonial'}>Teja Colonial</MenuItem>
                                                                        <MenuItem value={'tegahome'}>Tegahome</MenuItem>
                                                                        <MenuItem value={'duralit'}>Duralit</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="M2"
                                                                    color="secondary"
                                                                    value={m2}
                                                                    onChange={handleChangeInput}
                                                                    name="lastName"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} style={{ display: 'flex', alignItems: 'center' }}>
                                                                <Button type="submit"
                                                                    variant="contained"
                                                                    color="secondary">
                                                                    Calcular
                                                                 </Button>
                                                            </Grid>
                                                            {
                                                                resultado.length > 0 ? (
                                                                    <Grid item xs={12} sm={4} style={{ display: 'flex', alignItems: 'center' }}>
                                                                        <Card className={classes.card}>
                                                                            <CardActions>
                                                                                <PDFDownloadLink document={<Reporte resultado={resultado} total={total} tipo={tipo} m2={new Intl.NumberFormat("de-DE").format(Math.round(total / m2))} />} fileName="calculo.pdf">
                                                                                    <IconButton aria-label="pdf"
                                                                                        color="secondary">
                                                                                        <PictureAsPdfIcon />
                                                                                    </IconButton>
                                                                                </PDFDownloadLink>
                                                                            </CardActions>
                                                                        </Card>
                                                                    </Grid>) : null
                                                            }
                                                        </Grid>
                                                    </form>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={12}>
                                                            <br />
                                                            {
                                                                resultado.length > 0 ? (
                                                                    <TableContainer component={Paper}>

                                                                        <Table className={classes.table} size="small" aria-label="simple table">
                                                                            <TableHead>
                                                                                <TableRow className={classes.tableColor}>
                                                                                    <TableCell className={classes.cellColor}>Item</TableCell>
                                                                                    <TableCell className={classes.cellColor} align="center">Descripcion</TableCell>
                                                                                    <TableCell className={classes.cellColor} align="center">Unidad</TableCell>
                                                                                    <TableCell className={classes.cellColor} align="center">Cantiad</TableCell>
                                                                                    <TableCell className={classes.cellColor} align="center">Precio Venta  Bs.</TableCell>
                                                                                    <TableCell className={classes.cellColor} align="center">Total Bs.</TableCell>

                                                                                </TableRow>
                                                                            </TableHead>
                                                                            <TableBody>
                                                                                {resultado.map((row, index) => (
                                                                                    <TableRow key={row.name}>
                                                                                        <TableCell align="center">
                                                                                            {index + 1}
                                                                                        </TableCell>
                                                                                        <TableCell component="th" scope="row">
                                                                                            {row.descripcion}
                                                                                        </TableCell>
                                                                                        <TableCell align="center">{row.unidad}</TableCell>
                                                                                        <TableCell align="center">{row.cantiad}</TableCell>
                                                                                        <TableCell align="center">{row.precio_venta}</TableCell>
                                                                                        <TableCell align="center">{new Intl.NumberFormat("de-DE").format(row.total)}</TableCell>

                                                                                    </TableRow>
                                                                                ))}
                                                                                <TableRow className={classes.tableColor}>
                                                                                    <TableCell className={classes.cellColor} rowSpan={1} />
                                                                                    <TableCell className={classes.cellColor} colSpan={4}><b>Total</b></TableCell>
                                                                                    <TableCell className={classes.cellColor} align="right"><b>{new Intl.NumberFormat("de-DE").format(total)}</b></TableCell>
                                                                                </TableRow>
                                                                                <TableRow className={classes.tableColor}>
                                                                                    <TableCell rowSpan={3} />
                                                                                    <TableCell className={classes.cellColor} colSpan={4}><b>Total Bolivianos m2</b></TableCell>
                                                                                    <TableCell className={classes.cellColor} align="right"><b>{new Intl.NumberFormat("de-DE").format(Math.round(total / m2))}</b></TableCell>
                                                                                </TableRow>
                                                                            </TableBody>
                                                                        </Table>
                                                                    </TableContainer>
                                                                ) : null
                                                            }
                                                            <br />
                                                        </Grid>
                                                    </Grid>
                                                </Container>
                                            </Container>
                                        </React.Fragment>
                                        )

                            )
                        }
                    }
                </Context.Consumer>
        </div>
    )
}
