import React from 'react';
import { Link } from "react-router-dom";
import axios  from 'axios'
import { useState, useEffect} from 'react';

import {BsPencil,BsFillTrashFill } from 'react-icons/bs'
export const VerColaborador =()=>{
    const [usuarios,setUsuarios]=useState([])

    //funcao para ver todas os usuarios
    const getColaborador =async()=>{
      try{
        const response=await axios.get('http://localhost:81/api-demanda/usuario/')
       // console.log("oi",response)
        const data=response.data;
        setUsuarios(data)
      }catch(error){
  console.log(error)
      }
    }
  //funcao par deletar usuario
  async function deleteUsuario(usuario){
  const res=await axios.delete(`http://localhost:81/api-demanda/usuario/delete/${usuario.id}`)
  }

    useEffect(()=>{
  getColaborador()
    },[])
    return (
        <div>
         
         <Link to="#" onClick={() => window.history.back()}>Voltar</Link>
                <Link to="/" >Sair</Link>
        {usuarios.length===0 ? (
  <h2>Não há nenhum colaborador cadastrado</h2>
   ):(
    <div>
    <p>Este são todas os usuarios </p>
   
    <table>
      <tr>
   
<td>Nome</td>
<td>Email</td>
<td>telefone</td>
<td>Papel</td>
   </tr>
   <>
{usuarios.map((usuario)=>(

   <tr key={usuario.id}>

   <td>{usuario.nome}</td>

   <td>{usuario.email}</td>
   <td>{usuario.telefone}</td>
   <td>{usuario.papel_id}</td>
   <td>
   <Link className="editarDemanda" to={`/administrador/EdicaoUsuario/${usuario.id}`}>
<BsPencil/>
</Link>
   <button className="excluirDemanda" onClick={()=>deleteUsuario(usuario.id)}>
   <BsFillTrashFill  />
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