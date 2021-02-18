import React, { useEffect, useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import  Listado  from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {
  //Definir state
  const [presupuesto,guardaPresupuesto]= useState(0);
  const [restante,guardaRestante]= useState(0);
  const [mostrarPregunta,actualizarPregunta]=useState(true);
  const [gastos,guadarGastos] = useState([]);
  const [gasto,guardarGasto] = useState({});
  const [creargasto,guardarCrearGasto]=useState(false);

  //useEffect que actualiza el restante
  useEffect(()=>{
    if (creargasto) {
      
      //agrega el nuevo presupuesto
      guadarGastos([
        ...gastos,gasto
      ]);

      //resta le presupuesto actual
       const presupuestoRestante = restante-gasto.cantidad;
       guardaRestante(presupuestoRestante); 

      //Resetear a False
      guardarCrearGasto(false); 
    }
  },[gasto,creargasto,gastos,restante]);

  //Funcion Cuando agreguemos un nuevo Gasto
  // const agregarNuevoGasto = gasto =>{
    
  // }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
            
            {/* Carga Condicionar de Un Componente */}
            {mostrarPregunta
              ?
              (<Pregunta
                guardaPresupuesto={guardaPresupuesto}
                guardaRestante={guardaRestante}
                actualizarPregunta={actualizarPregunta}
              />) 
              :
              (<div className="row">
                <div className="one-half column">
                  <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>)
            }
            
        </div>
      </header>
    </div>
  );
}

export default App;
