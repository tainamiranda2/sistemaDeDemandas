
import Card from "../../components/card/Card";
import React from  'react';
import { Link } from "react-router-dom";

export const Home =()=>{
    return(
        <div>
           <nav>
            <Link  to="/">Home</Link>
            <Link to="/login">Login</Link>

           </nav>
           <h1>Sem vem vindo o sistema</h1>
           <p>Bom, mas do que se trata o sistema</p>
        </div>
    )
}