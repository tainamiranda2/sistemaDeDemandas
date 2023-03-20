import React from "react";
import { Link } from "react-router-dom";

export const DashboardAdm =()=>{
    return (
        <div>

        
          <nav>
          <Link to ="/administrador">Ver demandas pendentes</Link>
            <Link to ="/administrador/CadastroUsuario">Cadastre colaborador</Link>
            <Link to ="/administrador/VerColaborador">Ver colabolares cadastrados</Link>
            
            <Link to ="/administrador/CadastrarSetores">Crie setores</Link>
            <Link to ="/administrador/VerColaborador">Ver setores cadastrados</Link>

            <Link to ="/administrador/CadastroStatus">Crie status</Link>
            <Link to ="/administrador/VerColaborador">Ver status cadastrados</Link>

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
<button>Executar</button>
<Link to="/">Ver motivo</Link>

</tr>
        </table>
        </div>
    )

}