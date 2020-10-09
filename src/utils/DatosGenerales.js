import React from 'react'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Icon } from '@material-ui/core';
import icolog from '../assets/sinex/Negro-07.svg';

export const RedSocial = [
    {
        icon : <Icon style={{height: '100%'}}>
                    <img style={{textAlign: 'center', height:30, width:30}} src={icolog} alt='imf'/>
                </Icon>,
        url : 'https://www.google.com/'
    },
    {
        icon : <TwitterIcon/>,
        url : 'https://www.google.com/'
    },
    {
        icon : <FacebookIcon/>,
        url : 'https://www.google.com/'
    },
    {
        icon : <InstagramIcon/>,
        url : 'https://www.google.com/'
    },

    {
        icon : <YouTubeIcon/>,
        url : 'https://www.google.com/'
    }
];

export const MenuRojo = [
    { 
        title: 'Inicio', 
        url: '/home'
    },
    { 
        title: 'Nosotros', 
        url: '/home/nosotros'
    },
    { 
        title: 'Productos', 
        url: '/home/productos'
    },
    { 
        title: 'Sistemas Especializados', 
        url: '/home/servicios'
    },
    { 
        title: 'Club del Instalador', 
        url: '/home/conocenos'
    },
    { 
        title: 'Contactos', 
        url: '/home/contacto',
    },
];

export const MenuAzul = [
    { 
        title: 'Inicio', 
        url: '/home'
    },
    { 
        title: 'Nosotros', 
        url: '/home/nosotros'
    },
    { 
        title: 'Productos', 
        url: '/home/productos'
    },
    { 
        title: 'Mobiliario Especializado', 
        url: '/home/servicios',
    },
    { 
        title: 'Club del Carpintero', 
        url: '/home/conocenos',
    },
    { 
        title: 'Contactos', 
        url: '/home/contacto',
    },
];
