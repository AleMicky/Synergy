import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      height: '40%',
      width: '100%'
    },
    video:{
        
        height: '40%',
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
}));
export const PostVideo = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />
            <video className={classes.video} loop muted autoPlay>
                <source src={'https://res.cloudinary.com/dkepyautb/video/upload/v1595337621/MUESTRA_VIDEO_1.mp4'} type="video/mp4" />
                <source src={'https://res.cloudinary.com/dkepyautb/video/upload/v1595337621/MUESTRA_VIDEO_1.mp4'} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </Paper>  
    );
};