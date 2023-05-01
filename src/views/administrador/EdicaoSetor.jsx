import React from 'react';
import axios  from 'axios'
import { useState, useEffect} from 'react';
import {  useParams,useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";

export const EdicaoSetor =()=>{
    const history=useNavigate()
    const {id}=useParams()
    const [setor,setSetor]=useState([])
    //funcao para ver todas os setores
    const [nome_setor,setNomeSetor]=useState('')
    const [usuario_id]=useState('3')
  

    const getSetores =async()=>{
      try{
        const response=await axios.get(`http://localhost:81/api-demanda/setor/view/${id}/`)
       // console.log("oi",response)
        const data=response.data;
        setSetor(data)
      }catch(error){
            console.log(error)
      }
    }
  
    const EditeSetores=async(e)=>{
        e.preventDefault();
      
        let mudarUsuario=parseInt(usuario_id)
        
         const res=await axios.put(`http://localhost:81/api-demanda/setor/edit/${id}/`,{
            nome:nome_setor,
         usuario_id:mudarUsuario
    
        })
       if(res.status==200){
            history("/administrador/VerSetores");
        }else{
            alert("Tem algum dado errado")
        }
    }
   // console.log(setor)
    useEffect(()=>{
        getSetores()
    },[])
    
          useEffect(() => {
            if (setor.length > 0) {
              setNomeSetor(setor[0].nome_setor);
            }
          }, [setor]);
    return (
        <div>
            <h1>Edição de Setor</h1>
            <form onSubmit={EditeSetores}> 
            <Input
            text="Nome do setor"
            type="text"
            placeholder="Informe o nome  do setor"
            value={nome_setor}
            name={nome_setor}
            onChange={(e)=>setNomeSetor(e.target.value)}
          />
           
                <div className='form-justo'>
            <button>Atualizar</button>
            <button className='cancel'>Cancelar</button>
            </div>
        </form>
        </div>

    )
}