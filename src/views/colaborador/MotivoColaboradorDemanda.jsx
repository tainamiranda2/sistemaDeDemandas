import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";


export const MotivoColaboradorDemanda=()=>{
    
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
                    <h2>Informe o motivo de não realizar a demanda</h2>
                    <Input text="Nome da demanda: " type="text" name="nomeColaborador" placeholder="Digite o nome do colaborador" required/>
                    <Input text="Quantidade da demanda: " name="quantidadeDemanda" type="number" placeholder="Digite a quantidade da demanda" required/>
                    <Input text="Tipo: " type="text" name="tipo" placeholder="Digite o tipo da demanda" required/>
                    <Input text="Motivos da demanda : " type="text" name="motivosDemandas" placeholder="Digite os motivos da demanda" required/>
                 </div>   
                
                    

               
                 <div className='form-justo'>
                  <button>Confirmar</button>
                  <button className='cancel'>Cancelar</button>
                 </div>
                
                
                                                                   
            </form>
            
        </div>


    )
}