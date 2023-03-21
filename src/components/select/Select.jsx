import React from  'react';

import './style.css';

function Select({options, text, name, onChange,value}){ 
 
return (
        <div>
    <label htmlFor={name}>
      {text}:
    </label>
    <br/>
    <select name={name}
      id={name}
      onChange={onChange}
        value={value || ''}>
      <option>Escolha uma opção</option>
      
      {
      options.map((option) => (
    <option value={option.id} key={option.id}>
   {option.name}
    </option>
  
        
     )) }
         
      </select>
        </div>
    )
}

export default Select;