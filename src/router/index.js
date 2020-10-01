import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Bienvenido } from "../views/bienvenido/Bienvenido";
import { Home } from "../views/home/Home";
import { Contenido } from "../views/contenido/Contenido";
import { Servicios } from "../views/servicios/Servicios";
import { Nosotros } from "../views/nosotros/Nosotros";
import { Contacto } from "../views/contacto/Contacto";
import { Conocenos } from "../views/instalador/Conocenos";
import { PizarraDigital } from "../views/instalador/PizarraDigital";
import { Calculadora } from "../views/instalador/Calculadora";
import { MiTarjeta } from "../views/instalador/MiTarjeta";
import { FormularioPreregistro } from "../views/instalador/Formularios/FormularioPreregistro";
import { CodigoQr } from "../views/qr/CodigoQr";
import ViewProducto from "../views/productos/Productos";
import { Capacitacion } from "../views/instalador/capacitaciones/Capacitacion";
import Layout from "../layouts";
import { Puntaje } from "../views/puntaje/Puntaje";

export default () => {
    return(
        <Router>
          <Switch>
            <Route path='/' 
                   component={Bienvenido} 
                   exact/>
            <Route path='/home/:path?'>
              <Layout>
                    <Switch>
                      <Route path='/home' exact component={Home} />
                      <Route path='/home/nosotros' component={Nosotros} />
                      <Route path='/home/productos' component={ViewProducto} />
                      <Route path='/home/contenido/:id' component={Contenido} />
                      <Route path='/home/servicios' component={Servicios} />
                      <Route path='/home/conocenos' component={Conocenos} />
                      <Route path='/home/capacitacion' component={Capacitacion} />
                      <Route path='/home/mi-tarjeta' component={MiTarjeta} />
                      <Route path='/home/pizarra-digital' component={PizarraDigital} />
                      <Route path='/home/formulario-preregistro' component={FormularioPreregistro} />
                      <Route path='/home/calculadora' component={Calculadora} />
                      <Route path='/home/contacto' component={Contacto} />
                      <Route path='/home/puntos/:ci' component={Puntaje} />
                    </Switch>
              </Layout>
            </Route>
            <Route path='/qr/:ci' 
                   component={CodigoQr} />
          </Switch>
      </Router>
    )
};