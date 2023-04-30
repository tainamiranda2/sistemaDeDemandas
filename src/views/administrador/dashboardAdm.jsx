import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import { BsCheck} from 'react-icons/bs'
export const DashboardAdm =()=>{
  const [demandas,setDemandas]=useState([])
  //funcao para ver todas as demandas pendentes
  const getDemandas =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/demandas/')
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

   <td>Nome</td>
   <td>Descrição</td>
   <td>Qtd</td>
   <td>Tipo</td>
   <td>Função</td>
   </tr>
   <>
{demandas.map((demanda)=>(

   <tr key={demanda.id}>

   <td>{demanda.nome_demanda}</td>
   <td>{demanda.descricao}</td>
   <td>{demanda.qtd}</td>
   <td>{demanda.tipo}</td>
   <td>
   <button className="execute">
    <BsCheck/>
    </button>
   <Link className="verMotivo" to={`/administrador/VerMotivo/{demanda.id}`}>Ver motivo</Link>
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