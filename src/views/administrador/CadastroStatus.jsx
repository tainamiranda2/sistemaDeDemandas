import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
export const CadastroStatus =()=>{
    const history=useNavigate()
    const [name,setName]=useState('pedro')
    
        const CadastroStatus=async e=>{
            e.preventDefault();
            //console.log(name)
    
    if(name==='pedro'){
    history("/administrador");
    }
    
    
        }
    return (
        <div>
            <h1>Olá , sua página de cadastro de status</h1>
            <form onSubmit={CadastroStatus}> 
            <Input
            text="Nome do colaboraador"
            type="text"
            placeholder="Informe o nome  do colaborador"
          name={name}
          />
           
          
           
           
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>
    )
}