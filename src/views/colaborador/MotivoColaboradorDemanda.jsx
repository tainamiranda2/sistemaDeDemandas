import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


export const MotivoColaboradorDemanda = () => {
    const [name, setName] = useState('')
    const [qtd, setQtd] = useState('')
    const [tipo, setTipo] = useState('')
    const [motivoDemanda, setMotivoDemanda] = useState('')

    
    async function createDemanda() {
        e.preventDefault();
        //console.log(name)
        const res = await axios.post("http://localhost:81/api-demanda/demandas/", {
            name: name,
            qtd: qtd,
            tipo: tipo,
            motivoDemanda: motivoDemanda,
            demanda_id: demanda_id,


        })


    }
    return (
        <div>
            <nav>
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>


            </nav>
            <h1>Informe o motivo de não realizar a demanda</h1>

            <form onSubmit={createDemanda}>
                
                <Input text="Nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required />
                <Input text="QTD: " name="qtd" type="number" placeholder="Digite o a quantidade da demanda" required />
                <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required />
                <Input text="Motivo da demanda: " type="text" name="motivoDemanda" placeholder="Digite o motivo da demanda" required />
                
                <div className='form-justo'>
                    <button>Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>




            </form>
                



            

        </div>


    )
}