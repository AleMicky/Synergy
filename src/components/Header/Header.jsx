import React, { useContext, useState } from 'react';
import { AppBar, Button, CssBaseline, IconButton, ListItemText, Menu, MenuItem, Toolbar, withStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Social from '../Social';
import { RedSocial } from '../../utils/DatosGenerales';
import { useStyles } from './HeaderStyle';
import MenuIcon from '@material-ui/icons/Menu';
import { map } from 'lodash';
import ButtoActive from './ButtoActive/inde';
import { Context } from '../Context';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      width: 'auto',
    },
  }))(MenuItem);

export default function Header({menuSeccion, handleDrawerToggle, azul}) {

    const classes = useStyles();
    let history = useHistory();
    
    const [anchorEl, setAnchorEl] = useState(null);

    const { synergy  } = useContext(Context);
    const {tabAzul, tabAzulOut} = synergy;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const hanlderNav = url => {
        history.push(url);
        setAnchorEl(null);
    }
    
    return (
        <div className={classes.grow}>
            <CssBaseline />
            <AppBar color="inherit">
                <Toolbar>
                  <IconButton color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                className={classes.menuButton}>
                            <MenuIcon />
                    </IconButton>
                    <img  className={classes.logotipo}
                          src={require('../../assets/Logo.png')}
                          alt='logotipo' />
                     <div className={classes.grow} />
                     <Social RedSocial= {RedSocial}/>
                   
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                  <div>
                {
                    map(menuSeccion, (menu, index) => {
                    if(menu.submenu === undefined ){
                        return(
                        <Button key={index}     
                                className={classes.useButton}
                                onClick={() => hanlderNav(menu.url)}>
                                {menu.title}
                        </Button>
                        )
                    }else{
                        return(
                            <div key={index}>
                            <Button   
                                        aria-controls="customized-menu"
                                        className={classes.useButton}
                                        onClick={handleClick}>
                                        {menu.title}
                                </Button>
                                <StyledMenu
                                    id="customized-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    {
                                    map(menu.submenu, (sub, i) => (
                                        <StyledMenuItem key={i} onClick={() => hanlderNav(sub.url)}>
                                            <ListItemText primary={sub.title}/>
                                        </StyledMenuItem>
                                    ))
                                    }
                                </StyledMenu>
                            </div>
                        )
                    }
                    })
                 }
                 </div>
                 <div>
                 <ButtoActive tabAzul = {tabAzul}
                              tabAzulOut = {tabAzulOut}
                              azul={azul} />
                 </div>
               
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </div>
    )
}