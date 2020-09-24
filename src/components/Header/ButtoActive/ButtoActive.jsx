import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

export default function ButtoActive({tabAzul, tabAzulOut}) {


    const [color, setColor] = useState(true);

    const handleContruccion = () => {
        tabAzulOut();
        setColor(!color)
    }

    const handleMadera = () => {
        tabAzul();
        setColor(!color)
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
