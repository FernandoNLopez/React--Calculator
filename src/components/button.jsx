import React from 'react';
import '../stylesheets/Button.css'

function Button(props) {
    const esOperador = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    }


    return (
      <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick= {() => props.clicHandler(props.children)}>
        {props.children}
      </div>

       
    );

}

export default Button;