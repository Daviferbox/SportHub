import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/cadastroEventoEscola.css";
 
export default function EscolhaCadastro() {
  const navigate = useNavigate();
 
  return (
    <div>
      <NavBar />
    <div className="page-container">

      <br /><br /><br /><br />

      <div className="card">
        <h1>O que deseja cadastrar?</h1>
 
        <div className="btn-row">
          <button onClick={() => navigate("/cadastrar-escola")}>
            Cadastrar Escola
          </button>
 
          <button onClick={() => navigate("/cadastrar-evento")}>
            Cadastrar Evento
          </button>
        </div>
      </div>
    </div>
      <br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}
 