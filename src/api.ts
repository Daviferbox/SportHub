export const api = {
    // Usuarios
    
    AdicionarUsuarios: async (nomeUsuario: string, emailUsuario: string,contatoUsuario: string,senhaUsuario: string,) =>{
        let response = await fetch('http://localhost:3000/usuarios/criacao',
        {
            method: 'POST',
            body: JSON.stringify
            ({
                NOME: nomeUsuario,
                EMAIL: emailUsuario, 
                CONTATO: contatoUsuario,
                SENHA:senhaUsuario
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )   
        let json = await response.json();

        console.log(json);
        return json;
    },
    

    CarregarLogin: async( emailUsuario: string, senhaUsuario:string) => {
        {
            let response = await fetch('http://localhost:3000/usuarios/login',
                {
                       method: 'POST',
            body: JSON.stringify
            ({
                EMAIL: emailUsuario, 
                SENHA:senhaUsuario,}),
            headers:{
                'Content-Type': 'application/json'
            }
                }
            );
            let json = await response.json();

            console.log(json);
            return json;
            
    }
  },

  RemoverUsuario: async (id: string) => {
  const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
    method: 'DELETE'
  });

  const json = await response.json();
  console.log(json);
  return json;
},

// Usuarios


// Eventos

    AdicionarEvento: async( nomeEvento: string,descricaoEvento:string,horarioEvento: string,diaEvento:string,localEvento: string,idadeEvento:string,esporteEvento: string) => {
        let response = await fetch('http://localhost:3000/eventos',
                {
                       method: 'POST',
            body: JSON.stringify
            ({
                NOME: nomeEvento,
                DESCRICAO: descricaoEvento,
                HORARIO: horarioEvento,
                DIA: diaEvento,
                LOCAL: localEvento,
                IDADE: idadeEvento,
                ESPORTE: esporteEvento
                }),
            headers:{
                'Content-Type': 'application/json'
            }
                }
            );
            let json = await response.json();

            console.log(json);
            return json;

  },

  ListarEventos: async () => {
    const response = await fetch(`http://localhost:3000/eventos/listar`);
    return response.json();
  },




//   Eventos


// Escolas
AdicionarEscola: async( nomeEscola: string,horarioEscola: string,diaEscola:string,localEscola: string,faixaEtariaEscola:string,esporteEscola: string) => {
        let response = await fetch('http://localhost:3000/escola/criar',
                {
                       method: 'POST',
            body: JSON.stringify
            ({
                NOME: nomeEscola,
                HORARIO: horarioEscola,
                DIA: diaEscola,
                LOCAL: localEscola,
                FAIXAETARIA: faixaEtariaEscola,
                ESPORTE: esporteEscola
                }),
            headers:{
                'Content-Type': 'application/json'
            }
                }
            );
            let json = await response.json();

            console.log(json);
            return json;

  },


   ListarEscolas: async () => {
    const response = await fetch(`http://localhost:3000/escola/listar`);
    return response.json();
  },







// Escolas


  


}



