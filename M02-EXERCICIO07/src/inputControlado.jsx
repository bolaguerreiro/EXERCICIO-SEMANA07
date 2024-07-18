import { Component } from "react";

class InputControlado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoDigitado: "",
    };
  }

  // Função para atualizar o estado com o texto digitado
  handleChange = (event) => {
    this.setState({ textoDigitado: event.target.value });
  };

  render() {
    const { textoDigitado } = this.state;

    return (
      <div>
        <input
          type="text"
          value={textoDigitado} // Definindo o valor do input como o estado atual
          onChange={this.handleChange} // Evento onChange para atualizar o estado
          placeholder="Digite algo..."
        />
        <p>Texto digitado: {textoDigitado}</p> {/* Exibindo o texto digitado */}
      </div>
    );
  }
}

export default InputControlado;
