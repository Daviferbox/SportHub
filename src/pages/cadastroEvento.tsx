import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import "../styles/cadastroEventoEscola.css";
 
export default function CadastroEvento() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [horario, setHorario] = useState("");
  const [dia, setDia] = useState("");
  const [recorrente, setRecorrente] = useState(false);
  const [diasRecorrentes, setDiasRecorrentes] = useState<string[]>([]);
  const [local, setLocal] = useState("");
  const [idade, setIdade] = useState("");
  const [esporte, setEsporte] = useState("");
 
  const alterarDias = (d: string) => {
    setDiasRecorrentes((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };
 
  const diasSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
 
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Evento cadastrado!");
  };
 
  return (
    <div>
      <NavBar />
    <div className="page-container">
      <br /><br /><br /><br />
      <div className="card">
        <h1>Cadastrar Evento</h1>
 
        <form onSubmit={enviar}>
          <label>Nome do Evento</label>
          <input
            placeholder="Ex: Torneio Sub-15"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
 
          <label>Descrição</label>
          <textarea
            placeholder="Descreva o evento..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
 
          <label>Horário</label>
          <input
            placeholder="Ex: 14h"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
 
          <label>Dia</label>
          <input
            placeholder="Ex: 12/10/2025"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
 
          <label>Evento Recorrente?</label>
          <select
            value={recorrente ? "sim" : "nao"}
            onChange={(e) => setRecorrente(e.target.value === "sim")}
          >
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
          </select>
 
          {recorrente && (
            <div className="checkbox-group">
              <p>Selecione os dias da semana:</p>
 
              {diasSemana.map((d) => (
                <label key={d} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={diasRecorrentes.includes(d)}
                    onChange={() => alterarDias(d)}
                  />
                  {d}
                </label>
              ))}
            </div>
          )}
 
          <label>Local</label>
          <input
            placeholder="Ex: Arena SportHub"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
 
          <label>Idade</label>
          <input
            placeholder="Ex: 12 a 16 anos"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
 
          <label>Esporte</label>
          <input
            placeholder="Ex: Futsal"
            value={esporte}
            onChange={(e) => setEsporte(e.target.value)}
          />
 
          <button type="submit">Cadastrar Evento</button>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
}
 