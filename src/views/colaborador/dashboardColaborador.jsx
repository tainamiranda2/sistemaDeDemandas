import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

export const DashboardColaborador = () => {
  const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas finalizadas
  const getDemandas = async () => {
    try {
      const response = await axios.get('http://localhost:81/api-demanda/demandas/')
      console.log("oi",response)
      const data = response.data;
      setDemandas(data)
    } catch (error) {
      console.log(error)
    }
  }

  let demandasFinalizadas = [];
demandas.forEach(function(demanda) {
  if (demanda.status_id === 2) {
    demandasFinalizadas.push(demanda);
  }
});
//console.log(demandasFinalizadas)
//console.log(demandas)

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
      {demandasFinalizadas.length === 0 ? (
        <h2>Não há nenhuma demanda finalizada</h2>
      ) : (
        <div>
          <p>Esta são todas as demandas finalizadas</p>


          <table>
            <tr>
            
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
              <td>Descrição</td>
          
            </tr>
            <>
              {demandasFinalizadas.map((demanda) => (

                <tr key={demanda.id}>
                  <td>{demanda.nome_demanda}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
                  <td>{demanda.descricao}</td>
                
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