import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";

export const PerfilColaborador=()=>{
    const ValidarForm=async e=>{
        e.preventDeafault();
        console.log("Voçê clicou em enviar");
    }
    return (
        <div>
            <nav>
              <Link to="#" onClick={() => window.history.back()}>Voltar</Link>

             
            </nav>

            
            <form onSubmit={ValidarForm}>
            
                 <div className='form-corpo'>
                    <h2>Editar perfil</h2>
                    <Input text="Nome do colaborador: " type="text" name="nomeColaborador" placeholder="Digite o nome do colaborador" required/>
                    <Input text="Email: " name="email" type="email" placeholder="Digite o email" required/>
                    <Input text="Senha: " type="password" name="senha" placeholder="Digite a senha" required/>
                    <Input text="Confirmar senha : " type="password" name="confirmarSenha" placeholder="Digite a senha novamente" required/>
                 </div>   
                
                    

               
                 <div className='form-justo'>
                  <button>Confirmar</button>
                  <button className='cancel'>Cancelar</button>
                 </div>
                
                
                                                                   
            </form>
            
        </div>


    )
}