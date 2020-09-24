import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import { map } from "lodash";

const useStyles = makeStyles((theme) => ({
    grow: {
        display: 'flex',
    }
}));

export default function Social({RedSocial}) {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            {
                map(RedSocial, (social, index)  => (
                    <IconButton key={index}>
                        {social.icon}
                    </IconButton>
                ))
            }
        </div>
    )
}
