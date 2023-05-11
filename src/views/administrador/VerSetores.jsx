import React from 'react';
import { Link } from "react-router-dom";
import {BsPencil,BsFillTrashFill } from 'react-icons/bs'
import axios  from 'axios'
import { useState, useEffect} from 'react';
import SearchForm from "../../components/search/SearchForm";

export const VerSetores =()=>{
    const [setor,setSetor]=useState([])
    //funcao para ver todas os setores
    const getSetores =async()=>{
      try{
        const response=await axios.get('http://localhost:81/api-demanda/setor/')
       // console.log("oi",response)
        const data=response.data;
        setSetor(data)
      }catch(error){
  console.log(error)
      }
    }
  
    useEffect(()=>{
        getSetores()
    },[])
    return (
        <>
        {setor.length===0 ? (
            <h2>Não há nenhum setor criado</h2>
             ):(
              <div>
              <p>Esta são todas os setores </p>
             
              <SearchForm searchURL={ '/setor/search?keyword='}/>       
              <table>
                <tr>
          
             <td>Nome</td>
           
             <td>Função</td>
             </tr>
             <>
          {setor.map((setores)=>(
          
             <tr key={setores.id}>
          
             <td>{setores.nome_setor}</td>
            
             <td>
             <Link className="editarDemanda" to={`/administrador/EdicaoSetor/${setores.id}`}>
            <BsPencil/>
             </Link>
             <button className="excluirDemanda">
              <BsFillTrashFill/>
              </button>
          
             </td>
             </tr>
          ))
          }
          </>
              
                  </table>
              </div>
            )}
</>
    )
}