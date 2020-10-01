import React from 'react'
import { makeStyles, Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '70%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
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
  
export const FormContacto = ({azul}) => {
    const classes = useStyles();

    return ( 
       
    
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                color={azul?'primary':'secondary'}
                autoComplete="fname"
                name="nombre"
                variant="outlined"
                required
                fullWidth
                id="nombre"
                label="Nombre Completo"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               color={azul?'primary':'secondary'}
                variant="outlined"
                required
                id="correo"
                fullWidth
                label="Correo"
                name="correo"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color={azul?'primary':'secondary'}
                autoComplete="fname"
                name="telefono"
                variant="outlined"
                required
                fullWidth
                id="telefono"
                label="Telefono"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               color={azul?'primary':'secondary'}
                variant="outlined"
                required
                fullWidth
                id="asunto"
                label="Asunto"
                name="asunto"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Ciudad</InputLabel>
                    <Select
                        color={azul?'primary':'secondary'}
                        variant="outlined"
                        required
                        fullWidth
                        id="ciudad"
                        name="ciudad"
                        label="Ciudad">
                        <MenuItem value={'cochabamba'}>Cochabamba</MenuItem>
                        <MenuItem value={'santa cruz'}>Santa Cruz</MenuItem>
                    </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
              color={azul?'primary':'secondary'}
              rows={5}
              id="comentario"
              label="Comentario"
              placeholder="Comentario"
              fullWidth
              multiline
              variant="outlined"
              inputProps={{ className: classes.textarea }}
            />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={azul?'primary':'secondary'}
            className={classes.submit}
          >
            Enviar
          </Button>
         
        </form>
    )
}
