import React from 'react';
import { Link } from "react-router-dom";

export const VerSetores =()=>{
    return (
        <div>
            <h1>Veja todos os setores cadastrados</h1>
            <table>
            <tr>
                <td>Setor</td>
                 <td>Funcções</td>
            </tr>
            <tr>
                <td>Compras</td>
                <td>
<button className='execute'>Excluir</button>
<Link className="verMotivo" to="/administrador/VerMotivo">Ver motivo</Link>
</td>
            </tr>
            </table>
        </div>

    )
}