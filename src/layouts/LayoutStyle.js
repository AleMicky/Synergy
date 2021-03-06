import { makeStyles } from '@material-ui/core';

export  const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBarSpacer: theme.mixins.toolbar,
  scroll: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  flotante:{
    margin: 0,
    top: 'auto',
    left: 20,
    bottom: 20,
    right: 'auto',
    position: 'fixed',
    height:60, 
    width:60
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center',
    height:60, 
    width:60
  }
}));