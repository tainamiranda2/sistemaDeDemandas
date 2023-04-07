
import React from  'react';
import { Link } from "react-router-dom";

export const Home =()=>{
    return(
        <div>
           <nav>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>

           </nav>
         <h1>Sistemas de demandas</h1>
     <button>Solicitar  serviço</button>
        </div>
    )
}