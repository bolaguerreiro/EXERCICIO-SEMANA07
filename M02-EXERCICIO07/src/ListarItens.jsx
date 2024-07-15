import { useState } from 'react';

function ListaDeItens() {
  const [inputValue, setInputValue] = useState('');
  const [lista, setLista] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const adicionarItem = () => {
    if (inputValue.trim() !== '') {
      setLista([...lista, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{alignItems:'center', marginLeft:15}}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem} style= {{marginLeft: 15}}>Adicionar</button>

      {lista.length > 0 && (
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDeItens;