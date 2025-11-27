import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import "../styles/cadastroEventoEscola.css";
 
export default function CadastroEscola() {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [dias, setDias] = useState("");
  const [local, setLocal] = useState("");
  const [faixaEtaria, setFaixaEtaria] = useState("");
  const [esporte, setEsporte] = useState("");
 
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Escola cadastrada com sucesso!");
  };
 
  return (
    <div>
      <NavBar />
    <div className="page-container">
      <br /><br /><br /><br />
      <div className="card">
        <h1>Cadastrar Escola</h1>
 
        <form onSubmit={enviar}>
          <label>Nome da Escola</label>
          <input
            placeholder="Ex: Escolinha Falcões"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
 
          <label>Horário de Funcionamento</label>
          <input
            placeholder="Ex: 08h às 18h"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
 
          <label>Dias que está aberta</label>
          <input
            placeholder="Ex: Segunda a Sexta"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          />
 
          <label>Local</label>
          <input
            placeholder="Ex: Rua Tal, 282 - Centro"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
 
          <label>Faixa Etária</label>
          <input
            placeholder="Ex: 6 a 14 anos"
            value={faixaEtaria}
            onChange={(e) => setFaixaEtaria(e.target.value)}
          />
 
          <label>Esporte Praticado</label>
          <input
            placeholder="Ex: Futebol"
            value={esporte}
            onChange={(e) => setEsporte(e.target.value)}
          />
 
          <button type="submit">Cadastrar Escola</button>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
}
 