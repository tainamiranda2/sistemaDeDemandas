import React from 'react'
import Input from "../../components/input/Input";
import { useState, useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';

export  const Login =()=>{
const [name,setName]=useState('')
const [senha,setSenha]=useState('')
const [error,setError]=useState('')

const history=useNavigate()
const getUser =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/demandas/')
     // console.log("oi",response)
      const data=response.data;
      setDemandas(data)
    }catch(error){
console.log(error)
    }
  }
    const ValidarForm=async e=>{
        e.preventDefault();
       // console.log(name)
        //console.log(typeof(senha))
//verificando quem são os usuarios
     if(name==='carlos' && senha==="1568"){
        history("/colaborador");
    }else if(name==='carol' && senha ==="1234"){
        history("/usuario");
    }else if(name==='pedro' && senha ==="123456"){
        history("/administrador");
     }else{
       // alert("ocorreu um erro, entre em contato como suporte")
    setName("")
    setSenha("")
    setError("Ocorreu um erro interno, entre em contato com o suporte.")
    }

    }
    
    useEffect(()=>{
        getDemandas()
          },[])
return (
<div>

<form onSubmit={ValidarForm}>
    <p>{error}</p>
<Input
    text="infome seu nome"
    type="text"
    placeholder="Digite seu nome"
    name={name}
    value ={name}
    required
    onChange={(e)=>setName(e.target.value)}
/>

<Input
    text="infome sua senha"
    type="number"
    placeholder="Digite sua senha"
    name={senha}
    value ={senha}
    required
    onChange={(e)=>setSenha(e.target.value)}
/>


<button>Entrar</button>

<span>Esqueceu senha <Link to="/">click aqui</Link></span>

</form>
</div>
)
}