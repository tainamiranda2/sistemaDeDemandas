import React from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

export const DemandasEmAndamento = () => {
  const [demandas, setDemandas] = useState([])
  const history=useNavigate()
  //funcao para ver todas as demandas em andamento
  const getDemandas = async () => {
    try {
      const response = await axios.get('http://localhost:81/api-demanda/demandas/')
      // console.log("oi",response)
      const data = response.data;
      setDemandas(data)
    } catch (error) {
      console.log(error)
    }
    
  }
  const executarDemanda = async (id) => {
    try {
      const res = await axios.put(`http://localhost:81/api-demanda/demandas/edit/${id}/`, {
        status_id: 2 
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
  
  let demandasEmAndamento = [];
  demandas.forEach(function(demanda) {
    if (demanda.status_id === 3) {
      demandasEmAndamento.push(demanda);
   }
  });
 

  useEffect(() => {
    getDemandas()
  }, [])
  return (
    <div>
      <nav>
        <Link to="/colaborador">Finalizadas</Link>
        <Link to="/colaborador/DemandasEmAndamento">Em andamento</Link>
        <Link to="/colaborador/Perfil">Perfil</Link>
      </nav>
      <h1>Bem vindo ao sistema, Carlos</h1>
      {demandasEmAndamento.length === 0 ? (
        <h2>Não há nenhuma demanda em andamento</h2>
      ) : (
        <div>
          <p>Esta são todas as demandas em andamento</p>


          <table>
            <tr>
          
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
              <td>Descrição</td>
            
              <td>Função</td>
            </tr>
            <>
              {demandasEmAndamento.map((demanda) => (

                <tr key={demanda.id}>        
                  <td>{demanda.nome_demanda}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
                  <td>{demanda.descricao}</td>
               
                  <td>
                    <button className="executarDemanda" onClick={() => executarDemanda(demanda.id)} >
                      Executar
                      </button>
                    <Link className="enviarAoAdm" 
                    to={`/colaborador/MotivoColaboradorDemanda/${demanda.id}`}>
                      Envia ao ADM
                      </Link>
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