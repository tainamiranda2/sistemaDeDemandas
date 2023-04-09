
import React from  'react';
import { Link } from "react-router-dom";
import home from '../../img/home.png'

export const Home =()=>{
    return(
        <div>
           <nav>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>

           </nav>
         <h1>Sistemas de demandas</h1>
         <img src={home}/>
     <button>Solicitar  serviço</button>
        </div>
    )
}