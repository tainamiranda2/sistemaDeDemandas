import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
export const VerColaborador =()=>{
    return (
        <div>
            <h1>Veja todos os usuários cadastrados por voce</h1>
            <table>
          <tr>
<td>Setor</td>
<td>Nome</td>
<td>Email</td>
<td>Papel</td>

</tr>
<tr>
<td>Compras</td>
<td>Carlos augusto</td>
<td>calos@gmail.com</td>

<td>
<button>Excluir</button>
<Link className="verMotivo" to="/VerMotivo">Editar</Link>
</td></tr>
        </table>
        </div>

    )
}