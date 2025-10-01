
type Props = {
    dados: {
        id: string
        nome: string
        esporte:string
        email: string

    }
}

function ItemLista ({dados}: Props ){
    return(
        <div>
            <hr />
            id: {dados.id} <br />
            nome: {dados.nome} <br />
            esporte: {dados.esporte} <br />
            email: {dados.email} <br />
        </div>
    )
}
export default ItemLista