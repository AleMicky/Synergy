import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import PlaceIcon from '@material-ui/icons/Place';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 10,
    maxWidth: 450,
    [theme.breakpoints.up('md')]: {
        margin: 15,
        maxWidth: 700,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  acordion:{
    // backgroundColor : '#FF0000',
    // color: '#fafafa'
  },
  oficina: {
    display: 'flex',
    flexDirection: 'column'
  },
  lista: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listText: {
      fontSize: 10
  }
}));

const sucursal = [
    {
        nombre: 'Santa Cruz',
        oficina:[
            {
             nombre:'Oficina Central: 3er Anillo interno entre Av. Alemania y Av. Mutualista N° 3275',
             telefono: '(591-3) 342 0345',
             fax: ''
            },
            {
                nombre:'Suc. Mutualista: 4to anillo entre Av. Mutualista y Av. Paraguá',
                telefono: '(591-3) 346 5909',
                fax: ''
            },
            {
                nombre:'Suc. Banzer: Av. Cristo Redentor (Banzer) km7',
                telefono: '(591-3) 365 0345',
                fax: ''
            },
            {
                nombre:'Suc. Santos Dumont: Av. Santos Dumont entre 4to y 5to Anillo (frente a Villa Olímpica)',
                telefono: '(591-3) 356 4144',
                fax: ''
            },
            {
                nombre:'Suc. Montero: Circunvalacion Este/Calle Luis Gius',
                telefono: '(591-3) 922 7875',
                fax: ''
            }
        ]
    },
    {
        nombre: 'Cochabamba',
        oficina:[
            {
                nombre:'Oficina Central: Av. Blanco Galindo Km1 N° 1184 esq. Av. Peru',
                telefono: '(591-4) 424 7147',
                fax: '(591-4) 411 4792'
            },
            {
                nombre:'Sucursal BG2: Av. Blanco Galindo Km 4 ½ entre Abel Rivas y Av. Segunda, Zona Busch',
                telefono: '(591-4) 424 4021',
                fax: ''
            },
            {
                nombre:'Suc. Sacaba: Av. Villazón Km 2 1/2 acera sud (carretera a Sacaba)',
                telefono: '(591-4) 449 6372',
                fax: ''
           },
           {
                nombre:'Sucursal Beijing: Av. Beijing N° 115 entre C.23 de Enero y Yuracare',
                telefono: '(591-4) 443 2305',
                fax: ''
          }
        ]
    },
    {
        nombre: 'La Paz',
        oficina:[
            {
                nombre:'Suc. Miraflores: Av. Saavedra N° 1513 (Plaza Uyuni)',
                telefono: '(591-2) 224 3479',
                fax: '(591-2) 211 8976'
            },
            {
                nombre:'Suc. Cota Cota: C.25 N° 23 Cota Cota esq. Av. Ballivian ',
                telefono: '(591-2) 277 3600',
                fax: ''
            },
            {
                nombre:'Suc. Calacoto: Av. Ballivián  N°7881 esq. C/24 Zona Calacoto',
                telefono: '(591-2) 214 6229',
                fax: ''
            },
            {
                nombre:'Oficina Central: C.21 Calacoto N° 7721 esq. Gabino Villanueva',
                telefono: '(591-2) 277 4285',
                fax: ''
            },
            {
                nombre:'Suc. Cota Cota: C.348 N° 402 esq. Av. La Merced',
                telefono: '(591-2) 277 2496',
                fax: ''
            }
        ]
    },
    {
        nombre: 'EL Alto',
        oficina:[
            {
             nombre:'Suc. Rio Seco: Av. Juan Pablo II N° 100 - Galpón 8 y 9 ',
             telefono: '(591-2) 284 5677',
             fax: ''
            },
            {
                nombre:'Suc. Villa Avaroa: Av. Ladislao Cabrera N° 100',
                telefono: '(591-2) 282 5393',
                fax: ''
            }
        ]
    },
    {
        nombre: 'Tarija',
        oficina:[{
             nombre:'Oficina Central: Prolongación Ballivián y Av. Circunvalación S/N frente a Cadepia',
             telefono: '(591-4) 665 8606',
             fax: ''
        }]
    }
];
export const Accordions = ({azul}) => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        {
            sucursal.map((record, index) => {

                const nombre = `panel-${index}`;
                const labelId = `panel-${index}-header`;

                return(
                    <Accordion key={index} 
                               className={classes.acordion}
                               expanded={expanded === nombre} 
                               onChange={handleChange(nombre)}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id={labelId}
                        >
                        <Typography className={classes.heading}>{record.nombre}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <List className={classes.lista} dense={true}>
                            {
                                record.oficina.map((value, index) => {
                                    return(
                                        <ListItem key={index}>
                                            <ListItemText className={classes.listText}
                                                          primary={value.nombre}
                                                          secondary={`Telf.: ${value.telefono}`}/>
                                              <IconButton aria-label="ubicacion"
                                                          color={azul?'primary':'secondary'}
                                                          onClick={() => alert('url')}>
                                                    <PlaceIcon />
                                             </IconButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                        </AccordionDetails>
                  </Accordion>
                )
            })
        }
    </div>
  );
}
