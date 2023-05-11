import React from 'react';
import { useSearchParams,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
export const SearchDemanda=()=>{
    const [ searchParamas ] = useSearchParams();
    const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas cadastradas
  const getDemandas =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/demandas/search?'+searchParamas)
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
      
    return(
    <div>
        <nav>
 <Link to="#" onClick={() => window.history.back()}>Voltar</Link>
 
 </nav>
        <h1>Pesquisa de demandas</h1>
        {demandas.length === 0 ? (
        <h2>Não há nenhuma demanda encontrada</h2>
      ) : (
        <div>
          <p>Todos os dados econtrados para sua pesquisa</p>


          <table>
            <tr>
           
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
           
              <td>Descrição</td>
             
            
            </tr>
            <>
              {demandas.map((demanda) => (

                <tr key={demanda.id}>

                  <td>{demanda.nome_demanda}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
              
                  <td>{demanda.descricao}</td>
            
                
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