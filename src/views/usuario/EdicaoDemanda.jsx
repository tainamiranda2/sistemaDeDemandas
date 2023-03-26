import React from 'react';
import Input from "../../components/input/Input";
import { Link } from 'react-router-dom';

export const EdicaoDemanda =()=>{
    const ValidarForm=async e=>{
        e.preventDeafault();
        console.log("Voçê clicou em enviar");
    }
    return (
        <div>
            <nav>
             <Link to = "/usuario">Voltar</Link>
             
            </nav>
            
            <form onSubmit={ValidarForm}>
                <div className='form-corpo'>
                    <h2>Editar uma  demanda</h2>
                    <Input text="Nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required/>
                    <Input text="Descrição da demanda: " name="descrição" type="text" placeholder="Digite a descrição da demanda" required/>
                    <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required/>
                    <Input text="QTD: " name="quantidade" type="number" placeholder="Digite o a quantidade da demanda" required/>
                    

                </div>
                <div className='form-justo'>
                  <button>Confirmar</button>
                  <button className='cancel'>Cancelar</button>
                </div>
                
                
                                                                   
            </form>
        </div>

    )
}