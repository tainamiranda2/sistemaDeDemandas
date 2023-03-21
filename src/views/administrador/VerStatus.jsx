import React from 'react';
import { Link } from "react-router-dom";

export const VerStatus =()=>{
    return (
        <div>
            <h1>Veja todos os status cadastrados</h1>
            <table>
            <tr>
                <td>Status</td>
                 <td>Funções</td>
            </tr>
            <tr>
                <td>Em andamento</td>
                <td>
<button className='execute'>Excluir</button>
<Link className="verMotivo" to="/administrador/EditarStatus/{id}">Ver motivo</Link>
</td>
            </tr>
            </table>
        </div>

    )
}