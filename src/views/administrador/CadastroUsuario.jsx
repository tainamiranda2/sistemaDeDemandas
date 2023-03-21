import React from 'react';
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


export const CadastroUsuario =()=>{
    const history=useNavigate()
const [name,setName]=useState('pedro')
const [setor,setSetor_id]=useState(['Compras', 'Finanças'])
const [papel,setPapel_id]=useState(['colaborador', 'usuario'])

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
            text="Email do colaborador"
            type="text"
            placeholder="Informe o email  do colaborador"
            />
             <Input
            text="Senha do colaborador"
            type="text"
            placeholder="Informe a senha  do colaborador"
            />
             <Select
             name="setor_id"
            text="Setor do colaborador"
            type="text"
            value={setSetor_id}
            options={setor}
            placeholder="Informe o setor do colaborador"
            />
               <Select
             name="papel"
            text=" papel do colaborador"
            type="text"
            options={papel}
            value={setPapel_id}
            placeholder="Informe o setor do colaborador"
            />
            
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>

    )
}