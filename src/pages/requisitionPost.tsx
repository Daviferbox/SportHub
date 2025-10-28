import { useState, type ChangeEvent } from "react";

type Props = {
    onAdd: (title:string , body: string) => void;
}

function RequisicaoPost(){
    const [addTitle,setTitle] = useState('');
    const [addBody,setBody] = useState('');

    const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
    }

     const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)
    }

    // const handleAddClick = () => {
    //     if (addTitle && addBody){

    //        onAdd(addTitle ,addBody);

    //     }else{
    //         alert('Preencha o espaço vazio')
    //     }
    // }

    return(
        <div>
           <input type="text" name="" id="" placeholder="ola" />
        </div>
    )
}

export default RequisicaoPost;


