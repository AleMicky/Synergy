import React, { useContext } from 'react';
import { Hidden, Drawer, makeStyles, useTheme, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Context } from './Context';
import ButtoActive from './Header/ButtoActive/inde';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export const DrawerSys = ({ mobileOpen, handleDrawerToggle, window, sections,azul }) => {
    const classes = useStyles();
    const theme = useTheme();
    let history = useHistory();

    const container = window !== undefined ? () => window().document.body : undefined;
    const { synergy  } = useContext(Context);
    const {tabAzul, tabAzulOut} = synergy;
   
    const hanlderNav = url => {
        history.push(url);
    }
    return (
        <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >

                <div>
                    <div className={classes.toolbar} />
                    <Divider />
                    <List>
                        {sections.map((section, i) => (
                            <div key={i}>
                                <ListItem button key={i} onClick={() => hanlderNav(section.url)}>
                                                <ListItemText primary={section.title} />
                                            </ListItem>
                            </div>

                        ))}
                        
                        
                    </List>
                    <Divider />
                    <div style={{display: 'flex', margin:10}}>
                    <ButtoActive tabAzul = {tabAzul}
                                     tabAzulOut = {tabAzulOut}
                                     azul={azul} />
                    </div>
                </div>
            </Drawer>
        </Hidden>
    )
}
