export const api = {
    AdicionarUsuarios: async (nomeUsuario: string, emailUsuario: string,senhaUsuario: string,contatoUsuario: string) =>{
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
    
    CarregarTodosUsuarios: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json = await response.json();
        return json
    },

    CarregarUnicoUsuario: async (param: string) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1' + param);
        let json = await response.json();
        return json;
    },


    CarregarLogin: async( emailUsuario: string, senhaUsuario:string) => {
        {
            let response = await fetch('https://localhost:3000/usuarios/login',
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

    AdicionarEvento: async( nomeEvento: string,descricaoEvento:string,horarioEvento: string,diaEvento:string,localEvento: string,idadeEvento:string,esporteEvento: string) => {
        let response = await fetch('https://localhost:3000/eventos',
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

  }
}

