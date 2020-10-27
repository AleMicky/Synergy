import React from 'react';
import { AppBar, Box, Container, Tab, Tabs, useMediaQuery, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';


function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
      };
}
export function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Container maxWidth="xl">
                        {children}
                    </Container>
                </Box>
            )}
        </div>
    );
}
export function TabsComponent({titulo, value, handleChange, handleChangeIndex,color, children}) {
    /// fullWidth
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor={color}
                                textColor={color} 
                                variant= {matches?'fullWidth':'scrollable'}
                                scrollButtons="on"
                                aria-label="scrollable force tabs example">
                                {
                                    titulo.map((value, index) => {
                                        return (
                                            <Tab key={index} label={value === 'Santa_Cruz'?'Santa Cruz':value} {...a11yProps(index)} />
                                        )
                                    })
                                }
                            </Tabs>
                        </AppBar>
                        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={value}
                                        onChangeIndex={handleChangeIndex}>
                                         {
                                            children
                                         }  
                        </SwipeableViews>
        </React.Fragment>
    )
}
