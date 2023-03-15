import React from 'react';
import './style.css'
export const Input=({type,text, placeholder,onChange,value,name,checked,required})=>{
return(
    <div>
        <label >{text}</label>
        <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        checked={checked}
        required={required}
        />
    </div>
)
}
export default Input;
