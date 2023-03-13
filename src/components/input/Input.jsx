import React from 'react';
import './style.css'
export const Input=({type,text, placeholder,onChange,value})=>{
return(
    <div>
        <label>{text}</label>
        <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        />
    </div>
)
}
export default Input;
