import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
export const DashboardAdm =()=>{
  const [name,setName]=useState('pedro')
  const [setor,setSetor]=useState('compras')
  const [qtd,setQtd]=useState('12')
  const [descricao,setDescricao]=useState('produto bom')
  const [tipo,setTipo]=useState('aço')
  const [status,setStatus]=useState('em andamento')
    return (
        <div>

        
          <nav>
          <Link to ="/administrador">Ver demandas pendentes</Link>
            <Link to ="/administrador/CadastroUsuario">Cadastre colaborador</Link>
            <Link to ="/administrador/VerColaborador">Ver colabolares cadastrados</Link>
            
            <Link to ="/administrador/CadastrarSetores">Crie setores</Link>
            <Link to ="/administrador/VerSetores">Ver setores cadastrados</Link>

            <Link to ="/administrador/CadastroStatus">Crie status</Link>
            <Link to ="/administrador/VerStatus">Ver status cadastrados</Link>

            </nav> 
     <p>Esta são todas as demandas pendentes</p>

        
        <table>
          <tr>
<td>Setor</td>
<td>Nome</td>
<td>Descrição</td>
<td>Qtd</td>
<td>Tipo</td>
<td>Status</td>
<td>Função</td>
</tr>
<tr>
<td>Compras</td>
<td>Computador</td>
<td>Um computador potente</td>
<td>12</td>
<td>Intel</td>
<td>Recusado</td>
<td>
<button className="execute">Executar</button>
<Link className="verMotivo" to="/administrador/VerMotivo">Ver motivo</Link>
</td></tr>
        </table>
        </div>
    )

}