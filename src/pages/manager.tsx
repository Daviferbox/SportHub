import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/register.css";

function RegistroForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const dados = { nome, email, senha };
    console.log("Dados enviados:", dados);
  };

  return (
    <>
      <NavBar />
      <div className="registro-container">
        <div className="registro-info">
          <div className="overlay">
            <h2>
              Cadastre-seu evento<br />
              personalizado<br />
              de forma rápida e fácil.
            </h2>
          </div>
        </div>

        <div className="registro-form">
          <h2>Preencha seus dados</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type="submit">Prosseguir</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistroForm;
