import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    logotipo: {
      width: 110,
      [theme.breakpoints.up('sm')]: {
        width: 200
      }, 
    },
    useButton: {
      height: 60,
      padding: '0 25px',
      fontSize: 14,
      "&:hover": {
        borderBottomWidth: 4,
        backgroundColor: 'transparent',
        borderColor: '#000000',
        borderStyle: 'solid'
      }
    },
    toolbarSecondary: {
       display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'auto',
      },
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'auto',
      },
    },
    sectionDesktop: {
      display: 'flex',
    }
  }));