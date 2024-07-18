import { useEffect, useState } from "react";

export function Formulario() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const [formularioCompleto, setFormularioCompleto] = useState(false);

  useEffect(() => {
    /*       const { nome, email, idade } = formulario; */
    const valores = Object.values(formulario);
    const camposPreenchidos = valores.filter((valor) => !!valor).length;

    if (camposPreenchidos === 3) {
      setFormularioCompleto(true);
    } else {
      setFormularioCompleto(false);
    }
  }, [formulario]);

  return (
    <div>
      <form>
        <input
          placeholder="Informe seu nome"
          type="text"
          className="form-control"
          onChange={(event) =>
            setFormulario((prevState) => ({
              ...prevState,
              nome: event.target.value,
            }))
          }
        />
        {/* INPUT DE E-MAIL */}
        <input
          placeholder="Informe seu e-mail"
          type="text"
          className="form-control"
          onChange={(event) =>
            setFormulario((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />

        {/* INPUT DE IDADE */}
        <input
          placeholder="Informe sua idade"
          type="text"
          className="form-control"
          onChange={(event) =>
            setFormulario((prevState) => ({
              ...prevState,
              idade: event.target.value,
            }))
          }
        />

        <button className="btn btn-primary mt-4">Cadastrar</button>
      </form>
      {/* Renderize os campos de entrada aqui */}
      {formularioCompleto && <p>Formulário totalmente preenchido!</p>}
    </div>
  );
}
