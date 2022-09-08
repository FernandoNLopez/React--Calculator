import './App.css';
import brain from './imagenes/brain.webp';
import Button from './components/button.jsx'
import Screen  from './components/Screen.jsx';
import ClearButton from './components/ClearButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';
 






function App() {


 const [input, setInput] = useState('');

 const agregarinput = val => {
    setInput(input + val);
 };

 const result = () => {
  if (input) {
    setInput(evaluate(input));
  }else {
    alert("Por favor, primero ingrese una operación a calcular.");
  }
    
 };





  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={brain}
          className='logo'
          alt='brain-logo'  />
      </div>
      <div className='contenedor-calculator'>

        <Screen input={input}/>

        <div className='row'>
          <Button clicHandler={agregarinput}>1</Button>
          <Button clicHandler={agregarinput}>2</Button>
          <Button clicHandler={agregarinput}>3</Button>
          <Button clicHandler={agregarinput}>+</Button>
        </div>

        <div className='row'>
        <Button clicHandler={agregarinput}>4</Button>
        <Button clicHandler={agregarinput}>5</Button>
        <Button clicHandler={agregarinput}>6</Button>
        <Button clicHandler={agregarinput}>-</Button>
        </div>

        <div className='row'>
        <Button clicHandler={agregarinput}>7</Button>
        <Button clicHandler={agregarinput}>8</Button>
        <Button clicHandler={agregarinput}>9</Button>
        <Button clicHandler={agregarinput}>*</Button>
        </div>

        <div className='row'>
        <Button clicHandler={result} >=</Button>
        <Button clicHandler={agregarinput}>0</Button>
        <Button clicHandler={agregarinput}>.</Button>
        <Button clicHandler={agregarinput}>/</Button>
        </div>

        <div className='row'>
        <ClearButton clearHandler={() => setInput('')}>
          CLEAR
        </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
