import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      //  display: 'flex',
      //  alignItems: 'center',
      //  justifyContent: 'center',
      //   paddingTop: theme.spacing(8),
      //  paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    mainFeatured: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width:1200,
      height:600
    },
  }));
  