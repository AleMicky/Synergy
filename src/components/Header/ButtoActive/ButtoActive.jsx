import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { saveItem } from '../../../utils/storage';

export default function ButtoActive({tabAzul, tabAzulOut, azul}) {


    const [color, setColor] = useState(!azul);

    const handleContruccion = () => {
        tabAzulOut();
        setColor(!color)
        saveItem('pagina','Contruccion')
    }

    const handleMadera = () => {
        tabAzul();
        setColor(!color);
        saveItem('pagina','Madera');

    }
    return (
        <ButtonGroup aria-label="outlined primary button group">
            <Button variant="contained" 
                    color={color ? 'secondary':'inherit'}
                    style={{width: 110}}
                    size="small"
                    onClick={handleContruccion}>Construcción</Button>
            <Button variant="contained" 
                    color={color ? 'inherit':'primary'}
                    style={{width: 110}}
                    size="small"
                    onClick={handleMadera}>Madera</Button>
        </ButtonGroup>
    )
}
