import React from 'react';
import { IconButton, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { map } from "lodash";

const useStyles = makeStyles((theme) => ({
    grow: {
        display: 'flex',
    }
}));

export default function Social({RedSocial}) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <div className={classes.grow}>
            {
                map(RedSocial, (social, index)  => (
                    <IconButton size={matches?'medium':'small'} key={index}>
                        {social.icon}
                    </IconButton>
                ))
            }
        </div>
    )
}
