import React from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { BsCheck} from 'react-icons/bs'
export const DashboardAdm =()=>{
  const {id}=useParams()
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
  const executarDemanda = async (id) => {
    try {
      const res = await axios.put(`http://localhost:81/api-demanda/demandas/edit/${id}/`, {
        status_id: 2
      });
      console.log(res);
        
    if(res.status==200){
      history(`/administrador/${id}`);
  }else{
      alert("Tem algum dado errado")
  }
    } catch (error) {
      console.log(error);
    }
  
    
  }

  let demandasPendentes = [];
  demandas.forEach(function(demanda) {
    if (demanda.status_id === 1) {
      demandasPendentes.push(demanda);
   }
  });
 
  useEffect(()=>{
getDemandas()
  },[])
    return (
        <div>

        
          <nav>
          <Link to ={`/adminstrador/${id}`}>Ver demandas pendentes</Link>
            <Link to ={`/administrador/CadastroUsuario/${id}`}>Cadastre colaborador</Link>
            <Link to ="/administrador/VerColaborador">Ver colabolares cadastrados</Link>
            
            <Link to ="/administrador/CadastrarSetores">Crie setores</Link>
            <Link to ="/administrador/VerSetores">Ver setores cadastrados</Link>
            <Link to={`/administrador/Perfil/${id}`}>Perfil</Link>
            <Link to="/" >Sair</Link>
          {/**  <Link to ="/administrador/CadastroStatus">Crie status</Link>
            <Link to ="/administrador/VerStatus">Ver status cadastrados</Link>**/} 

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
   <td>Status</td>
   <td>Função</td>
   </tr>
   <>
{demandasPendentes.map((demanda)=>(

   <tr key={demanda.id}>

   <td>{demanda.nome_demanda}</td>
   <td>{demanda.descricao}</td>
   <td>{demanda.qtd}</td>
   <td>{demanda.tipo}</td>
   <td>Pendente</td>
   <td>
   <button className="execute" onClick={() => executarDemanda(demanda.id)}>
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