import React from 'react';
import Input from "../../components/input/Input";
import Card from '../../components/card/Card';


export const ImprimirDemanda =()=>{
    
    const ValidarForm=async e=>{
        e.preventDeafault();
        console.log("Voçê clicou em enviar");
    }
    return (
        <div>
            <Card text="Sair" to="../../usuario"/>
            <h1>Olá, sua página de imprimir demanda</h1>
            <form onSubmit={ValidarForm}>
              <div>
                <h2>Demanda impressa</h2>
                <Input text="Informe o nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required/>
                <Input text="Informe a quantidade: " name="quantidade" type="number" placeholder="Digite o a quantidade da demanda" required/>
                <Input text="Informe o tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required/>
                <Input text="Informe o motivo da demanda: " type="text" name="motivo_da_demanda" placeholder="Digite o motivo da demanda"/> 
                    
              </div>
              <button>Confirmar</button>
            </form>
        </div>

    )
}