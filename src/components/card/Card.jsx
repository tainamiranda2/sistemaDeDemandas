
import React from 'react';
import {Link} from 'react-router-dom';
export const  Card= ({text, to})=>{
//const [show,setShow]=useState;
return (
    <>
    <div className='row'>
        <div className='card green'>
               
                <Link to={to}>
                <h2>{text}</h2>
                </Link>
        </div>
    </div>

   
    </>
)
}

export default Card;
