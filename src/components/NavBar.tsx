import { useNavigate } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  // const location = useLocation();
  

    // const params = useParams()
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

  function handleEventos(){
    navigate('/eventos')
  }

  function handleSobre(){
    navigate('/sobre')
  }

  // function handleRegister(){
  //   navigate('/register')
  // }

  return (
    <div className="bar">
      <nav>        
        <div className="left-side">
          <div className="logo">
            <h3><img src="/lop.png" alt="SPORTHUB Logo" /> </h3>
          </div>            
        </div>
         
        <div className="nav-links">
          <div onClick={handleHome} >Home</div>
          <div onClick={handleDetais}>Escolas</div> 
          <div onClick={handleEventos}>Eventos</div>             
          <div onClick={handleSobre}>Sobre</div>              
          <div onClick={handleLogin}> Login</div>
          {/* <div onClick={handleRegister}>Cadastro</div> */}
        </div>
         
      </nav>
    </div>
  );
}

export default NavBar;