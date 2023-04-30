import React from 'react';
import Input from "../../components/input/Input";
import axios from "axios";

//import Select from "../../components/select/Select";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';



export const CadastroUsuario =()=>{
const [nome,setNome]=useState('')
const [email,setEmail]=useState('')
const [senha,setSenha]=useState('')
const [telefone,setTelefone]=useState('')
const [papel_id]=useState('1')
const [usuario_id]=useState('3')

const history=useNavigate()

const createUser =async(e)=>{
        e.preventDefault();
        let mudarPapel=parseInt(papel_id)
      let mudarUsuario=parseInt(usuario_id)
        let mudarTelefone=parseInt(telefone)
        let mudarSenha=parseInt(senha)
        const res=await axios.post("http://localhost:81/api-demanda/usuario/add/",{
            nome:nome,
            email:email,
            senha:mudarSenha,
            telefone:mudarTelefone,
            usuario_id:mudarUsuario,
            papel_id:mudarPapel
        })
        if(res.status==200){
            history("/administrador/VerColaborador");
        }else{
            alert("Tem algum dado errado")
        }
     
    }
    
    return (
        <div>
            <h1>Cadastre um colaborador</h1>
        <form onSubmit={createUser}> 
            <Input
            text="Nome do colaborador"
            type="text"
            placeholder="Informe o nome  do colaborador"
            value={nome}
            name={nome}
            onChange={(e)=>setNome(e.target.value)}
          />
             <Input
            text="Email do colaborador"
            type="text"
            placeholder="Informe o email  do colaborador"
            value={email}
            name={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <Input
            text="Telefone do colaborador"
            type="number"
            placeholder="Informe o telefone  do colaborador"
            value={telefone}
            name={telefone}
            onChange={(e)=>setTelefone(e.target.value)}
            />
             <Input
            text="Senha do colaborador"
            type="text"
            placeholder="Informe a senha  do colaborador"
            value={senha}
            name={senha}
            onChange={(e)=>setSenha(e.target.value)}
            />
                       
                <div className='form-justo'>
            <button>Cadastrar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>

    )
}