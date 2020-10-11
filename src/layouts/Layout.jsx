import React, { useState } from 'react'
import { useScrollTrigger, Zoom, CssBaseline, Fab, useTheme, useMediaQuery, Icon } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useStyles } from './LayoutStyle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { MenuAzul, MenuRojo } from '../utils/DatosGenerales';
import { Context } from '../components/Context';
import { DrawerSys } from '../components/DrawerSys';
import icolog from './../assets/sinex/Negro-06.svg'
export default function Layout({ children, window }) {

  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const classes = useStyles();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleLink = () => {
  //   window.open("https://synerx.com.bo/", "_blank")
  // }

    return (
        <Context.Consumer>
        {
            ({ azul }) => {

                return (
                    <React.Fragment>
                        <div className={classes.root}>
                            <CssBaseline />
                            <Header menuSeccion ={azul?MenuAzul:MenuRojo} handleDrawerToggle={handleDrawerToggle} azul={azul}/>
                            <nav aria-label="Carpertas">
                                <DrawerSys mobileOpen={mobileOpen}
                                handleDrawerToggle={handleDrawerToggle}
                                {...{ window }}
                                sections={azul?MenuAzul:MenuRojo} 
                                azul={azul}/>
                            </nav>
                            <main>
                            {
                            matches && (<div className={classes.appBarSpacer} />)
                            }
                            {children}

                            <Fab color="inherit" className={classes.flotante}
                                 href="https://synerx.com.bo/"
                                 target='_blank' 
                                 size="small">
                                {/* <InboxIcon /> */}
                                <Icon classes={{root: classes.iconRoot}}>
                                  <img className={classes.imageIcon} src={icolog} alt="Log"/>
                                </Icon>
                            </Fab>
                            </main>
                            <ScrollTop {...{ children, window }}>
                            <Fab color={ azul ?'primary':'secondary'} size="small">
                                <KeyboardArrowUpIcon />
                            </Fab>
                            </ScrollTop>
                            <Footer sections={MenuAzul}/>
                        </div>
                    </React.Fragment>                
                    )
            }
        }
        </Context.Consumer>
    )
}

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
  