import { useState, type ChangeEvent } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import { api } from '../api';
import type { Usuarios } from '../types/Usuarios';
 
 
function LoginForm() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();
 
 
  const [usuarios , setUsuarios] = useState<Usuarios[]>([]);
 
 
  const [loading, setLoading] = useState(false);
 
  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSenha(e.target.value)
      }
 
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {  
          setEmail(e.target.value)
      }
 
  const handleLogin = async () => {        
        // setLoading(true);
        // let json = await api.CarregarLogin(email,senha);      
        // const dataArray = Array.isArray(json) ? json: [json]
        // setLoading(false);
        // setUsuarios(dataArray);  
        navigate('/manager')  
    }  

  
    const handeleRegister = () => {
      navigate("/register");
    };
 
 
  return (
   <div className='fundo'>
    <NavBar/><br />
     
      <div className="login-card"> {/* Este é o "card" que envolve tudo */}
          <h2>Login</h2>
          <div className="form-group-email">
               E-mail
              <input type="email" value={email} id="email" onChange={handleEmailChange} placeholder="Digite um e-mail" />
          </div>
          <div className="form-group-senha">
               Senha
              <input type="password" value={senha}  onChange={handleSenhaChange} id="password" placeholder="Sua senha" />
          </div>
            <div className="login-container">
                <div className="button-group">
                  <button className='login' onClick={handleLogin}>Login</button>  
                  <div className="EsqueceuSenha">
                    <a href="/redefinirSenha" className="esqueceu">Esqueceu a senha?</a>
                    <a href="/register" className="cadastrar" onClick={handeleRegister}>Cadastrar</a>
                  </div>
               
                </div>
            </div>
      </div><br /><br />
   
       <Footer/>
    </div>  
    );
  }
 
  export default LoginForm;
 