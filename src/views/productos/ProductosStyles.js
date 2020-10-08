import { makeStyles } from '@material-ui/core';

export const productoStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    contendor: {
      display: 'flex',
    },
    categoria: {
      width: '100%',
     // maxHeight: '100vh',
      // position: 'relative',
       // overflow: 'auto',
      //maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      margin: 5
    },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '80%',
      display: 'flex',
      flexDirection: 'column',    
      marginBottom: 20,
      marginLeft:15,
    },
    cardMedia: {
      paddingTop: '60%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },

    // card: {
    //   height: '70%',
    //   width: '70%',
    //   margin: 2,
    //   display: 'flex',
    //   flexDirection: 'column',
    // },
    // cardMedia: {
    //   paddingTop: 350,
    // },
  }));
  