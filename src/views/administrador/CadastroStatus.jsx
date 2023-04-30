import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
export const CadastroStatus =()=>{
    const history=useNavigate()
    const [nome_status,setNomeStatus]=useState('')
    const [usuario_id]=useState('3')
    
        const CadastroStatus=async e=>{
            e.preventDefault();
            let mudarUsuario=parseInt(usuario_id)
            const res=await axios.post("http://localhost:81/api-demanda/status/add/",{
                nome_status:nome_status,
                usuario_id:mudarUsuario,
               
            })
            if(res.status==200){
                history("/administrador/VerStatus");
            }else{
                alert("Tem algum dado errado")
            }
    
        }
    return (
        <div>
            <h1>Olá , sua página de cadastro de status</h1>
            <form onSubmit={CadastroStatus}> 
            <Input
            text="Nome do status"
            type="text"
            placeholder="Informe o nome  do status"
            value={nome_status}
            name={nome_status}
            onChange={(e)=>setNomeStatus(e.target.value)}
          />
           
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>
    )
}