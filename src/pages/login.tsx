import '../styles/login.css';


function LoginForm() {
   
  
  return (
      <div className="login-card"> {/* Este é o "card" que envolve tudo */}
        <h2>Login</h2>
        <div className="form-group-email">
          E-mail
          <input type="email" id="email" placeholder="Digite um e-mail" />
        </div>
        <div className="form-group-senha">
          <label htmlFor="password"style={{textAlign: 'left'}}>Senha</label>
          <input type="password" id="password" placeholder="Sua senha" />
        </div>
          <div className="login-container">
            <div className="button-group">
              <button className="login-button">Login</button>
              <button className="back-button">voltar</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default LoginForm;