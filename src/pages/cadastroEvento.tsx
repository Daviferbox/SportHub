import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState, type ChangeEvent } from "react";
import "../styles/cadastroEventoEscola.css";
import { api } from "../api";
import Loading from "../components/Loading";
 
export default function CadastroEvento() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [horario, setHorario] = useState("");
  const [dia, setDia] = useState("");
  const [local, setLocal] = useState("");
  const [idade, setIdade] = useState("");
  const [esporte, setEsporte] = useState("");
  const [loading,setLoading] = useState(false)
 
  
    const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
            setNome(e.target.value)
    }

    const handleDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
            setDescricao(e.target.value)
    }

    const handleHorarioChange = (e: ChangeEvent<HTMLInputElement>) => {
            setHorario(e.target.value)
    }

    const handleDiaChange = (e: ChangeEvent<HTMLInputElement>) => {
            setDia(e.target.value)
    }

    const handleLocalChange = (e: ChangeEvent<HTMLInputElement>) => {
            setLocal(e.target.value)
    }

    const handleIdadeChange = (e: ChangeEvent<HTMLInputElement>) => {
            setIdade(e.target.value)
    }

    const handleEsporteChange = (e: ChangeEvent<HTMLInputElement>) => {
            setEsporte(e.target.value)
    }
 
 
    const handleCriar = async () => {
                try {
                    setLoading(true);
            
                    const json = await api.AdicionarEvento(nome,descricao, horario,dia, local,idade,esporte);
            
                    // Apenas organiza o retorno
                    const dataArray = Array.isArray(json) ? json : [json];
            
            
                    if(json.data){
                      console.log("Usuário criado:", dataArray);
                      console.log(json.message)
                      alert('Evento cadastrado com sucesso')
                    }
                } catch (error) {
                    console.error("Erro ao criar evento:", error);
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
        <h1>Cadastrar Evento</h1>
 
       
          <label>Nome do Evento</label>
          <input
            placeholder="Ex: Torneio Sub-15"
            value={nome}
            onChange={handleNomeChange}
          />
 
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Descreva o evento..."
            value={descricao}
            onChange={handleDescricaoChange}
          />
 
          <label>Horário</label>
          <input
            placeholder="Ex: 14h"
            value={horario}
            onChange={handleHorarioChange}
          />
 
          <label>Dia</label>
          <input
            placeholder="Ex: 12/10/2025"
            value={dia}
            onChange={handleDiaChange}
          />
 
          
 
          <label>Local</label>
          <input
            placeholder="Ex: Arena SportHub"
            value={local}
            onChange={handleLocalChange}
          />
 
          <label>Idade</label>
          <input
            placeholder="Ex: 12 a 16 anos"
            value={idade}
            onChange={handleIdadeChange}
          />
 
          <label>Esporte</label>
          <input
            placeholder="Ex: Futsal"
            value={esporte}
            onChange={handleEsporteChange}
          />
          <div className="cadastro">
            {loading && <Loading />}
          <button type="submit"
          onClick={handleCriar}
          disabled={loading}
          >
             {loading ? 'Carregando...' : 'Cadastrar Evento'}
            </button>
          </div>
       
      </div>
    </div>
      <Footer />
    </div>
  );
}
 