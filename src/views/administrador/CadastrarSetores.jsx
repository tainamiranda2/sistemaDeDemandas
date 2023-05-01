import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

export const CadastrarSetores =()=>{
    const history=useNavigate()
    const [nome_setor,setNomeSetor]=useState('')
    const [usuario_id]=useState('3')
    
        const CadastroSetores=async e=>{
            e.preventDefault();
            //console.log(name)
            let mudarUsuario=parseInt(usuario_id)
            const res=await axios.post("http://localhost:81/api-demanda/setor/add/",{
                nome_setor:nome_setor,
               
                usuario_id:mudarUsuario
               
            })
            if(res.status==200){
                history("/administrador/VerSetores");
            }else{
                alert("Tem algum dado errado")
            }
  
}
    return (
        <div>
            <h1>Cadastre setores</h1>
            <form onSubmit={CadastroSetores}> 
            <Input
            text="Nome do setor"
            type="text"
            placeholder="Informe o nome  do setor"
            value={nome_setor}
            name={nome_setor}
            onChange={(e)=>setNomeSetor(e.target.value)}
          />
           
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>
        </div>

    )
}