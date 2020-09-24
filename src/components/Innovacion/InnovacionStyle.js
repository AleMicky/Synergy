import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 50,
        maxWidth: 200,
        minHeight: '30vh'
    },
    icono:{
        fontSize: 70, 
        color: '#fafafa'
    },
    titulo:{
        color: '#fafafa'
    }
}));
