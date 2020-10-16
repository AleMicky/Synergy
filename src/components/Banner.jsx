import React from 'react'
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      height:600,
      // marginBottom: theme.spacing(1),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center', 
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(7),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15),
        paddingRight: 0,
      },
    },
}));
export const Banner = ({ post }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
}
