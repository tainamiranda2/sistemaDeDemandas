import React from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import {BsPencil,BsFillTrashFill,BsSearchHeartFill , BsFillFilterCircleFill} from 'react-icons/bs'
import SearchForm from "../../components/search/SearchForm";

export const DashboardUsuario = () => {
  const {id}=useParams()
  const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas cadastradas
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
  
  
async function deleteDemanda(id) {
  console.log(id);
  const res = await axios.delete(`http://localhost:81/api-demanda/demandas/delete/${id}`);
  console.log(res);
}

  useEffect(()=>{
    getDemandas()
      },[])
      
  return (
    <div>
      <nav>
        <Link to={`/usuario/${id}`}>Minhas demandas</Link>
        <Link to="/usuario/DemandasFinalizadas">Demandas Finalizadas</Link>
        <Link to="/usuario/CadastroDemanda">Criar demandas</Link>
        <Link to={`/usuario/Perfil/${id}`}>Perfil</Link>
        <Link to="/" >Sair</Link>
      </nav>
   
      {demandas.length === 0 ? (
        <h2>Não há nenhuma demanda cadastrada</h2>
      ) : (
        <div>
          <p>Esta são todas as demandaas cadastradas</p>

<SearchForm searchURL={ '/demandas/search?keyword='}/>

          <table>
            <tr>
           
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
           
              <td>Descrição</td>
             
              <td>Função</td>
            </tr>
            <>
              {demandas.map((demanda) => (

                <tr key={demanda.id}>

                  <td>{demanda.nome_demanda}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
              
                  <td>{demanda.descricao}</td>
            
                  <td>
                  
                    <Link  className="editarDemanda" to={`/usuario/EdicaoDemanda/${demanda.id}`}>
                      <BsPencil/>
                    </Link>
                    
                    <button  className="excluirDemanda" onClick={()=>deleteDemanda(demanda.id)}>
                     <BsFillTrashFill />
                      </button>
                   
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