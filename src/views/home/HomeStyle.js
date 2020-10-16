import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
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
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8),
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
      // height: '100%',
      margin: 15
    },
    cardMedia: {
       width: '100%',
       height: '35vh',
      
    },
    media: {
      height: 200,
      [theme.breakpoints.up('sm')]: {
        height: 350,
      },
    },
    cardContent: {
      flexGrow: 1,
      height: '8vh',
      backgroundColor: '#FF0000'
    },
    cardContentAzul: {
      flexGrow: 1,
      height: '8vh',
      backgroundColor: '#0067b2'
    }
  }));
  