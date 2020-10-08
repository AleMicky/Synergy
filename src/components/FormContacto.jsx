import React, { useState } from 'react'
import { makeStyles, Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { apiURL } from '../config';
import Axios from 'axios';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '70%', // Fix IE 11 issue.
  //  marginTop: theme.spacing(3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  textarea: {
    resize: "both",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const FormContacto = ({handleClick, setMensajes, azul }) => {
  const classes = useStyles();
  const [valorForm, setValorForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: '',
    ciudad: '',
    comentario: ''
  });

  const { 
    nombre,
    correo,
    telefono,
    asunto,
    ciudad,
    comentario
    } = valorForm;

  const handleInputChange = ({ target }) => {
    setValorForm({
      ...valorForm,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  };

  const handlerForm = (e) => {
    e.preventDefault();
    Axios.post( `${apiURL}contactos`, {
        nombre: nombre,
        comentario : comentario,
        pagina : azul ? 'Contruccion' : 'Madera',
        correo : correo,
      
  }).then(response => {
        console.log(response);
        setValorForm({
          nombre: '',
          correo: '',
          telefono: '',
          asunto: '',
          ciudad: '',
          comentario: ''
        });
        handleClick();
  }).catch(e => {
      console.log(e);
      setMensajes(e);
      handleClick();
  });
  }
  return (


    <form className={classes.form} onSubmit={handlerForm}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            color={azul ? 'primary' : 'secondary'}
            autoComplete="fname"
            name="nombre"
            variant="outlined"
            required
            fullWidth
            id="nombre"
            label="Nombre Completo"
            value={nombre}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color={azul ? 'primary' : 'secondary'}
            variant="outlined"
            required
            id="correo"
            fullWidth
            label="Correo"
            name="correo"
            value={correo}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color={azul ? 'primary' : 'secondary'}
            autoComplete="fname"
            name="telefono"
            variant="outlined"
            required
            fullWidth
            id="telefono"
            label="Telefono"
            value={telefono}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color={azul ? 'primary' : 'secondary'}
            variant="outlined"
            required
            fullWidth
            id="asunto"
            label="Asunto"
            name="asunto"
            value={asunto}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Ciudad</InputLabel>
            <Select
              color={azul ? 'primary' : 'secondary'}
              variant="outlined"
              required
              fullWidth
              id="ciudad"
              name="ciudad"
              label="Ciudad"
              value={ciudad}
              onChange={(e) => handleInputChange(e)}
            >
              <MenuItem value={'Cochabamba'}>Cochabamba</MenuItem>
              <MenuItem value={'Santa_Cruz'}>Santa Cruz</MenuItem>
              <MenuItem value={'La_Paz'}>La Paz</MenuItem>
              <MenuItem value={'El_Alto'}>El Alto</MenuItem>
              <MenuItem value={'Tarija'}>La Paz</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            color={azul ? 'primary' : 'secondary'}
            rows={5}
            id="comentario"
            label="Comentario"
            placeholder="Comentario"
            fullWidth
            multiline
            name="comentario"
            variant="outlined"
            inputProps={{ className: classes.textarea }}
            value={comentario}
            onChange={(e) => handleInputChange(e)}
          />
        </Grid>

      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color={azul ? 'primary' : 'secondary'}
        className={classes.submit}
      >
        Enviar
          </Button>

    </form>
  )
}
