import React from 'react';
import { Link } from "react-router-dom";
import {BsPencil,BsFillTrashFill } from 'react-icons/bs'
import axios  from 'axios'
import { useState, useEffect} from 'react';

export const VerStatus =()=>{
    const [status,setStatus]=useState([])
    //funcao para ver todas os setores
    const getStatus =async()=>{
      try{
        const response=await axios.get('http://localhost:81/api-demanda/status/')
       // console.log("oi",response)
        const data=response.data;
        setStatus(data)
      }catch(error){
  console.log(error)
      }
    }
  
    useEffect(()=>{
        getStatus()
    },[])
    return (
        <>
        {status.length===0 ? (
            <h2>Não há nenhum status criado</h2>
             ):(
              <div>
              <p>Esta são todas os status </p>
             
                     
              <table>
                <tr>
          
             <td>Nome</td>
           
             <td>Função</td>
             </tr>
             <>
          {status.map((statusS)=>(
          
             <tr key={statusS.id}>
          
             <td>{statusS.nome_status}</td>
            
             <td>
            
             <Link className="editarDemanda"  to={`/administrador/EdicaoStatus/${statusS.id}`}>
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