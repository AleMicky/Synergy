import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { saveItem } from '../../../utils/storage';

export default function ButtoActive({tabAzul, tabAzulOut}) {


    const [color, setColor] = useState(true);

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
                    size="small"
                    onClick={handleContruccion}>Construcción</Button>
            <Button variant="contained" 
                    color={color ? 'inherit':'primary'}
                    style={{width: 120}}
                    size="small"
                    onClick={handleMadera}>Madera</Button>
        </ButtonGroup>
    )
}
