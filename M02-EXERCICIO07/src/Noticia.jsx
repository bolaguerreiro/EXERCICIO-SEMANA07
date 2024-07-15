import { useState, useEffect } from "react";



function NoticiaDestaque() {

  const [tituloNoticia, setTituloNoticia] = useState(null);
  
  // Função para fazer a requisição à API da IBGE
  async function fetchNoticiaDestaque() {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"
      );
      const data = await response.json();
      const primeiraNoticia = data.items[0].titulo; // Pega a primeira notícia de destaque
      setTituloNoticia(primeiraNoticia);

    } catch (error) {
      console.error("Erro ao obter notícia de destaque:", error);
    }
  }

  useEffect(() => {
    fetchNoticiaDestaque();
  }, []);

  return (
    <div>
      <h1>Notícia de Destaque</h1>
      {tituloNoticia ? <p>{tituloNoticia}</p> : <p>Carregando...</p>}
    </div>
  );
}

export default NoticiaDestaque;
