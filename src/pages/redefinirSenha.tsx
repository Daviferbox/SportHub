import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/redefinirSenha.css"
import Footer from "../components/Footer"; 


function RedefinirSenha() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
    <NavBar />
    <div className="pagina-redefinir-senha">

      <div className="fundo">
        <br></br><br></br>
        <div className="login-card">
          <h1 className="titulo">REDEFINIR SENHA</h1>

          <p className="subtexto-secundario">Estamos aqui para ajudar você a recuperar o acesso com segurança.</p>

        <br/><br/>

          <p className="passo-indicador">Digite seu e-mail e enviaremos um link para criar uma nova senha.</p>

        
          <form className="formulario" onSubmit={handleSubmit}>
            <input
              type="email"
              className="campo-texto"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />

          

            <button className="botao-enviar" type="submit">
              Enviar Link de Redefinição
            </button>
          </form>
            
            <p className="mensagem">
              Caso não encontre o e-mail na sua caixa de entrada, verifique também a caixa de spam.
            </p>

          <br/>   

          <Link to="/" className="link-voltar">
            Voltar ao Login
          </Link>

          <br/>

          <div className="logo">
          <img src="../src/assets/lop.png"></img>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default RedefinirSenha;
