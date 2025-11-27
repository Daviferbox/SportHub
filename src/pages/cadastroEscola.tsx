import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/cadastroEventoEscola.css";
import { api } from "../api";
import Loading from "../components/Loading";
import { useState, type ChangeEvent } from "react";
 
export default function CadastroEscola() {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [dias, setDias] = useState("");
  const [local, setLocal] = useState("");
  const [faixaEtaria, setFaixaEtaria] = useState("");
  const [esporte, setEsporte] = useState("");
  const [loading,setLoading] = useState(false)

        const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
                  setNome(e.target.value)
          }

        const handleHorarioChange = (e: ChangeEvent<HTMLInputElement>) => {
                setHorario(e.target.value)
        }

        const handleDiasChange = (e: ChangeEvent<HTMLInputElement>) => {
                setDias(e.target.value)
        } 

        const handleLocalChange = (e: ChangeEvent<HTMLInputElement>) => {
                setLocal(e.target.value)
        }

        const handleFaixaEtariaChange = (e: ChangeEvent<HTMLInputElement>) => {
                setFaixaEtaria(e.target.value)
        }

        const handleEsporteChange = (e: ChangeEvent<HTMLInputElement>) => {
                setEsporte(e.target.value)
        }


        const handleCriar = async () => {
            try {
                setLoading(true);
        
                const json = await api.AdicionarEscola(nome, horario,dias, local, faixaEtaria,esporte);
        
                // Apenas organiza o retorno
                const dataArray = Array.isArray(json) ? json : [json];
        
        
                if(json.data){
                  console.log("Usuário criado:", dataArray);
                  console.log(json.message)
                  alert('Escola cadastrada com sucesso')
                }
            } catch (error) {
                console.error("Erro ao criar escola:", error);
                alert("Ocorreu um erro ao cadastrar. Tente novamente.");
                
            } finally {
                setLoading(false);
                
            }
        };
 
 
  return (
    <div>
      <NavBar />
    <div className="page-container">
      <br /><br /><br /><br />
      <div className="card">
        <h1>Cadastrar Escola</h1>
 
        
          <label>Nome da Escola</label>
          <input
            placeholder="Ex: Escolinha Falcões"
            value={nome}
            onChange={handleNomeChange}
          />
 
          <label>Horário de Funcionamento</label>
          <input
            placeholder="Ex: 08h às 18h"
            value={horario}
            onChange={handleHorarioChange}
          />
 
          <label>Dias que está aberta</label>
          <input
            placeholder="Ex: Segunda a Sexta"
            value={dias}
            onChange={handleDiasChange}
          />
 
          <label>Local</label>
          <input
            placeholder="Ex: Rua Tal, 282 - Centro"
            value={local}
            onChange={handleLocalChange}
          />
 
          <label>Faixa Etária</label>
          <input
            placeholder="Ex: 6 a 14 anos"
            value={faixaEtaria}
            onChange={handleFaixaEtariaChange}
          />
 
          <label>Esporte Praticado</label>
          <input
            placeholder="Ex: Futebol"
            value={esporte}
            onChange={handleEsporteChange}
          />
        <div className="cadastro">
          {loading && <Loading />}
          <button 
           className="cadastro_escola"
           onClick={handleCriar}
           disabled={loading}
           >
            {loading ? 'Carregando...' : 'Cadastrar Escola'}
            </button>
          </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}
 