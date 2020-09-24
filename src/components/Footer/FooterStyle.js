const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    footer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '40vh',
      backgroundColor: '#f3f4f5'
    },
    seccion: {
      listStyleType: 'none',
      margin: 10
    },
    sectionDesktop: {
      display: 'flex',
    },
    asistencia: {
      padding:20,
    },
    text: {
      [theme.breakpoints.up('sm')]: {
        fontSize: 20
      },
    },
    logotipo: {
      width: 250,
    },
  }));
  