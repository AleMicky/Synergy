import React from 'react'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Icon } from '@material-ui/core';
import icolog from '../assets/sinex/Negro-06.svg';

export const RedSocial = [
    {
        icon : <Icon style={{height: '100%'}}>
                    <img style={{textAlign: 'center', height:30, width:30}} src={icolog} alt='imf'/>
                </Icon>,
        url : 'https://synerx.com.bo/'
    },
    {
        icon : <TwitterIcon/>,
        url : 'https://twitter.com/?lang=en'
    },
    {
        icon : <FacebookIcon/>,
        url : 'https://www.facebook.com/SynergyBolivia/inbox/?mailbox_id=438287949605066&selected_item_id=100003239182502'
    },
    {
        icon : <InstagramIcon/>,
        url : 'https://www.instagram.com/?hl=en'
    },

    {
        icon : <YouTubeIcon/>,
        url : 'https://www.youtube.com/channel/UCPWoXFg2nrN9tnsJmq8Lumw'
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
    { 
        title: 'Metal', 
        url: '/home/metal',
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
        title: 'Moviliarios Especializados', 
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
    { 
        title: 'Metal', 
        url: '/home/metal',
    },
];
