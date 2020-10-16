import React, { useEffect, useState } from 'react'
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useFetch } from '../../hooks/useFetch';
import { apiImg, apiURL } from '../../config';
import { Banner } from '../../components/Banner';

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


export const MiTarjeta = () => {
    const classes = useStyles();

    const { loading:load, data:dataBanner } = useFetch(`${apiURL}banners`);

    const [mainFeaturedPost, setMainFeaturedPost] = useState({})

    useEffect(() => {

        if(!load){
        const banner = dataBanner.filter(b => b.interfaz === 'tarjeta');
        
        setMainFeaturedPost({
            title: banner[0].titulo,
            description: banner[0].descripcion?banner[0].descripcion:'',
            image: apiImg + banner[0].imagen.url,
            imgText: banner[0].titulo,
        });
        }
      
    }, [load, dataBanner ])


    return (
        <div className={classes.root}>
            <CssBaseline />
                <Banner post={mainFeaturedPost} />
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
