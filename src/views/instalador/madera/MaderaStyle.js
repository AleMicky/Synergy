import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: 'column'
    },
    titulo: {
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            fontSize: 40
        },
    },
    contendor: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        margin: 5
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        paddingTop: 300,
    },
    acciones: {
        display: 'flex',
        justifyContent: 'center',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));