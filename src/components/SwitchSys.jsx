import React from 'react'

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: '70%',
  },
  workaround: {
    color: theme.palette.action.active,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      width: '100%',
      height: '70%',
      pointerEvents: 'none',
      zIndex: 0,
      backgroundColor: '#FF0000'
    },
    '& + &:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      width: 1,
      height: '70%',
      pointerEvents: 'none',
      zIndex: 0,
     backgroundColor: '#FF0000'
    },
  },
  workaroundAz: {
    color: theme.palette.action.active,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '70%',
      pointerEvents: 'none',
      zIndex: 0,
      backgroundColor: '#0067b2'
    },
    '& + &:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      width: 1,
      height: '70%',
      pointerEvents: 'none',
      zIndex: 0,
      backgroundColor: '#0067b2'
    },
  },
}));

export const SwitchSys = ({tabAzul, tabAzulOut}) => {
    const classes = useStyles();

    const [alignment, setAlignment] = React.useState('left');


    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };

    return (
      <>
       <ToggleButtonGroup className={classes.root} 
                          value={alignment} 
                          exclusive 
                          onChange={handleAlignment}
                          aria-label="text alignment">
          <ToggleButton value="left" 
                        aria-label="left aligned" 
                        onClick={tabAzulOut}
                        selected classes={{ selected: classes.workaround }}
                        >
            RojoRojo
          </ToggleButton>
          <ToggleButton value="right" 
                        aria-label="right aligned" 
                        onClick={tabAzul}
                        selected classes={{ selected: classes.workaroundAz }}>
            AzulAzul
          </ToggleButton>
        </ToggleButtonGroup>
      </>
    )
}
