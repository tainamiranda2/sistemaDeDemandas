import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

export const CadastrarSetores =()=>{
    const history=useNavigate()
    const [name,setName]=useState('pedro')
    
    
        const CadastroSetores=async e=>{
            e.preventDefault();
            //console.log(name)
    
    if(name==='pedro'){
    history("/administrador");
    }
}
    return (
        <div>
            <h1>Cadastre setores</h1>
            <form onSubmit={CadastroSetores}> 
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