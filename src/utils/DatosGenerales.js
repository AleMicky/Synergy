import React from 'react'; 
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export const RedSocial = [
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
        // submenu:[
        //     {
        //         title: 'Conocenos', 
        //         url: '/home/conocenos',
        //     },
        //     {
        //         title: 'Instaladores De Calidad', 
        //         url: '/home/pizarra-digital',
        //     },
        //     {
        //         title: 'Formulario de Preregistro', 
        //         url: '/home/formulario-preregistro',
        //     },
        //     {
        //         title: 'Calculadora', 
        //         url: '/home/calculadora',
        //     }
        // ] 
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
        title: 'Arquitectas Del Hogar', 
        url: '/home/servicios',
    },
    { 
        title: 'Club del Carpintero', 
        url: '/home/conocenos',
        // submenu:[
        //     {
        //         title: 'Conocenos', 
        //         url: '/home/conocenos',
        //     },
        //     {
        //         title: 'Carpinteros De Calidad', 
        //         url: '/home/pizarra-digital',
        //     },
        //     {
        //         title: 'Formulario de Preregistro', 
        //         url: '/home/formulario-preregistro',
        //     },
        //     {
        //         title: 'Calculadora', 
        //         url: '/home/calculadora',
        //     }
        // ] 
    },
    { 
        title: 'Contactos', 
        url: '/home/contacto',
    },
];
