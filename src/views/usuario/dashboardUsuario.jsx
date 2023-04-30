import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {BsPencil,BsFillTrashFill } from 'react-icons/bs'
export const DashboardUsuario = () => {
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
    const res = await axios.delete(`http://localhost:81/api-demanda/demandas/delete/${id}`)
 console.log(id)
  }

  useEffect(()=>{
    getDemandas()
      },[])
      
  return (
    <div>
      <nav>
        <Link to="/usuario">Minhas demandas</Link>
        <Link to="/usuario/CadastroDemanda">Criar demandas</Link>
        <Link to="/usuario/Perfil">Perfil</Link>
      </nav>
      <h1>Bem vindo ao sistema, Maria</h1>
      {demandas.length === 0 ? (
        <h2>Não há nenhuma demanda cadastrada</h2>
      ) : (
        <div>
          <p>Esta são todas as demandaas cadastradas</p>


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