import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react'; // Importa o useState para controlar o input

function NavBar() {
  const location = useLocation();
  
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa

    const params = useParams()
  const navigate = useNavigate()

  function handleHome(){
    navigate('/home')
  }
  function handleLogin(){
    navigate('/login')
  }

  function handleDetais(){
    navigate('/detalhesGeral')
  }

  function handleRegister(){
    navigate('/register')
  }

  return (
    <div className="bar">
      <nav>        
        <div className="left-side">
          <div className="logo">
            <h3><img src="/lop.png" alt="SPORTHUB Logo" /> </h3>
          </div>            
        </div>
          <div className="search-bar">
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
          </div>
        <div className="nav-links">
          <div onClick={handleHome} >Home</div>
          <div onClick={handleDetais}>Detalhes</div>              
          <div onClick={handleLogin}> Login</div>
          <div onClick={handleRegister}>Cadastro</div>
        </div>
         
      </nav>
    </div>
  );
}

export default NavBar;