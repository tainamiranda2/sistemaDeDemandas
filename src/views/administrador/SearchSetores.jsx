import React from 'react';
import { useSearchParams,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
export const SearchSetor=()=>{
    const [ searchParamas ] = useSearchParams();
    const [setor, setSetor] = useState([])

  //funcao para ver todas as demandas cadastradas
  const getSetor =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/setor/search?'+searchParamas)
     // console.log("oi",response)
      const data=response.data;
      setSetor(data)
    }catch(error){
console.log(error)
    }
  }
  useEffect(()=>{
    getSetor()
      },[])
      
    return(
    <div>
        <nav>
 <Link to="#" onClick={() => window.history.back()}>Voltar</Link>
 </nav>
        <h1>Pesquisa de setor</h1>
        {setor.length === 0 ? (
        <h2>Não há nenhum setor encontrado</h2>
      ) : (
        <div>
          <p>Todos os dados econtrados para sua pesquisa</p>
          <table>
            <tr>
           
              <td>Nome</td>

            </tr>
            <>
              {setor.map((setores) => (

                <tr key={setores.id}>

                  <td>{setores.nome_setor}</td>
                
            
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