import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardMedia, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        height:200,
        margin:30,
        borderRadius: '0px 0px 60px 0px',
        '-webkit-box-shadow':'0 8px 4px #F40607',
        '-moz-box-shadow':'0 8px 4px #F40607',
        boxShadow : '0 8px 4px #F40607',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 280,
            height:280,
        },
      },
      Azroot: {
        maxWidth: 200,
        height:200,
        margin:30,
        borderRadius: '0px 0px 60px 0px',
        '-webkit-box-shadow':'0 8px 4px #0067b2',
        '-moz-box-shadow':'0 8px 4px #0067b2',
        boxShadow : '0 8px 4px #0067b2',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 280,
            height:280,
        },
      },
      media: {
        height: 200,
        [theme.breakpoints.up('sm')]: {
            height: 280,
        },
      },
}));
export default function CardItem({ imagen, handleOpen,azul }) {
  const classes = useStyles();
  return (
    <Card className={azul? classes.Azroot: classes.root}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image={imagen}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
