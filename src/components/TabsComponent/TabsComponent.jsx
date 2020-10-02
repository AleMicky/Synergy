import React from 'react';
import { AppBar, Box, Container, Tab, Tabs, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
export function TabPanel({ children, value, index, ...other }) {
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
                    <Container maxWidth="xl">
                        {children}
                    </Container>
                </Box>
            )}
        </div>
    );
}
export function TabsComponent({titulo, value, handleChange, handleChangeIndex,color, children}) {

    const theme = useTheme();
    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor={color}
                                textColor={color}
                                variant="fullWidth">
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
