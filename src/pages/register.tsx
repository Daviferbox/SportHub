import NavBar from "../components/NavBar";
import "../styles/register.css";
import Footer from "../components/Footer";
import { useState, type ChangeEvent } from "react";
import { api } from "../api";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function RegistroForm() {
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [contato, setContato] = useState('');
      const [senha, setSenha] = useState('');
      const [loading, setLoading] = useState(false);
      const [mostrarSenha, setMostrarSenha] = useState(false);


      const navigate = useNavigate();


      const formatarTelefone = (tel: string) => {
    return tel
      .replace(/\D/g, '')               
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

      const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
                setNome(e.target.value)
            }

      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {  
                setEmail(e.target.value)
            }

      const handleContatoChange = (e: ChangeEvent<HTMLInputElement>) => {
                setContato(e.target.value)
            }


      const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
                setSenha(e.target.value)
            }

    const handleCriar = async () => {
    try {
        setLoading(true);

        const telefoneFormatado = formatarTelefone(contato);

        const json = await api.AdicionarUsuarios(nome, email,telefoneFormatado, senha);

        // Apenas organiza o retorno
        const dataArray = Array.isArray(json) ? json : [json];


        if(json.data){
          console.log("Usuário criado:", dataArray);
          console.log(json.message)
          navigate('/login')
          alert('Usuario cadastrado com sucesso')
        }
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
        
    } finally {
        setLoading(false);
        
    }
};
       
        
        

  return (
    <div className="fundo">
      <NavBar />
      <br />  

       <div className="register-card"> {/* Este é o "card" que envolve tudo */}
          <h2>Cadastro</h2>
      <div className="informacoes">
          <div className="form-group-register">
            <div className="form-group-nome">
                Nome do usuário <br />
                <input type="text" value={nome} onChange={handleNomeChange} placeholder="Digite o nomedo usuário" />
            </div>
       
            <div className="form-group-responsavel">
                Contato <br />
                <input type="text" value={contato} onChange={handleContatoChange} placeholder="Digite o telefone da empresa" />
            </div>
          </div>
          
          <br /><br />
          <div className="form-group-dados">
            <div className="form-group-email">
                E-mail
                <input type="email" value={email} onChange={handleEmailChange} placeholder="Digite um e-mail" />
            </div>

           <div className="form-group-senha" style={{ position: "relative", width: "100%" }}>
                      <label>Senha</label>

                      <input
                            className="input-senha"
                            type={mostrarSenha ? "text" : "password"}
                            value={senha}
                            onChange={handleSenhaChange}
                            placeholder="Sua senha"
                        />

                        <span className="eye-icon" onClick={() => setMostrarSenha(!mostrarSenha)}>
                            {mostrarSenha ? "👁️‍🗨️" : "👁️"}
                        </span>

                  </div>
               </div>
        </div> <br />

            <div className="button-group">
              {loading && <Loading />}
                    <button 
                      className="login"
                      onClick={handleCriar}
                      disabled={loading}
                    >
                      {loading ? "Carregando..." : "Cadastrar-se"}
                    </button>

                  </div>
      </div>
       <br /> <br />
    <Footer/>
    </div>
  );
}

export default RegistroForm;
