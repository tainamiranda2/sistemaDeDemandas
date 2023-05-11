import React from 'react';
import { useSearchParams,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
export const SearchUsuario=()=>{
    const [ searchParamas ] = useSearchParams();
    const [usuario, setUsuario] = useState([])

  //funcao para ver todas as demandas cadastradas
  const getUsuario =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/usuario/search?'+searchParamas)
     // console.log("oi",response)
      const data=response.data;
      setUsuario(data)
    }catch(error){
console.log(error)
    }
  }
  useEffect(()=>{
    getUsuario()
      },[])
      
    return(
    <div>
        <nav>
 <Link to="#" onClick={() => window.history.back()}>Voltar</Link>
 </nav>
        <h1>Pesquisa de usuário</h1>
        {usuario.length === 0 ? (
        <h2>Não há nenhum usuário </h2>
      ) : (
        <div>
          <p>Todos os dados econtrados para sua pesquisa</p>

          <table>
            <tr>
           
              <td>Nome</td>
              <td>Telefone</td>
              <td>Email</td>
           
            </tr>
            <>
              {usuario.map((usuarios) => (

                <tr key={usuarios.id}>
                  <td>{usuarios.nome}</td>
                  <td>{usuarios.telefone}</td>
                  <td>{usuarios.email}</td>

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