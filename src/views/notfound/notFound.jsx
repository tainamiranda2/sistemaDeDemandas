import React from 'react';
import notF from '../../img/notF.png'
import { Link } from 'react-router-dom';
export const notFound=()=>{
    return(
        <div>
           
              <img src={notF}/>
 <h1>Página 404</h1>
        <Link className='link' to="/">
            Voltar para a home
            </Link>
        </div>
    )
}