import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


export const CadastroUsuario =()=>{
    const history=useNavigate()
const [name,setName]=useState('pedro')

    const CadastroUser=async e=>{
        e.preventDefault();
        //console.log(name)

if(name==='pedro'){
history("/administrador");
}


    }
    return (
        <div>
            <h1>Cadastre um colaborador</h1>
        <form onSubmit={CadastroUser}> 
            <Input
            text="Nome do colaboraador"
            type="text"
            placeholder="Informe o nome  do colaborador"
          name={name}
          />
             <Input
            text="Matricula do colaboraador"
            type="text"
            placeholder="Informe o nome  do colaborador"
            />
             <Input
            text="Senha do colaborador"
            type="text"
            placeholder="Informe o matricula  do colaborador"
            />
             <Input
            text="Setor do colaborador"
            type="text"
            placeholder="Informe o setor do colaborador"
            />
            <span>Campo opcional</span>
            
                <label>
                    <input type="radio" value="usuario"/>
                    <input type="radio" value="colaborador"/>

                </label>
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>

    )
}