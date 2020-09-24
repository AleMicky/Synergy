import React from 'react'
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import { Post } from '../../components/Post';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const mainFeaturedPost = {
    title: 'Como Utilizo Mi Tarjeta',
    description: "",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
};
export const MiTarjeta = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Post post={mainFeaturedPost} />
            <Grid container>
                <Grid item xs={12} >
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Paso 1
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis 
                                        praesentium mollitia inventore totam aut dolorum ex, exercitationem magni 
                                        nobis, dolorem error? Ipsum quod possimus reiciendis reprehenderit quasi 
                                        aspernatur numquam odit!
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Paso 2
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis 
                                        praesentium mollitia inventore totam aut dolorum ex, exercitationem magni 
                                        nobis, dolorem error? Ipsum quod possimus reiciendis reprehenderit quasi 
                                        aspernatur numquam odit!
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="secondary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Paso 3
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis 
                                        praesentium mollitia inventore totam aut dolorum ex, exercitationem magni 
                                        nobis, dolorem error? Ipsum quod possimus reiciendis reprehenderit quasi 
                                        aspernatur numquam odit!
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        Paso 4
                                    </Typography>
                                    <Typography>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis 
                                        praesentium mollitia inventore totam aut dolorum ex, exercitationem magni 
                                        nobis, dolorem error? Ipsum quod possimus reiciendis reprehenderit quasi 
                                        aspernatur numquam odit!
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
                <Grid item xs={12}>
                
                </Grid>
            </Grid>
        </div>
    )
}
