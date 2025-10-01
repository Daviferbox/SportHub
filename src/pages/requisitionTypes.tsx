import { useState } from "react";

function Requisicoes ( ) {
    const [ produtos, setProdutos] = useState<Produtos[]>([])

        const [mostrar, setMostrar] = useState(false)

        const carregarProdutos = async () => {

            let response  = await fetch("https://fakestoreapi.com/products")
            let json = await response.json()
            const dataArray = Array.isArray(json) ? json:[json]
            setProdutos(dataArray)
        }

        return (
            <div>
                <NavBar />
                <h1> Pagina Exemplo de |re3quisição</h1>
            
            </div>
        )
    
}