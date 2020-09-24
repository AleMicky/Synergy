import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const ButtonNav = ({titulo}) => {
    const classes = useStyles();
    return <Button className={classes.root} >{titulo}</Button>;
}
const useStyles = makeStyles({
    root: {
      background: '#fafafa',
      height: 60,
      padding: '0 25px',
      "&:hover": {
        borderBottomWidth: 3, 
        borderColor: '#000000',
        borderStyle: 'solid'
    }
    },
  });