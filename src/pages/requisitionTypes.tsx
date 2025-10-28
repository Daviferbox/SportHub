import { useState } from "react";
import type { Produto } from "../types/Products";
import { api, } from "../api";

function Requisicoes ( ) {
    const [ produtos, setProdutos] = useState<Produto[]>([])

        const [mostrar, setMostrar] = useState(false)

        const carregarProdutos = async () => {
            setMostrar(false);
            let json = await api.CarregarTodosUsuarios();
            const dataArray = Array.isArray(json) ? json:[json]
            setMostrar(true);
            setProdutos(dataArray)
        }

        return (
            <div>
                Ola
                <h1> Pagina Exemplo de |re3quisição</h1>
                <button onClick={carregarProdutos}>Carregar Produtos</button>
            
            </div>
        )
    
}

export default Requisicoes;