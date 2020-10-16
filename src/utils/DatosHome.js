import React from 'react'; 
// import ExposureIcon from '@material-ui/icons/Exposure';
// import PeopleIcon from '@material-ui/icons/People';
// import SchoolIcon from '@material-ui/icons/School';
// import MenuBookIcon from '@material-ui/icons/MenuBook';


import Cons20 from '../assets/pics/Cons20.jpg';
import Cons23 from '../assets/pics/Cons23.jpg';
import Cons21 from '../assets/pics/Cons21.jpg';
import Mad20 from '../assets/pics/Mad20.jpg';
import Mad21 from '../assets/pics/Mad21.jpg';
import Mad22 from '../assets/pics/Mad22.jpg';

import Inicio1 from '../assets/home/rojo1.jpg';
import Inicio2 from '../assets/home/rojo3.jpg';
import Inicio3 from '../assets/home/rojo2.jpg';
import Inicio4 from '../assets/home/rojo4.jpg';

import azul1 from '../assets/home/azul1.jpeg';
import azul2 from '../assets/home/azul2.jpeg';
import azul3 from '../assets/home/azul3.jpeg';
import azul4 from '../assets/home/azul4.jpeg';

import icolog1 from '../assets/sinex/Iconos-01.svg';
import icolog2 from '../assets/sinex/Iconos-02.svg';
import icolog3 from '../assets/sinex/Iconos-03.svg';
import icolog4 from '../assets/sinex/Iconos-04.svg';
import icolog5 from '../assets/sinex/Iconos-05.svg';
import { Icon } from '@material-ui/core';

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
         titulo: 'Buscas productos',
         imagen: Inicio1,
         ruta: 'productos'
     },
      {
          titulo: 'Servicios especializados',
          imagen: Inicio2,
          ruta: 'servicios'
      },
    {
        titulo: 'Instladores de calidad',
        imagen: Inicio3,
        ruta: 'pizarra-digital'
    },
    {
        titulo: 'Compras online',
        imagen: Inicio4,
        ruta: 'contacto'
    }
 ];

 export const proyectoAzul = [
  {
      titulo: 'Buscas Productos',
      imagen: azul1,
      ruta: 'productos'
  },
   {
       titulo: 'Mobiliario especializado',
       imagen: azul2,
       ruta: 'servicios'
   },
 {
     titulo: 'Carpinteros de calidad',
     imagen: azul3,
     ruta: 'pizarra-digital'
 },
 {
     titulo: 'Compras online',
     imagen: azul4,
     ruta: 'contacto'
 }
];

 export const innovamoRojo = [
   {
     titulo: 'Calculadora',
     ruta: 'calculadora', 
    //  icon: <ExposureIcon style={{fontSize: 70, color: '#fafafa'}}/>
     icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
              <img style={{textAlign: 'center', height:60, width:60}} src={icolog1} alt='imf'/>
            </Icon>
   },
   {
      titulo: 'Club del Instalador',
      ruta: 'conocenos',
      // icon: <PeopleIcon style={{fontSize: 70, color: '#fafafa'}}/>
      icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
              <img style={{textAlign: 'center', height:60, width:60}} src={icolog2} alt='imf'/>
            </Icon>
   },
   {
      titulo: 'Synergy Academy',
      ruta: 'capacitacion',
      // icon: <SchoolIcon style={{fontSize: 70, color: '#fafafa'}}/>
      icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
                <img style={{textAlign: 'center', height:60, width:60}} src={icolog3} alt='imf'/>
              </Icon>
    },
    {
      titulo: 'Biblioteca',
      ruta: 'capacitacion',
      // icon: <MenuBookIcon style={{fontSize: 70,  color: '#fafafa'}}/>
      icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
                <img style={{textAlign: 'center', height:60, width:60}} src={icolog4} alt='imf'/>
              </Icon>
    }
 ];
 export const innovamoAzul = [
  {
    titulo: 'Calculadora',
    ruta: 'calculadora', 
   //  icon: <ExposureIcon style={{fontSize: 70, color: '#fafafa'}}/>
    icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
             <img style={{textAlign: 'center', height:60, width:60}} src={icolog1} alt='imf'/>
           </Icon>
  },
  {
     titulo: 'Club del Carpintero',
     ruta: 'conocenos',
     // icon: <PeopleIcon style={{fontSize: 70, color: '#fafafa'}}/>
     icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
             <img style={{textAlign: 'center', height:60, width:60}} src={icolog5} alt='imf'/>
           </Icon>
  },
  {
     titulo: 'Synergy Academy',
     ruta: 'capacitacion',
     // icon: <SchoolIcon style={{fontSize: 70, color: '#fafafa'}}/>
     icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
               <img style={{textAlign: 'center', height:60, width:60}} src={icolog3} alt='imf'/>
             </Icon>
   },
   {
     titulo: 'Biblioteca',
     ruta: 'capacitacion',
     // icon: <MenuBookIcon style={{fontSize: 70,  color: '#fafafa'}}/>
     icon : <Icon style={{fontSize: 70, color: '#fafafa'}}>
               <img style={{textAlign: 'center', height:60, width:60}} src={icolog4} alt='imf'/>
             </Icon>
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