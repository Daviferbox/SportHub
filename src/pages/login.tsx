import { useState, type ChangeEvent } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/login.css';
import { api } from '../api';
import type { Usuarios } from '../types/Usuarios';


function LoginForm() {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');


  const [usuarios , setUsuarios] = useState<Usuarios[]>([]);

  
  const [loading, setLoading] = useState(false);

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSenha(e.target.value)
      }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {  
          setEmail(e.target.value)
      }

  const login = async () => {        
        setLoading(true);
        let json = await api.CarregarLogin(email,senha);       
        const dataArray = Array.isArray(json) ? json: [json]
        setLoading(false);
        setUsuarios(dataArray);    
    }   

  
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
                  <button className='login' onClick={login}>Login</button>  
                  <div className='EsqueceuSenha'>Esqueceu a senha?</div>
               
                </div>
            </div>
      </div><br /><br /><br />
    
       <Footer/> 
    </div>   
    );
  }
  
  export default LoginForm;