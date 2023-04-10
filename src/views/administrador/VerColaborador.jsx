import React from 'react';
import { Link } from "react-router-dom";
import axios  from 'axios'
import { useState, useEffect} from 'react';
export const VerColaborador =()=>{
    const [usuarios,setUsuarios]=useState([])

    //funcao para ver todas os usuarios
    const getColaborador =async()=>{
      try{
        const response=await axios.get('http://localhost:81/api-demanda/usuarios/')
       // console.log("oi",response)
        const data=response.data;
        setUsuarios(data)
      }catch(error){
  console.log(error)
      }
    }
  //funcao par deletar usuario
  async function deleteUsuario(usuario){
  const res=await axios.delete(`http://localhost:81/api-demanda/usuarios/${usuario.id}`)
  }

    useEffect(()=>{
  getColaborador()
    },[])
    return (
        <div>
         

        {usuarios.length===0 ? (
  <h2>Não há nenhum colaborador cadastrado</h2>
   ):(
    <div>
    <p>Esta são todas os usuarios </p>
   
    <table>
      <tr>
      <td>Setor</td>
<td>Nome</td>
<td>Email</td>
<td>Papel</td>
   </tr>
   <>
{usuarios.map((usuario)=>(

   <tr key={usuario.id}>

   <td>{usuario.nome}</td>
   <td>{usuario.papel}</td>
   <td>{usuario.email}</td>

   <td>
   <button onClick={()=>deleteUsuario(usuario)}>Excluir</button>
<Link className="verMotivo" to={`/EdicaoUsuario/{usuario.id}`}>Editar</Link>
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