import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const DashboardUsuario = () => {
  const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas cadastradas
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
  //funcao par deletar demanda
  async function deleteDemanda(demanda) {
    const res = await axios.delete(`http://localhost:81/api-demanda/demandas/${demanda.id}`)
  }

  useEffect(() => {
    getDemandas()
  }, [])
  return (
    <div>
      <nav>
        <Link to="/usuario">Minhas demandas</Link>
        <Link to="/usuario/CadastroDemanda">Criar demandas</Link>
        <Link to="/usuario/Perfil">Perfil</Link>
      </nav>
      <h1>Bem vindo ao sistema, Maria</h1>
      {demandas.length === 0 ? (
        <h2>Não há nenhuma demanda cadastrada</h2>
      ) : (
        <div>
          <p>Esta são todas as demandas cadastradas</p>


          <table>
            <tr>
              <td>Setor</td>
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
              <td>Descrição</td>
              <td>Status</td>
              <td>Função</td>
            </tr>
            <>
              {demandas.map((demanda) => (

                <tr key={demanda.id}>

                  <td>{demanda.setor}</td>
                  <td>{demanda.nome}</td>
                  <td>{demanda.qtd}</td>
                  <td>{demanda.tipo}</td>
                  <td>{demanda.descricao}</td>
                  <td>{demanda.status}</td>
                  <td>
                    <Link className="editarDemanda" to={`/EdicaoDemanda/{demanda.id}`}>Editar</Link>
                    <button onClick={()=>deleteDemanda(demanda)}>Excluir</button>
                    <Link className="imprimirDemanda" to={`/ImprimirDemanda/{demanda.id}`}>Imprimir</Link>
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