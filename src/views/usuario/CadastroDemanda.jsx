import React from 'react';
import Input from "../../components/input/Input";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState} from 'react';


export const CadastroDemanda = () => {

    const [nome_demanda, setNomeDemanda] = useState('')
    const [qtd, setQtd] = useState('')
    const [setor_id] = useState('1')
    const [status_id] = useState('3')
    const [tipo, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [usuario_id]=useState('3')
    const history=useNavigate()

    const createDemanda= async(e) =>{
        e.preventDefault();
      let mudarStatus=parseInt(status_id)
        let mudarSetor=parseInt(setor_id)
     let   mudarUsuario=parseInt(usuario_id)
        //console.log(name)
        const res = await axios.post("http://localhost:81/api-demanda/demandas/add/", {
            nome_demanda: nome_demanda,
            qtd: qtd,
            tipo: tipo,
            descricao: descricao,
            status_id:mudarStatus,
            setor_id:mudarSetor,
            usuario_id:  mudarUsuario

        })
       // console.log(res)
       if(res.status==200){
        history("/usuario");
    }else{
        alert("Tem algum dado errado")
    }
 
    }
    return (
        <div>
            <nav>
      
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>

            </nav>

            <h1>Bem vindo ao sistema, Maria</h1>
            <form onSubmit={createDemanda}>
                <h2>Cadastrar uma demanda</h2>
                <Input text="Nome: " 
                type="text"
                  placeholder="Digite o nome da demanda"
                  value={nome_demanda}
                  name={nome_demanda}
                  onChange={(e)=>setNomeDemanda(e.target.value)}
                   required />

                <Input
                 text="QTD: "
            value={qtd}
            name={qtd}
            onChange={(e)=>setQtd(e.target.value)}
                 type="number" 
                 placeholder="Digite o a quantidade da demanda" 
                 required />

                <Input text="Tipo: " 
                type="text"
                value={tipo}
                name={tipo}
                onChange={(e)=>setTipo(e.target.value)}
                 placeholder="Digite o tipo da demanda"
                  required />

                <Input text="Descrição: " 
                type="text" 
                value={descricao}
                name={descricao}
                onChange={(e)=>setDescricao(e.target.value)}
                placeholder="Digite a digite" required />
                
                <button>Confimar solicitação</button>




            </form>

        </div>


    )
}