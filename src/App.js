import React, { useEffect, useMemo, useState } from 'react';
import Main from './router/index'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/theme';
import { Context } from './components/Context';

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [azul, setAzul] = useState(false);
    const [pagina, setPagina] = useState('Construccion');

    const synergy = useMemo(() => {
        return {
            tabAzul: () => {
                setIsLoading(false)
                setAzul(true)
                setPagina('Madera')
            },
            tabAzulOut: () => {
                setIsLoading(false)
                setAzul(false)
                setPagina('Construccion')
            }
        }
      }, []);
      
      useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 100);
      }, []);

    return(
    <ThemeProvider theme={theme}>
         <Context.Provider value={{synergy, azul, pagina}}>

             {
                 isLoading?(
                     <p>Loading...</p>
                 ):(
                    <Main/>
                 )
             }
         
         </Context.Provider>
    </ThemeProvider>
    )
}

export default App;
