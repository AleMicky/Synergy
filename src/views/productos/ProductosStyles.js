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
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      margin: 5
    },
    card: {
      height: '70%',
      width: '70%',
      margin: 2,
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: 350,
    },
  }));
  