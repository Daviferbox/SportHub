import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { UsuarioLogadoContext } from '../contexts/contextsAuth';

function NavBar() {
  const navigate = useNavigate();
  const ctxAuth = useContext(UsuarioLogadoContext);

  function handleHome() {
    navigate('/home');
  }

  function handleLogin() {
    navigate('/login');
  }

  function handleLogout() {
    // limpa o usuário
    ctxAuth?.setEmail("");
    ctxAuth?.setIsLogged(false);

    navigate('/home'); 
  }

  function handleDetais() {
    navigate('/detalhesGeral');
  }

  function handleEventos() {
    navigate('/eventos');
  }

  function handleSobre() {
    navigate('/sobre');
  }

  return (
    <div className="bar">
      <nav>
        <div className="left-side">
          <div className="logo">
            <h3><img src="/lop.png" alt="SPORTHUB Logo" /></h3>
          </div>
        </div>

        <div className="nav-links">
          <div onClick={handleHome}>Home</div>
          <div onClick={handleDetais}>Escolas</div>
          <div onClick={handleEventos}>Eventos</div>
          <div onClick={handleSobre}>Sobre</div>

         
          {!ctxAuth?.isLogged && (
            <div onClick={handleLogin}>Login</div>
          )}

         
          {ctxAuth?.isLogged && (
            <div onClick={handleLogout}>Logout</div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
