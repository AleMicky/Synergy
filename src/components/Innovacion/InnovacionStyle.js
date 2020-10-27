import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        // margin: 10,
        maxWidth: 200,
        minHeight: '40vh',
        // backgroundColor:'#0C0B0B'
    },
    icono:{
        fontSize: 70, 
        color: '#fafafa'
    },
    titulo:{
        color: '#fafafa'
    }
}));
