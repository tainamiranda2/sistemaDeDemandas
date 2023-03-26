import React from 'react';
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";


export const CadastroDemanda =()=>{

    const ValidarForm=async e=>{
        e.preventDeafault();
        console.log("Voçê clicou em enviar");
    }
    return (
        <div>
            <nav>
             <Link to = "/usuario">Minhas demandas</Link>
             <Link to = "/usuario/CadastroDemanda">Criar demandas</Link>
             <Link to = "/usuario/Perfil">Perfil</Link>
             <Link to = "/usuario">Voltar</Link>
             
            </nav>

            <h1>Bem vindo ao sistema, Maria</h1>
            <form onSubmit={ValidarForm}>
                <div className='form-corpo'>
                    
                    <h2>Cadastrar uma demanda</h2>
                    <Input text="Nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required/>
                    <Input text="QTD: " name="qtd" type="number" placeholder="Digite o a quantidade da demanda" required/>
                    <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required/>
                    <Input text="Descrição: " type="text" name="descricao" placeholder="Digite a digite" required/>
                    

                </div>
                <button>Confimar solicitação</button>
                
                
                
                                                                   
            </form>
            
        </div>


    )
}