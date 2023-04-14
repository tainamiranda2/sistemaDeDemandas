import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



export const ImprimirDemanda = () => {
  const [demandas, setDemandas] = useState([])

  //funcao para ver todas as demandas que vai imprimir
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

  useEffect(() => {
    getDemandas()
  }, [])
  return (
    <div>
      <nav>
        <Link to="#" onClick={() => window.history.back()}>Voltar</Link>

      </nav>

      <div>
        <h1>Demanda imprensa</h1>


        <table>
          <tr>
            <td>Nome</td>
            <td>Qtd</td>
            <td>Tipo</td>
            <td>Descrição</td>
            
          </tr>
          <>
            {demandas.map((demanda) => (

              <tr key={demanda.id}>

                <td>{demanda.nome}</td>
                <td>{demanda.qtd}</td>
                <td>{demanda.tipo}</td>
                <td>{demanda.descricao}</td>
              </tr>
            ))
            }
          </>
          <tr>
            <td>
              <button>Confirmar</button>
              <button className='cancel'>Cancelar</button>
            </td>
          </tr>

        </table>
      </div>
    </div>

  )
}