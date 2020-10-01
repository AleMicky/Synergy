import React, { useState } from 'react'
import { makeStyles, Grid, TextField, FormControlLabel, Checkbox, Button, FormLabel, FormGroup, RadioGroup, Radio, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Axios from 'axios';
import { apiURL } from '../../../../config';
// import { useForm } from '../../../../hooks/useForm';


const useStyles = makeStyles((theme) => ({
    titulo: {
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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
export const FormB = ({handleClick, setMensajes}) => {

    const classes = useStyles();
    const host = window.location.host;
    const [valorForm, setValorForm] = useState({   fecha: new Date(),
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
                                                   tabiqueria: false,
                                                   cielo_falso: false,
                                                   cerchas_metálicas: false,
                                                   alucobest: false,
                                                   policarbonatos: false,
                                                   puertas_precolgadas: false,
                                                   pintura: false,
                                                   tega_home: false,
                                                   aislantes_termicos: false,
                                                   cielo_acustico: false,
                                                   impermeabilizantes: false,
                                                   piso_vinilico: false,
                                                   pisos_flotantes: false,
                                                   muros: false,
                                                   capacitarte:''
                                                });
    const handleInputChange = ({target}) => {
        setValorForm({
            ...valorForm,
            [target.name]: target.type ==='checkbox'? target.checked : target.value 
        });
    };

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
        tabiqueria,
        cielo_falso,
        cerchas_metálicas,
        alucobest,
        policarbonatos,
        puertas_precolgadas,
        pintura,
        tega_home,
        aislantes_termicos,
        cielo_acustico,
        impermeabilizantes,
        piso_vinilico,
        pisos_flotantes,
        muros,
        capacitarte
        } = valorForm;

    const check = [
        {
            nombre:'Tabiqueria',
            valor:tabiqueria,
            name:'tabiqueria'
        },
        {
            nombre:'Cielo Falso',
            valor:cielo_falso,
            name:'cielo_falso'
        },
        {
            nombre:'Cerchas Metálicas',
            valor:cerchas_metálicas,
            name:'cerchas_metálicas'
        },
        {
            nombre:'Alucobest',
            valor:alucobest,
            name:'alucobest'
        },
        {
            nombre:'Policarbonatos',
            valor: policarbonatos,
            name:'policarbonatos'
        },
        {
            nombre:'Puertas Precolgadas',
            valor:puertas_precolgadas,
            name:'puertas_precolgadas'
        },
        {
            nombre:'Pintura',
            valor:pintura,
            name:'pintura'
        },
        {
            nombre:'TegaHome',
            valor:tega_home,
            name:'tega_home'
        },
        {
            nombre:'Aislantes Térmicos',
            valor:aislantes_termicos,
            name:'aislantes_termicos'
        },
        {
            nombre:'Cielo Acústico',
            valor:cielo_acustico,
            name:'cielo_acustico'
        },
        {
            nombre:'Impermeabilizantes',
            valor:impermeabilizantes,
            name:'impermeabilizantes'
        },
        {
            nombre:'Piso Vinilico',
            valor:piso_vinilico,
            name:'piso_vinilico'
        },
        {
            nombre:'Pisos Flotantes',
            valor:pisos_flotantes,
            name:'pisos_flotantes'
        },
        {
            nombre:'Muros',
            valor:muros,
            name:'muros'
        }
    ];

    const handlerForm = (e) => {

        e.preventDefault();
        Axios.post( `${apiURL}contruccion-registros`, {
            nombres: nombres,
            apellidos: apellidos,
            celular: celular, 
            telefono: telefono, 
            direccion: direccion, 
            ci: ci, 
            nit: nit, 
            correo: correo, 
            grupo_trabajo: grupo_trabajo, 
            antiguedad : antiguedad,    
            tabiqueria : tabiqueria,
            cieloFalso : cielo_falso,
            cherchasMetalicas : cerchas_metálicas,
            alucobest : alucobest,
            policarbonatos : policarbonatos,
            puertasPrecolgadas : puertas_precolgadas,
            pintura : pintura,
            tegaHome : tega_home,
            cieloAcustico : cielo_acustico,
            impermeabilizantes : impermeabilizantes,
            pisoVinilico : piso_vinilico,
            pisosFlotantes : pisos_flotantes,
            muros : muros,
            ciudad: ciudad,
            qr: 'https://'+host+'/qr/'+ci,
            capacitarte: capacitarte

        }).then(response => {
              console.log(response);
              setValorForm({    fecha: new Date(),
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
                                tabiqueria: false,
                                cielo_falso: false,
                                cerchas_metálicas: false,
                                alucobest: false,
                                policarbonatos: false,
                                puertas_precolgadas: false,
                                pintura: false,
                                tega_home: false,
                                aislantes_termicos: false,
                                cielo_acustico: false,
                                impermeabilizantes: false,
                                piso_vinilico: false,
                                pisos_flotantes: false,
                                muros: false,
                                capacitarte:''
                            });
                            handleClick();
        }).catch(e => {
            console.log(e);
            handleClick();
            setMensajes(e)
        });
        
    }
    return (

        <form className={classes.form} onSubmit={handlerForm}>
        <Grid container spacing={2}>
         
            <Grid item xs={12} sm={6}>
                <TextField
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                        color="secondary"
                        name="ciudad"
                        value={ciudad}
                        onChange={(e) => handleInputChange(e)}
                        label="Ciudad">
                        <MenuItem value={'Cochabamba'}>Cochabamba</MenuItem>
                        <MenuItem value={'Santa_Cruz'}>Santa Cruz</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                    <FormControlLabel value="0 Mes" control={<Radio />} label="0 Mes" />
                    <FormControlLabel value="2 Meses" control={<Radio />} label="2 Meses" />
                    <FormControlLabel value="6 Meses" control={<Radio />} label="6 Meses" />
                    <FormControlLabel value="+1 Año" control={<Radio />} label="+1 Año" />
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
                                          control={<Checkbox color="secondary"
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
                    color="secondary"
                    label="Que te gustaria Capacitarte"
                    placeholder="Que te gustaria Capacitarte"
                    fullWidth
                    multiline
                    variant="outlined"
                    name="capacitarte"
                    value={capacitarte}
                    onChange={(e) => handleInputChange(e)}
                    inputProps={{ className: classes.textarea }}
                />
            </Grid>
        </Grid>
        <Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}>
             Enviar
        </Button>
    </form>
    )
}
