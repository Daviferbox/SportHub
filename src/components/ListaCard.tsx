import ItemLista from "./index"

function Card(){

type Esporte = {
  id: string
  nome: string
  esporte: string
  email: string
}

let listaEsporte: Esporte[] = [
  { id: "1", nome: "João", esporte: "Futebol", email: "futebol@sporthub.com" },
  { id: "2", nome: "Maria", esporte: "Vôlei", email: "volei@sporthub.com" },
  { id: "3", nome: "Pedro", esporte: "Basquete", email: "basquete@sporthub.com" },
  { id: "4", nome: "Ana", esporte: "Tênis", email: "tenis@sporthub.com" },
  { id: "5", nome: "Lucas", esporte: "Natação", email: "natacao@sporthub.com" }
]


        return(
            <>
            
                <div>
                    <h2>Lista de Esportes</h2>
                    {listaEsporte.map((item) => (
                    <ItemLista key={item.id} dados={item} />
                    ))}
                </div>
                <br />
                    <div>
                        <h2>Lista componente</h2>
                            {listaEsporte.map ((item, index)=> (
                                <ItemLista key={index} dados={item} />
                            )
                            )}
                   </div>  
                   <br /> <br />
                <div >
                    <h2>Lista esportes</h2>
                    {listaEsporte.map((item) =>(
                        <div key= {item.id}>
                            <br />
                        </div>
                    ))}

                </div>
            </>
        )

}

export default Card