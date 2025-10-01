import { useState } from "react";
import NavBar from "../components/NavBar";
import type { Produto } from "../types/Products";
 
function Requisicoes () {
 
    const [produtos , setProdutos] = useState<Produto[]>([]);
 
    const carregarProdutos = () => {      
        fetch("https://fakestoreapi.com/products/")        
        .then((response) => {
                return response.json();
        })        
        .then((json) => {
            setProdutos(json);
        } )  
    }
 
    return (
    <div>
        <NavBar />
       
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>
 
        <hr /><br />
        {/* Criando botão para aplicação da função de busca mediante ao clique. */}
        <button onClick={carregarProdutos}> Carregar Produtos </button>
          <br />
            {/* Apenas exibe a quantidade de registros retornados. */}
            Total de produtos: {produtos.length}
            <br /><hr />
            {/* <button> <Link to="../requisicoestype">Ir para Requisições com Types</Link> </button> */}
        <div>
            {produtos.map((item, index) => (
                <div key={index}>
                    <img src={item.image} className="products"/>
                    {item.title}
                    <br />
                    {item.description}
                    <br />
                    <hr />

                </div>
            ))}
        
        </div>
 
     
    </div>
    )
}
 
export default Requisicoes;