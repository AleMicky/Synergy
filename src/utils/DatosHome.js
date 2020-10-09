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

import Inicio1 from '../assets/home/rojo1.jpeg';
import Inicio2 from '../assets/home/rojo3.jpeg';
import Inicio3 from '../assets/home/rojo2.jpeg';
import Inicio4 from '../assets/home/rojo4.jpeg';

import azul1 from '../assets/home/azul1.jpeg';
import azul2 from '../assets/home/azul2.jpeg';
import azul3 from '../assets/home/azul3.jpeg';
import azul4 from '../assets/home/azul4.jpeg';



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

 export const proyectoAzul = [
  {
      titulo: 'Productos',
      imagen: azul1,
      ruta: 'productos'
  },
   {
       titulo: 'Servicios',
       imagen: azul2,
       ruta: 'servicios'
   },
 {
     titulo: 'Pizarra Digital',
     imagen: azul3,
     ruta: 'pizarra-digital'
 },
 {
     titulo: 'Contacto',
     imagen: azul4,
     ruta: 'contacto'
 }
];

 export const innovamoRojo = [
   {
     titulo: 'Calculadora',
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
      titulo: 'Biblioteca',
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