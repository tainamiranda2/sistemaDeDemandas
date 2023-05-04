import React from "react";
import Input from "../../components/input/Input";
import { Link , useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export const MotivoColaboradorDemanda = () => {
    const {id}=useParams()
    const history=useNavigate()

    const [motivoDemanda, setMotivoDemanda] = useState('')

    const executarDemanda = async (event) => {
        event.preventDefault();
        try {
          const res = await axios.put(`http://localhost:81/api-demanda/demandas/edit/${id}/`, {
            status_id: 1, 
            motivoDemanda: motivoDemanda // Adicione o motivo de não realização
          });
          console.log(res);
          if(res.status==200){
            history("/colaborador");
        }else{
            alert("Tem algum dado errado")
        }
          // Aqui você pode atualizar o estado da demanda em questão para que ela não apareça mais na lista de demandas em andamento
        } catch (error) {
          console.log(error);
        }
       
      }
      
    
    return (
        <div>
            <nav>
                <Link to="#" onClick={() => window.history.back()}>Voltar</Link>


            </nav>
            <h1>Informe o motivo de não realizar a demanda</h1>

            <form  onSubmit={executarDemanda}>
                
                <Input text="Motivo da demanda: " 
                type="text" 
                name={motivoDemanda}
                value={motivoDemanda}
              
                placeholder="Digite o motivo da demanda"
                onChange={(event) => setMotivoDemanda(event.target.value)}
                 required 
                 />
                
                <div className='form-justo'>
                    <button >Confirmar</button>
                    <button className='cancel'>Cancelar</button>
                </div>

            </form>
                
        </div>


    )
}