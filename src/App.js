import React from 'react';
import Main from './router/index'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/theme';

const App = (props) => (
    
    <ThemeProvider theme={theme}>
         <Main/>
    </ThemeProvider>
);
 

export default App;
