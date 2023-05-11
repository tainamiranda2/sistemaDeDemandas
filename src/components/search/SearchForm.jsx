import React from 'react';

//redirecionar dentro do componente

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchForm= ({searchURL}) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSumit = (e) => {
        e.preventDefault();
        navigate( searchURL+ query);
       
    }

    return (
        < >
          
            <form onSubmit={handleSumit}>
                <div className='search'>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <input className='search-input ' type="submit" value="Buscar"/>
                </div>
            </form>
        </>

    )
}

export default SearchForm;