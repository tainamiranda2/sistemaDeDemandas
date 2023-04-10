import React from 'react';
import Input from "../../components/input/Input";
import axios from "axios";

import Select from "../../components/select/Select";
import { useState, useEffect } from 'react';

export const EdicaoUsuario =()=>{
    const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [senha,setSenha]=useState('')
const [telefone,setTelefone]=useState('')
const [setor,setSetor_id]=useState([])
const [papel,setPapel_id]=useState([])

async function EditeUser(){
    e.preventDefault();
    //console.log(name)
    const res=await axios.put("http://localhost:81/api-demanda/usuarios/",{
        name:name,
        email:email,
        senha:senha,
        telefone:telefone,
        usuario_id:usuario_id,
        papel_id:papel_id,

    })
}
    return (
        <div>
            <h1>Edite o  usuario</h1>
            <form onSubmit={EditeUser}> 
            <Input
            text="Nome do colaboraador"
            type="text"
            placeholder="Informe o nome  do colaborador"
       
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