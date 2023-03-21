import React from 'react'
import Input from "../../components/input/Input";
import { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';

export  const Login =()=>{
const [name,setName]=useState('pedro')

const history=useNavigate()

    const ValidarForm=async e=>{
        e.preventDefault();
        console.log(name)

if(name==='carlos'){
history("/colaborador");

    }else if(name==='carol'){
history("/usuario");
    }else if(name==='pedro'){
history("/administrador");
    }else{
alert("ocorreu um erro, entre em contato como suporte")
    }


    }
return (
<div>

<form onSubmit={ValidarForm}>
<Input
text="infome seu nome"
type="text"
placeholder="Digite seu nome"
name={name}
/>

<Input
text="infome sua senha"
type="number"
placeholder="Digite sua senha"

/>


<button>Entrar</button>

<span>Esqueceu senha <Link to="/">click aqui</Link></span>

</form>
</div>
)
}