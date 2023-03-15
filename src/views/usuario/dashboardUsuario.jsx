import React from "react";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";


export const DashboardUsuario=()=>{
    const ValidarForm=async e=>{
      e.preventDeafault();
      console.log("Voçê clicou em enviar");
    }
    return(
      
      <div>
        <Card text="CadastroDemanda" to="/usuario/CadastroDemanda"/>
        <Card text="EdicaoDemanda" to="/usuario/EdicaoDemanda/1"/>
        <Card text="ImprimirDemanda" to="/usuario/ImprimirDemanda/1"/>
        <h1>Olá, sua página do dashboard do usuário</h1>
        <form onSubmit={ValidarForm}>
                <div>
                    <h2>Cadastrar uma demanda</h2>
                    <Input text="Informe o setor: " type="text" name="setor" placeholder="Digite o setor" required/>
                </div>
                <div>
                    <h2>Cadaste o material necessário</h2>
                    <Input text="Informe o nome: " type="text" name="nome" placeholder="Digite o nome da demanda" required/>
                    <Input text="Informe a quantidade: " name="quantidade" type="number" placeholder="Digite o a quantidade da demanda" required/>
                    <Input text="Informe o tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required/> 
                    
                </div>
                <div>
                    <h2>Status</h2>
                    <Input  text="Em andamento" type="radio" name="status" value="Em andamento" checked required/>
                    <Input  text="Concluída" type="radio" name="status" value="Concluída" required/>
                </div>
                <button>Concluir solicitação</button>
                
                
                                                                   
        </form>
      </div>
      
    )
}