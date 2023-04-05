import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


export const DemandasEmAndamento =()=>{
  
  const [setor,setSetor]=useState('compras');
  const [name,setName]=useState('panela');
  const [qtd,setQtd]=useState('12');
  const [tipo,setTipo]=useState("ferro");
  const [descricao,setDescricao]=useState('bonito');
  const [status,setStatus]=useState('em andamento')
    return(
        <div>
          <nav>
            <Link to = "/colaborador">Finalizadas</Link>
            <Link to = "/colaborador/DemandasEmAndamento">Em andamento</Link>
            <Link to = "/colaborador/Perfil">Perfil</Link>
          </nav>
          <h1>Bem vindo ao sistema, Carlos</h1>
          <p>Lista das demandas em andamento</p>

          <table>
            <tr>
              <td>Setor</td>
              <td>Nome</td>
              <td>Qtd</td>
              <td>Tipo</td>
              <td>Status</td>
              <td>Descrição</td>

            </tr>
            <tr>
              <td>Compras</td>
              <td>Panela</td>
              <td>12</td>
              <td>Ferro</td>
              <td>Bonito</td>
              <td>Em andamento</td>
              <td>
                <button className="executarDemanda" >Executar</button>
                <Link className="enviarAoAdm" to="/colaborador/MotivoColaboradorDemanda">Enviar ao ADM</Link>
              </td>

            </tr>
            
            
            <tr>
              <td>Compras</td>
              <td>TV</td>
              <td>10</td>
              <td>LED</td>
              <td>4K</td>
              <td>Em andamento</td>
              <td>
                <button className="executarDemanda" >Executar</button>
                <Link className="enviarAoAdm" to="/colaborador/MotivoColaboradorDemanda">Enviar ao ADM</Link>
              </td>

            </tr>
            
          
        </table>
        </div>
    )
}