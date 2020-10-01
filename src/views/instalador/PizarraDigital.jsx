import React from 'react';
import { Context } from '../../components/Context';
import Contructor from './contructor/Contructor';
import Madera from './madera/Madera';

export const PizarraDigital = () => {

    return (
        <Context.Consumer>
            {
                ({ pagina }) => {
                    return (
                        <React.Fragment>
                            {
                                pagina === 'Construccion'?(
                                    <Contructor />
                                ):(
                                   <Madera />
                                )
                            }
                        </React.Fragment>
                    )
                }
            }
        </Context.Consumer>
    )
}

