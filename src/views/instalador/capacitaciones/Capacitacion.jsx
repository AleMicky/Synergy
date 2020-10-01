import React, { useState } from 'react';
import { makeStyles, Box, Container, CssBaseline, AppBar, Tab, useTheme, Tabs } from '@material-ui/core/';
import SwipeableViews from 'react-swipeable-views';
import { DetalleCapacitacion } from './detalle/DetalleCapacitacion';
import { Context } from '../../../components/Context';
import { DetalleVideo } from './detalle/DetalleVideo';
import { DetalleGuias } from './detalle/DetalleGuias';
import { DetalleFicha } from './detalle/DetalleFicha';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titulo: {
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      fontSize: 40
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    maxWidth: 300,
    margin: 50
  },
  media: {
    paddingTop: 250,
  },
  acciones: {
    display: 'flex',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function TabPanel({ children, value, index, ...other }) {
  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
      >
          {value === index && (
              <Box p={3}>
                  <Container maxWidth="lg">
                      {children}
                  </Container>
              </Box>
          )}
      </div>
  );
}

function a11yProps(index) {
  return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const Capacitacion = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleChangeIndex = (index) => {
      setValue(index);
  };
  return (
    <Context.Consumer>
    {
        ({ pagina }) => {
          return (
            <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="static" color="default">
                      <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor={pagina === 'Construccion'?'secondary':'primary'} 
                          textColor={pagina === 'Construccion'?'secondary':'primary'} 
                          variant="fullWidth"
                          aria-label="full width tabs example">
                          <Tab label="Capacitaciones" {...a11yProps(0)} />
                          <Tab label="Videos" {...a11yProps(1)} />
                          <Tab label="Guias De Instalacion" {...a11yProps(2)} />
                          <Tab label="Fichas Tecnicas" {...a11yProps(3)} />

                      </Tabs>
                  </AppBar>
                  <SwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={value}
                      onChangeIndex={handleChangeIndex}>
                      <TabPanel value={value} index={0} dir={theme.direction}>
                          <DetalleCapacitacion pagina= {pagina}/>
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                          <DetalleVideo pagina= {pagina}/>
                      </TabPanel>
                      <TabPanel value={value} index={2} dir={theme.direction}>
                        <DetalleGuias  pagina= {pagina}/>
                      </TabPanel>
                      <TabPanel value={value} index={3} dir={theme.direction}>
                      <DetalleFicha pagina= {pagina}/>
                      </TabPanel>
                  </SwipeableViews>
            </div>
          )
        }
      }
      </Context.Consumer>
  );
}