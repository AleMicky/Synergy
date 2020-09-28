import React from 'react'; 
import ExposureIcon from '@material-ui/icons/Exposure';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';


import Cons20 from '../assets/pics/Cons20.jpg';
import Cons23 from '../assets/pics/Cons23.jpg';
import Cons21 from '../assets/pics/Cons21.jpg';
import Mad20 from '../assets/pics/Mad20.jpg';
import Mad21 from '../assets/pics/Mad21.jpg';
import Mad22 from '../assets/pics/Mad22.jpg';

import Inicio1 from '../assets/pics/Inicio1.jpeg';
import Inicio2 from '../assets/pics/Inicio2.jpg';
import Inicio3 from '../assets/pics/Inicio3.jpg';
import Inicio4 from '../assets/pics/Inicio4.jpeg';



export const caroselRojo = [
    {
        imagen: Cons20,
        nombre: '01'
      },
      {
        imagen: Cons21,
        nombre: '02'
      },
      {
        imagen: Cons23,
        nombre: '03'
      }
];
 export const caroselAzul = [
    {
        imagen: Mad20,
        nombre: '01'
      },
      {
        imagen: Mad21,
        nombre: '02'
      },
      {
        imagen: Mad22,
        nombre: '03'
      }
 ];

 export const proyectoRojo = [
     {
         titulo: 'Productos',
         imagen: Inicio1,
         ruta: 'productos'
     },
      {
          titulo: 'Servicios',
          imagen: Inicio2,
          ruta: 'servicios'
      },
    {
        titulo: 'Pizarra Digital',
        imagen: Inicio3,
        ruta: 'pizarra-digital'
    },
    {
        titulo: 'Contacto',
        imagen: Inicio4,
        ruta: 'contacto'
    }
 ];

 export const innovamoRojo = [
   {
     titulo: 'Calculador Cotizador',
     ruta: 'calculadora', 
     icon: <ExposureIcon style={{fontSize: 70, color: '#fafafa'}}/>
   },
   {
      titulo: 'Club del Instalador',
      ruta: 'conocenos',
      icon: <PeopleIcon style={{fontSize: 70, color: '#fafafa'}}/>
   },
   {
      titulo: 'Synergy Academy',
      ruta: 'capacitacion',
      icon: <SchoolIcon style={{fontSize: 70, color: '#fafafa'}}/>
    },
    {
      titulo: 'Bibloteca',
      ruta: 'capacitacion',
      icon: <MenuBookIcon style={{fontSize: 70,  color: '#fafafa'}}/>
    }
 ];
 export const noImg = [
  {
    nombre: 'noImg',
    imagen: {
      url : Cons20
    },
  }
 ]