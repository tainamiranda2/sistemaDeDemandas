import React from 'react';
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


export const EdicaoDemanda = () => {

    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [tipo, setTipo] = useState('')
    const [descricao, setDescricao] = useState('')


    async function EditeDemanda() {
        e.preventDefault();
        //console.log(name)
        const res = await axios.put("http://localhost:81/api-demanda/demandas/", {
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
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>

            </nav>

            <h1>Bem vindo ao sistema, Maria</h1>
            <form onSubmit={EditeDemanda}>
                <h2>Cadastrar uma demanda</h2>
                <Input text="Nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required />
                <Input text="QTD: " name="qtd" type="number" placeholder="Digite o a quantidade da demanda" required />
                <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required />
                <Input text="Descrição: " type="text" name="descricao" placeholder="Digite a digite" required />

                <div className='form-justo'>
                    <button>Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>




            </form>

        </div>


    )
}