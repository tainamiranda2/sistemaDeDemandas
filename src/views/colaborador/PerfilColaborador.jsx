import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export const PerfilColaborador = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    
    async function EditeUser() {
        e.preventDefault();
        //console.log(name)
        const res = await axios.put("http://localhost:81/api-demanda/usuarios/", {
            name: name,
            email: email,
            senha: senha,
            confirmarSenha: confirmarSenha,
            usuario_id:usuario_id,
            

        })


    }
    return (
        <div>
            <nav>
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>


            </nav>
            <h1>Editar perfil</h1>

            <form onSubmit={EditeUser}>

                <Input text="Nome do colaborador: " type="text" name="nomeColaborador" placeholder="Digite o nome do colaborador" required />
                <Input text="Email: " name="email" type="email" placeholder="Digite o email" required />
                <Input text="Senha: " type="password" name="senha" placeholder="Digite a senha" required />
                <Input text="Confirmar senha : " type="password" name="confirmarSenha" placeholder="Digite a senha novamente" required />




                <div className='form-justo'>
                    <button>Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>



            </form>

        </div>


    )
}