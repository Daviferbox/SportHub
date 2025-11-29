import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/detaisAll.css";
import Footer from "../components/Footer";
import { api } from "../api";
import type { Eventos } from "../types/Eventos";

const ListaEventos = () => {
  const [evento, setEvento] = useState<Eventos[]>([]);

  useEffect(() => {
    CarregarEventosCards();
  }, []);

  const CarregarEventosCards = async () => {
    let json = await api.ListarEventos();
    const dataArray = Array.isArray(json) ? json : [json];
    setEvento(dataArray);
  };

  return (
    <div className="detalhes-page">
      <NavBar />
      <br /><br /><br /><br /><br /><br />

      {/* AGORA SIM: GRID COM 3 POR LINHA */}
      <div className="escolas-list">
        {evento.map((item, key) => (
          <div key={key} className="escola-card">
            <h2>{item.NOME}</h2>
            <h3><strong>Modalidade:</strong> {item.ESPORTE}</h3>
             <p><strong>Descrição::</strong> {item.DESCRICAO}</p>
            <p><strong>Dias:</strong> {item.DIA}</p>
            <p><strong>Horário:</strong> {item.HORARIO}</p>
            <p><strong>Faixa Etária:</strong> {item.IDADE}</p>
            <p><strong>Local:</strong> {item.LOCAL}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ListaEventos;
