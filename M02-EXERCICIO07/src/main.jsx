import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.jsx' */
import "./index.css";
import InputControlado from "./inputControlado";
/* import Contador from './Contador.jsx' */
import NoticiaDestaque from "./Noticia.jsx";
import ListaDeItens from "./ListarItens.jsx";
import { Formulario } from "./exercicio04.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ListaDeItens />
    <NoticiaDestaque />
    <Formulario />
    <InputControlado />
  </React.StrictMode>
);
