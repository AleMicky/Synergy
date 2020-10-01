import React, { useState } from 'react';
import { makeStyles, useScrollTrigger, Zoom, CssBaseline, Fab, useTheme, useMediaQuery } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { MenuAzul, MenuRojo } from '../../utils/DatosGenerales';
import Header from '../../components/Header/Header';
import InboxIcon from '@material-ui/icons/Inbox';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBarSpacer: theme.mixins.toolbar,
  scroll: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  flotante:{
    margin: 0,
    top: 'auto',
    left: 20,
    bottom: 20,
    right: 'auto',
    position: 'fixed',
  }
}));

const ScrollTop = ({ children, window }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scroll}>
        {children}
      </div>
    </Zoom>
  );
};


export const Layout = ({ children, window }) => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const classes = useStyles();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  return (
      <div className={classes.root}>
        <CssBaseline />
        <Header menuSeccion ={MenuAzul} handleDrawerToggle={handleDrawerToggle} />
        <nav aria-label="Carpertas">
            {/* <DrawerSys mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              {...{ window }}
              sections={azul?MenuAzul:MenuRojo} /> */}
        </nav>
        <main>
        {
          matches && (<div className={classes.appBarSpacer} />)
        }
          {children}

          <Fab color="inherit" className={classes.flotante}>
            <InboxIcon />
          </Fab>
        </main>
        <ScrollTop {...{ children, window }}>
          <Fab color={'primary'} size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer sections={MenuAzul}/>
      </div>
    
  );
}
