import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { useParams } from "react-router-dom";

/// import { QRCode } from "react-qr-svg";
const QRCode2 = require('qrcode.react');

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MonkyDev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));


export const CodigoQr = () => {

  const classes = useStyles();
  let { ci } = useParams();

  const [personal, setPersonal] = useState({});

  useEffect(() => {
    
    fetch('https://banck-end.herokuapp.com/preregistro-maderas/'+ci)
    .then(resp => resp.json())
    .then(data => {
      setPersonal(data);
    });

  }, [ci])

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Synergy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
         <b>Codigo Qr</b>
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.paper}>
                            <QRCode2
                                    id="123456"
                                    size={200}
                                    level={"Q"}
                                    value={`codigo: ${personal._id}, Nombre: ${personal.nombres}  ${personal.apellidos}`}
                                    includeMargin={false}/>
                            
                    </div>
                  
                    <Typography component="h4" variant="h5" align="center" color="textPrimary" gutterBottom>
                       {personal.nombres} {personal.apellidos}
                    </Typography>
                    <Typography component="h6" variant="h6" align="center" color="textSecondary" gutterBottom>
                        {new Date().getFullYear()}
                    </Typography>
                    <Link onClick={downloadQR}> Descargar QR </Link>
                </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}