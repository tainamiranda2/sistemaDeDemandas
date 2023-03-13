import React from 'react'
import Input from "../../components/input/Input";

export  const Login =()=>{
    const ValidarForm=async e=>{
        e.preventDefault();
        console.log("Voce clicou em enviar")
    }
return (
<div>
<h1>Olá, aqui é a paǵian de login</h1>
<form onSubmit={ValidarForm}>
<Input
text="infome seu email"
type="text"
placeholder="Digite seu nome"

/>
<Input
text="infome seu email"
type="number"
placeholder="Digite seu nome"

/>
<button>Entrar</button>
</form>
</div>
)
}