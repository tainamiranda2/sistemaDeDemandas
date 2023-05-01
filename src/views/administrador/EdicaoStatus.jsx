import React from 'react';
import Input from "../../components/input/Input";
import {useNavigate,useParams} from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';

export const EdicaoStatus =()=>{
    const {id}=useParams()
    const history=useNavigate()
    const [status,setStatus]=useState([])
    const [nome_status,setNomeStatus]=useState('')
    const [usuario_id]=useState('3')

    const getStatus =async()=>{
        try{
          const response=await axios.get(`http://localhost:81/api-demanda/status/view/${id}/`)
         // console.log("oi",response)
          const data=response.data;
          setStatus(data)
        }catch(error){
              console.log(error)
        }
      }
    
      const EditStatus=async(e)=>{
          e.preventDefault();
        
          let mudarUsuario=parseInt(usuario_id)
          
           const res=await axios.put(`http://localhost:81/api-demanda/status/edit/${id}/`,{
              nome:nome_status,
           usuario_id:mudarUsuario
      
          })
         if(res.status==200){
              history("/administrador/VerStatus");
          }else{
              alert("Tem algum dado errado")
          }
      }
     // console.log(setor)
      useEffect(()=>{
          getStatus()
      },[])
      
            useEffect(() => {
              if (status.length > 0) {
                setNomeStatus(status[0].nome_status);
              }
            }, [status]);
    return (
        <div>
            <h1>Edição de status</h1>
            <form onSubmit={EditStatus}> 
            <Input
            text="Nome do status"
            type="text"
            placeholder="Informe o nome  do status"
            value={nome_status}
            name={nome_status}
            onChange={(e)=>setNomeStatus(e.target.value)}
          />
           
                <div className='form-justo'>
            <button>Atualizar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>

        </div>

    )
}