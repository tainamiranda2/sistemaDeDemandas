
import Card from "../../components/card/Card";
import React from  'react';

export const Home =()=>{
    return(
        <div>
            <Card
            text="Home"
            to="/"
            />
              <Card
            text="Login"
            to="/login"
            />
           <h1>Olá,sou a página home</h1> 
        </div>
    )
}