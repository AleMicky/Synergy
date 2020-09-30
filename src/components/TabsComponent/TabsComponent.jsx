import React, { useState } from 'react';
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
export function TabsComponent({titulo, children}) {

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor={'primary'}
                                textColor={'primary'}
                                variant="fullWidth">
                                {
                                    titulo.map((value, index) => {
                                        return (
                                            <Tab key={index} label={value} {...a11yProps(index)} />
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
