import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
         margin: 10,
        maxWidth: 200,
        minHeight: '40vh'
    },
    icono:{
        fontSize: 70, 
        color: '#fafafa'
    },
    titulo:{
        color: '#fafafa'
    }
}));
