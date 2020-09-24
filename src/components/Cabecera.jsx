import React, { useState, useContext } from 'react'
import { CssBaseline, AppBar, Toolbar, makeStyles, IconButton, Button, Menu, withStyles } from '@material-ui/core'
import { useHistory } from "react-router-dom";

// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { SwitchSys } from './SwitchSys';
import { Context } from './Context';
import Social from './Social';
import { MenuRojo, RedSocial } from '../utils/DatosGenerales';

import { map } from 'lodash';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  logotipo: {
    width: 150,
    [theme.breakpoints.up('sm')]: {
      width: 200
    }, 
  },
  useButton: {
    height: 60,
    padding: '0 25px',
    "&:hover": {
      borderBottomWidth: 4,
      backgroundColor: 'transparent',
      borderColor: '#000000',
      borderStyle: 'solid'
    }
  },
  toolbarSecondary: {
     display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      overflowX: 'auto',
    },
  },
  sectionDesktop: {
    display: 'flex',
  }
}));

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
export const Cabecera = ({ sections, handleDrawerToggle }) => {


  const [anchorEl, setAnchorEl] = useState(null);
  const { synergy  } = useContext(Context);
  const {tabAzul, tabAzulOut} = synergy;
  let history = useHistory();
  const classes = useStyles();

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
        <Toolbar >
          <IconButton color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <img className={classes.logotipo}
            src={require('../assets/Logo.png')}
            alt='logotipo' />
          <div className={classes.grow} />
          <Social RedSocial= {RedSocial}/>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {
            map(MenuRojo, (menu, index) => {


              if(menu.submenu === undefined ){
                console.log(menu.submenu);
                return(
                  <Button key={index}     
                          className={classes.useButton}
                          onClick={() => hanlderNav(section.url)}>
                          {menu.title}
                  </Button>
                )
              }else{
                console.log(menu.submenu);

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

            {/* <SwitchSys tabAzul = {tabAzul}
                      tabAzulOut = {tabAzulOut} /> */}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

    </div>
  )
}
