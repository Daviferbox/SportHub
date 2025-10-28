export const api = {
    AdicionarUsuarios: async (title: string, body: string, userID: string) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify
            ({
                title, 
                body, 
                userID}),
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


    CarregarLogin: async(email: string, senha:string) => {
        {
            let response = await fetch('http://localhost:3010/usuarios/login',
                {
                       method: 'POST',
            body: JSON.stringify
            ({
                email, 
                senha}),
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
}

