import React from 'react'
import { makeStyles, Paper, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 500,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  }));
export const Search = ({buscar , handlefill }) => {
    const classes = useStyles();

    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'buscar' }}
          value = {buscar}
          onChange = {(e) => handlefill(e.target.value)}
        />
        <IconButton type="submit" className={classes.iconButton} 
                    aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}
