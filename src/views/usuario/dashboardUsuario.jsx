import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export const DashboardUsuario=()=>{
    const [setor,setSetor]=useState('compras');
    const [name,setName]=useState('panela');
    const [qtd,setQtd]=useState('12');
    const [tipo,setTipo]=useState("ferro");
    const [status,setStatus]=useState('em andamento');
    const [descricao,setDescricao]=useState('bacana');
    return(
      <div>
        <nav>
          <Link to = "/usuario">Minhas demandas</Link>
          <Link to = "/usuario/CadastroDemanda">Criar demandas</Link>
          <Link to = "/usuario/Perfil">Perfil</Link>
        </nav>
        <h1>Bem vindo ao sistema, Maria</h1>
        <p>Todas as demandas cadastradas</p>

        <table>
          <tr>
            <td>Setor</td>
            <td>Nome</td>
            <td>Qtd</td>
            <td>Tipo</td>
            <td>Status</td>
            <td>Descrição</td>
            <td>Função</td>

          </tr>
          <tr>
            <td>Compras</td>
            <td>Panela</td>
            <td>30</td>
            <td>Ferro</td>
            <td>Em andamento</td>
            <td>Bacana</td>

          <td>
          <Link className="editarDemanda" to="/usuario/EdicaoDemanda/1">Editar</Link>
          <button className="excluirDemanda" >Excluir</button>
          <Link className="imprimirDemanda" to="/usuario/ImprimirDemanda/1">Imprimir</Link>
          </td>
          </tr>       
           </table>
        
      </div>
      
    )
}