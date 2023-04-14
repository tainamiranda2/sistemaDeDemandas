import React from 'react';
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


export const CadastroDemanda = () => {

    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [tipo, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')


    async function createDemanda() {
        e.preventDefault();
        //console.log(name)
        const res = await axios.post("http://localhost:81/api-demanda/demandas/", {
            name: name,
            qtd: qtd,
            tipo: tipo,
            descricao: descricao,
            demanda_id: demanda_id,


        })


    }
    return (
        <div>
            <nav>
                <Link to="/usuario">Minhas demandas</Link>
                <Link to="/usuario/CadastroDemanda">Criar demandas</Link>
                <Link to="/usuario/Perfil">Perfil</Link>
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>

            </nav>

            <h1>Bem vindo ao sistema, Maria</h1>
            <form onSubmit={createDemanda}>
                <h2>Cadastrar uma demanda</h2>
                <Input text="Nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required />
                <Input text="QTD: " name="qtd" type="number" placeholder="Digite o a quantidade da demanda" required />
                <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required />
                <Input text="Descrição: " type="text" name="descricao" placeholder="Digite a digite" required />
                
                <button>Confimar solicitação</button>




            </form>

        </div>


    )
}