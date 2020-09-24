import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    titulo: {
      fontSize: 25,
      alignSelf: 'center',
      [theme.breakpoints.up('sm')]: {
        fontSize: 35
      },
    },
    inovacion: {
      backgroundColor: '#FF0000'
    },
  
    inovacionAzul: {
      backgroundColor: '#0067b2'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 0, 6),
      width: 800
    },
    card: {
      maxWidth: 200,
      height: 200,
      margin: 10,
      [theme.breakpoints.up('sm')]: {
        maxWidth: 350,
        height: 350,
      },
    },
    media: {
      height: 200,
      [theme.breakpoints.up('sm')]: {
        height: 350,
      },
    },
  }));
  