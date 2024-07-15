import { useState } from 'react'
import './App.css'

function Contador() {
  const [valor, setValor] = useState(0);

  const aumentar = () => {
    setValor(valor + 1);
  };

  const diminuir = () => {
    setValor(valor - 1);
    };

  return (
    <div style={{ gap: 16, marginTop: 32 }}>
      <h1>Contador</h1>
      
      <button onClick={aumentar} style={{marginLeft: 15}}>+</button> 
      <span style={{marginLeft: 15, marginRight: 15}}>{valor}</span> 
      <button onClick={diminuir} style={{marginLeft: 15}}>-</button>
    </div>
  );
}

export default Contador
