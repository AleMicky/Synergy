import React from 'react'
import { makeStyles, Grid, TextField, FormControlLabel, Checkbox, Button, FormLabel, FormGroup, RadioGroup, Radio, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useForm } from '../../../../hooks/useForm';


const useStyles = makeStyles((theme) => ({
    titulo: {
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        "& .MuiTextField-root": {
            margin: theme.spacing(1)
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },

    textarea: {
        resize: "both",
    },
    radioGroup: {
        margin: theme.spacing(1, 0),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
export const FormCDC = ({handlerSubmint}) => {

    const classes = useStyles();

    const [valorForm, handleInputChange] = useForm({
        fecha: new Date(),
        nombres: '',
        apellidos: '',
        celular: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        ci: '',
        nit: '',
        correo: '',
        grupo_trabajo: '',
        antiguedad: '0',
        melamina: false,
        formica: false,
        multilaminado: false,
        mdf_trupan: false,
        tablero_osb: false,
        accesorio_madera: false,
        aglomerado: false,
        hardboard_liso: false,
        herrajes: false,
        tablero_ranurado: false,
        venestas: false,
        tablas_tableros_pino: false,
        vinilico: false,
        flotantes: false,
        muros: false
    });

    const { 
        nombres,
        apellidos,
        celular,
        telefono,
        direccion,
        ciudad,
        ci,
        nit,
        correo,
        grupo_trabajo,
        antiguedad,
        melamina,
        formica,
        multilaminado,
        mdf_trupan,
        tablero_osb,
        accesorio_madera,
        aglomerado,
        hardboard_liso,
        herrajes,
        tablero_ranurado,
        venestas,
        tablas_tableros_pino,
        vinilico,
        flotantes,
        muros 
    } = valorForm;

    const check = [
        {
            nombre:'Melamina',
            valor:melamina,
            name:'melamina'
        },
        {
            nombre:'Formica',
            valor:formica,
            name:'formica'
        },
        {
            nombre:'Multilaminado',
            valor:multilaminado,
            name:'multilaminado'
        },
        {
            nombre:'MDF Trupan',
            valor:mdf_trupan,
            name:'mdf_trupan'
        },
        {
            nombre:'Tablero OSB',
            valor:tablero_osb,
            name:'tablero_osb'
        },
        {
            nombre:'Accesorio Madera',
            valor:accesorio_madera,
            name:'accesorio_madera'
        },
        {
            nombre:'Aglomerado',
            valor:aglomerado,
            name:'aglomerado'
        },
        {
            nombre:'Hardboard Liso',
            valor:hardboard_liso,
            name:'hardboard_liso'
        },
        {
            nombre:'Herrajes',
            valor:herrajes,
            name:'herrajes'
        },
        {
            nombre:'Tablero Ranurado',
            valor:tablero_ranurado,
            name:'tablero_ranurado'
        },
        {
            nombre:'Venestas',
            valor:venestas,
            name:'venestas'
        },
        {
            nombre:'Tablas Tableros Pino',
            valor:tablas_tableros_pino,
            name:'tablas_tableros_pino'
        },
        {
            nombre:'Vinilico',
            valor:vinilico,
            name:'vinilico'
        },
        {
            nombre:'Flotantes',
            valor:flotantes,
            name:'flotantes'
        },
        {
            nombre:'Muros',
            valor:muros,
            name:'muros'
        }
    ];
    return (
        <form className={classes.form} onSubmit={handlerSubmint}>
        <Grid container spacing={2}>
           
            <Grid item xs={12} sm={6}>
                <TextField
                    color="primary"
                    name="nombres"
                    variant="outlined"
                    type="text"
                    required
                    fullWidth
                    label="Nombres"
                    value={nombres}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    color="primary"
                    name="apellidos"
                    variant="outlined"
                    type="text"
                    required
                    fullWidth
                    label="Apellidos"
                    value={apellidos}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    color="primary"
                    required
                    fullWidth
                    label="Celular"
                    name="celular"
                    value={celular}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    color="primary"
                    fullWidth
                    label="Telefono"
                    name="telefono"
                    value={telefono}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Ciudad</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        color="primary"
                        name="ciudad"
                        value={ciudad}
                        onChange={(e) => handleInputChange(e)}
                        label="Ciudad">
                        <MenuItem value={'cochabamba'}>Cochabamba</MenuItem>
                        <MenuItem value={'santa cruz'}>Santa Cruz</MenuItem>
                    
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    color="primary"
                    name="direccion"
                    variant="outlined"
                    required
                    fullWidth
                    label="Direccion"
                    value={direccion}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    color="primary"
                    required
                    fullWidth
                    label="C.I."
                    name="ci"
                    value={ci}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    variant="outlined"
                    color="primary"
                    required
                    fullWidth
                    label="NIT"
                    name="nit"
                    value={nit}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    color="primary"
                    required
                    fullWidth
                    label="Correo Electronico"
                    name="correo"
                    value={correo}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    color="primary"
                    required
                    fullWidth
                    label="Cantidad de Personas Grupo de Trabajo"
                    name="grupo_trabajo"
                    value={grupo_trabajo}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>
            <Grid item xs={12}>
                <FormLabel className={classes.radioGroup} component="legend">
                    Antiguedad como Cliente
            </FormLabel>
                <RadioGroup
                    aria-label="direction"
                    name="antiguedad"
                    value={antiguedad}
                    onChange={(e) => handleInputChange(e)}
                    row>
                    <FormControlLabel value="0 Mes" control={<Radio color='primary' />} label="0 Mes" />
                    <FormControlLabel value="2 Meses" control={<Radio color='primary' />} label="2 Meses" />
                    <FormControlLabel value="6 Meses" control={<Radio color='primary' />} label="6 Meses" />
                    <FormControlLabel value="+1 Año" control={<Radio color='primary' />} label="+1 Año" />
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="legend">
                    Experiencia en Sistema de Contrucciones
                </FormLabel>
                <FormGroup aria-label="position" row>
                {
                    check.map((value, index)=> (
                        
                        <FormControlLabel key={index}
                                          control={<Checkbox color="primary"
                                          checked={value.valor}
                                          onChange={(e) => handleInputChange(e)}
                                          name={value.name}/>}
                                          label={value.nombre}/>
                           )
                    
                    )
                }
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <TextField rows={5}
                    color="primary"
                    label="Que te gustaria Capacitarte"
                    placeholder="Que te gustaria Capacitarte"
                    fullWidth
                    multiline
                    variant="outlined"
                    name="capacitarte"
                    inputProps={{ className: classes.textarea }}
                />
            </Grid>
           
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Enviar
            </Button>
    </form>
    )
}
