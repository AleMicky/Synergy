import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import CardStyle from '../../../components/CardStyle/CardStyle';
import { useFetch } from '../../../hooks/useFetch';
import { apiURL } from '../../../config';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      // paddingTop: theme.spacing(8),
      // paddingBottom: theme.spacing(8),
    }
  }));
  
export default function Sistemas() {

    const classes = useStyles();
    const { loading, data } = useFetch(`${apiURL}sistema-especializados`);


    return (
        <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container >
          {
          loading?(
            <h3>loading</h3>
          ):(
            data.map((card , index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                 <CardStyle nombre = {card.nombre}
                            url= {'https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif'}/>
              </Grid>
            ))
          )
          }
          
        
        </Grid>
       
      </Container>
    )
}
