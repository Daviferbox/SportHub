import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/register.css";
import Footer from "../components/Footer";

function RegistroForm() {
 

  return (
    <div className="fundo">
      <NavBar />
      <br />  

       <div className="register-card"> {/* Este é o "card" que envolve tudo */}
          <h2>Cadastro</h2>
      <div className="informacoes">
          <div className="form-group-register">
            <div className="form-group-nome">
                Nome da instituição <br />
                <input type="text" placeholder="Digite o nome da instituição" />
            </div>
       
            <div className="form-group-responsavel">
                Nome do responsavel <br />
                <input type="text" placeholder="Digite o nome do responsavel" />
            </div>
          </div>
          
          <br /><br />
          <div className="form-group-dados">
            <div className="form-group-email">
                E-mail
                <input type="email" placeholder="Digite um e-mail" />
            </div>

            <div className="form-group-senha">
                Senha
                <input type="password" id="password" placeholder="Sua senha" />
            </div>
          </div>
        </div> <br />

            <div className="login-container">

                <div className="button-group">

                  <button className='login' >Cadastrar-se</button>  
            
                </div>

            </div>
      </div>
       <br /> <br />
    <Footer/>
    </div>
  );
}

export default RegistroForm;
