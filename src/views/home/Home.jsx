
import React from  'react';
import { Link } from "react-router-dom";

export const Home =()=>{
    return(
        <div>
           <nav>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>

           </nav>
           <h1>Sistema de demandas</h1>
           
           <h3>Se trata de um sistema onde será possivel controlar todas as demandas do seu negócio.</h3>
      <p>Para saber mais envio um email e alguém da equipe vai entrar em contato</p>
 <span>Para solicitar: <Link to="/">Solicitar serviço</Link> e ter mias informações</span>     
      <div>
        <ul>
            <ol>Cadastro de usuarios</ ol>
            <ol>Cadastro de colaboradores</ ol>
             <ol>Cadastro de adminstradores</ol>
        </ul>
       
      </div>
        </div>
    )
}