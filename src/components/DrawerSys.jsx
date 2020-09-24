import React, { useContext } from 'react';
import { Hidden, Drawer, makeStyles, useTheme, Divider, List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { SwitchSys } from './SwitchSys';
import { Context } from './Context';
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


export const DrawerSys = ({ mobileOpen, handleDrawerToggle, window, sections }) => {
    const classes = useStyles();
    const theme = useTheme();
    let history = useHistory();

    const container = window !== undefined ? () => window().document.body : undefined;
    const [open, setOpen] = React.useState(false);
    const { synergy  } = useContext(Context);
    const {tabAzul, tabAzulOut} = synergy;
    const handleClick = () => {
        setOpen(!open);
    };

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
                                {
                                    section.submenu.length !== 0 ? (
                                        <div>
                                            <ListItem button onClick={handleClick}>
                                                <ListItemText primary={section.title}/>
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>
                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {
                                                    section.submenu.map((record) => {
                                                    return(   
                                                        <ListItem key={record} button className={classes.nested}  onClick={() => hanlderNav(record.url)}>
                                                            <ListItemText primary={record.title} />
                                                         </ListItem>
                                                    )
                                                    })
                                                }
                                                </List>
                                            </Collapse>
                                        </div>
                                    ) : (
                                            <ListItem button key={i} onClick={() => hanlderNav(section.url)}>
                                                <ListItemText primary={section.title} />
                                            </ListItem>
                                        )
                                }
                            </div>

                        ))}
                        <ListItem>
                        <SwitchSys  tabAzul = {tabAzul}
                                     tabAzulOut = {tabAzulOut} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Hidden>
    )
}
