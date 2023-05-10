import React from 'react'
import Input from "../../components/input/Input";
import { useState, useEffect,  createContext  } from 'react';
import {useNavigate,Link, useParams} from 'react-router-dom';

import axios  from 'axios'
const UserContext = createContext();

export  const Login =()=>{

   // const {id}=useParams()
const [usuario,setUsuario]=useState([])

const [nome,setNome]=useState('')
const [senha,setSenha]=useState('')
const [error,setError]=useState('')


const history=useNavigate()
const ValidarForm=async e=>{
    e.preventDefault();
        getUser();
}

const getUser =async()=>{
    try{
      const response=await axios.get('http://localhost:81/api-demanda/usuario/')
     // console.log("oi",response)
      const data=response.data;
      setUsuario(data)
      const usuarioEncontrado = data.find(user => user.nome === nome);
      // Verificar se o usuário foi encontrado
     //console.log(nome)
     //console.log( usuarioEncontrado )

      if (usuarioEncontrado) {
        const userPapel = usuarioEncontrado.papel_id;
          const userID=usuarioEncontrado.id
      // console.log(userPapel)
       //console.log(userID)
          if( userPapel===1){
            
            history(`/administrador/${ userID}`);
                // Passar os dados do usuário pelo contexto

                }else if(userPapel===4){
                history(`/colaborador/${ userID}`);
                }else if(userPapel===5){
                history(`/usuario/${ userID}`);
                }else{
                  alert("O usuário não foi encontrado no sistema!")
                }
                //console.log(userPapel)*/
      }

    } catch (error) {
      console.log(error);
    }
    }

 

    useEffect(()=>{
        getUser()
          },[])
return (
<div>
<UserContext.Provider value={{ user: usuario, setUser: setUsuario }}>
<form onSubmit={ValidarForm}>
   
<Input
    text="infome seu nome"
    type="text"
    placeholder="Digite seu nome"
    name={nome}
    value ={nome}
    required
    onChange={(e)=>setNome(e.target.value)}
/>

<Input
    text="infome sua senha"
    type="number"
    placeholder="Digite sua senha"
    name={senha}
    value ={senha}
    required
    onChange={(e)=>setSenha(e.target.value)}
/>


<button>Entrar</button>

<span>Esqueceu senha <Link to="/">click aqui</Link></span>

</form>
</UserContext.Provider>
</div>
)
}