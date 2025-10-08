// import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/sobre.css"


function LoginForm() {
  

  
  return (
   <div className='fundo'>
    <NavBar/><br />
      
      <div className="login-card"> {/* Este é o "card" que envolve tudo */}

          <div className="titulo">
            SOBRE
        </div>

          <div className="subtitulo">
               <p>Mas afinal, o que é o SportHub?</p>
          </div>
          

          <div className="explicação">
            O SportHub nasceu da paixão por unir tecnologia e esporte em um único espaço. 
            Percebemos que muitas pessoas têm vontade de praticar esportes, mas encontram dificuldade em localizar escolinhas,  
            aulas ou eventos esportivos na própria região. 
            Ao mesmo tempo, muitas escolas e treinadores enfrentam desafios 
            para divulgar suas atividades e alcançar novos alunos.

            <br></br><br></br>

            Dessa ideia surgiu o SportHub — uma plataforma criada para aproximar o esporte das pessoas. 
            Aqui, escolinhas, academias e projetos esportivos podem se cadastrar e compartilhar seus eventos, 
            treinos e aulas, enquanto os usuários encontram com facilidade as melhores opções para praticar o esporte que amam.

            <br></br><br></br>

            Mais do que um site, o SportHub é um ponto de encontro entre pessoas, paixão e movimento. 
            Acreditamos que o esporte tem o poder de transformar vidas, promover saúde e fortalecer comunidades. 
            Nosso propósito é tornar o acesso à prática esportiva mais simples, acessível e conectado para todos.
          </div>

          <div className="logo">
          <img src="../src/assets/lop.png"></img>
          </div>
          
      </div><br /><br /><br />
    
       <Footer/> 
    </div>   
    );
  }
  
  export default LoginForm;