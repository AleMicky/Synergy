import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#0067b2'
        },
        inherit: {
            main: '#fafafa'
        },
        secondary:{
            main:'#FF0000'
        }
    }
});

export default theme;