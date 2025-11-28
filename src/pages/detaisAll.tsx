// DetalhesGerais.tsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/detaisAll.css";
import Footer from "../components/Footer";
import { api } from "../api";
import type { Escolas } from "../types/Escolas";

const DetalhesGerais = () => {
  const [escola, setEscola] = useState<Escolas[]>([]);

  useEffect(() => {
    CarregarEscolasCards();
  }, []);

  const CarregarEscolasCards = async () => {
    let json = await api.ListarEscolas();
    const dataArray = Array.isArray(json) ? json : [json];
    setEscola(dataArray);
  };

  return (
    <div className="detalhes-page">
      <NavBar />
      <br /><br /><br /><br /><br /><br />

      {/* AGORA SIM: GRID COM 3 POR LINHA */}
      <div className="escolas-list">
        {escola.map((item, key) => (
          <div key={key} className="escola-card">
            <h2>{item.NOME}</h2>
            <h3><strong>Modalidade:</strong> {item.ESPORTE}</h3>
            <p><strong>Dias:</strong> {item.DIA}</p>
            <p><strong>Horário:</strong> {item.HORARIO}</p>
            <p><strong>Faixa Etária:</strong> {item.FAIXAETARIA}</p>
            <p><strong>Local:</strong> {item.LOCAL}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DetalhesGerais;
