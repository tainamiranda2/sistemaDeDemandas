import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Home}  from './views/home/Home';
import {Login}  from './views/login/Login';

export const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>

          </Routes>
        </BrowserRouter>
    )
}