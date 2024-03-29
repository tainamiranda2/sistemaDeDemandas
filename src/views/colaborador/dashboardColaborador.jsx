import React from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import SearchForm from "../../components/search/SearchForm";

export const DashboardColaborador = () => {
  const {id}=useParams()
  const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas finalizadas
  const getDemandas = async () => {
    try {
      const response = await axios.get('http://localhost:81/api-demanda/demandas/')
    //  console.log("oi",response)
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
        <Link to={`/colaborador/${id}`}>Finalizadas</Link>
        <Link to="/colaborador/DemandasEmAndamento">Em andamento</Link>
        <Link to={`/colaborador/Perfil/${id}`}>Perfil</Link>
         <Link to="/" >Sair</Link>
      </nav>
    
      {demandasFinalizadas.length === 0 ? (
        <h2>Não há nenhuma demanda finalizada</h2>
      ) : (
        <div>
          <p>Esta são todas as demandas finalizadas</p>

<SearchForm searchURL={ '/demandas/search?keyword='}/>
          <table>
            <tr>
            
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
              <td>Descrição</td>
              <td>Status</td>
            </tr>
            <>
              {demandasFinalizadas.map((demanda) => (

                <tr key={demanda.id}>
                  <td>{demanda.nome_demanda}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
                  <td>{demanda.descricao}</td>
                  <td>Finalizadas</td>
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