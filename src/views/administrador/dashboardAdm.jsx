import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
export const DashboardAdm =()=>{
  const [demandas,setDemandas]=useState([])

  //funcao para ver todas as demandas pendentes
  const getDemandas =async()=>{
    try{
      const response=await axios.get('https://localhost/:81/demandasInHouse/demandas')
     // console.log("oi",response)
      const data=response.data;
      setDemandas(data)
    }catch(error){
console.log(error)
    }
  }

  useEffect(()=>{
getDemandas()
  },[])
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
   {demandas.length===0 ? (
  <h2>Não há nenhuma demanda pendente</h2>
   ):(
    <div>
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
   <>
{demandas.map((demanda)=>(

   <tr>

   <td>{demanda.setor}</td>
   <td>{demanda.nome}</td>
   <td>{demanda.descricao}</td>
   <td>{demanda.qtd}</td>
   <td>{demanda.tipo}</td>
   <td>{demanda.status}</td>
   <td>
   <button className="execute">Executar</button>
   <Link className="verMotivo" to="/administrador/VerMotivo">Ver motivo</Link>
   </td>
   </tr>
))
}
</>
    
        </table>
    </div>
  )}
    
        </div>
    )

}