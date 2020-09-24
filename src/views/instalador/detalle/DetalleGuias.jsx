import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid, CardHeader, CardActionArea, CardActions, Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    width:'70%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: 100,
  },
  playIcon:{

  }

}));

export const DetalleGuias = ({titulo, url}) => {
  
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                  <CardHeader title={'Manual Madera'}/>
                    <CardActionArea onClick={()=> console.log(1)}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="sads"
                      />
                    </CardActionArea>
                    <CardActions>
                    <Button href="https://drive.google.com/file/d/1JrqmiHX2tz5OiB6AO3GYMHHSSE9yRRxb/view?usp=sharing" target="_blank">
                      <GetAppIcon className={classes.playIcon} />
                    </Button>
                    <Typography component="h6" variant="h6">
                      Descarga
                    </Typography>
                    </CardActions>
                  </Card>
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                  <CardHeader title={'Manual Metal'}/>
                    <CardActionArea onClick={()=> console.log(1)}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="sads"
                      />
                    </CardActionArea>
                    <CardActions>
                    <Button href="https://drive.google.com/file/d/1JrqmiHX2tz5OiB6AO3GYMHHSSE9yRRxb/view?usp=sharing" target="_blank">
                      <GetAppIcon className={classes.playIcon} />
                    </Button>
                    <Typography component="h6" variant="h6">
                      Descarga
                    </Typography>
                    </CardActions>
                  </Card>
        </Grid>
        <Grid item  xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                  <CardHeader title={'Manual Mode'}/>
                    <CardActionArea onClick={()=> console.log(1)}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="sads"
                      />
                    </CardActionArea>
                    <CardActions>
                    <Button href="https://drive.google.com/file/d/1JrqmiHX2tz5OiB6AO3GYMHHSSE9yRRxb/view?usp=sharing" target="_blank">
                      <GetAppIcon className={classes.playIcon} />
                    </Button>
                    <Typography component="h6" variant="h6">
                      Descarga
                    </Typography>
                    </CardActions>
                  </Card>
        </Grid>
    </Grid>
  );
}

