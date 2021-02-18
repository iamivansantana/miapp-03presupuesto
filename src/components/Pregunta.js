import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardaPresupuesto,guardaRestante,actualizarPregunta }) => {

    //Definir el state de la cantidad
    const [cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = (e)=>{
        //parseInt Combierte los numeros definidos como string a number
        guardarCantidad(parseInt(e.target.value,10));
    }
    //Submit para definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        
        //? Si se pasa la validacion
        guardarError(false);
        guardaPresupuesto(cantidad);
        guardaRestante(cantidad);
        actualizarPregunta(false);
       
    }


    return (
        <>
          <h2>Coloca Tu Presupuesto</h2>  
          {error? <Error mensaje="El Presupuesto es Incorrecto" />  :null}
          <form
            onSubmit={agregarPresupuesto}
          >
              <input
                type="number"
                className="u-full-width"
                placeholder="$ Coloca tu Presupuesto"
                onChange={definirPresupuesto}
              />
              <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
              />
          </form>
        </>
    )
}

Pregunta.propTypes={
  guardaPresupuesto: PropTypes.func.isRequired,
  guardaRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta
