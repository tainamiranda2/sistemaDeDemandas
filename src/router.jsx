import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {Home}  from './views/home/Home';
import {Login}  from './views/login/Login';
import {DashboardAdm}  from './views/administrador/dashboardAdm';
import {DashboardColaborador } from './views/colaborador/dashboardColaborador';
import {DashboardUsuario} from './views/usuario/dashboardUsuario';




export const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/administrador' element={<DashboardAdm/>}/>
          <Route path='/colaborador' element={<DashboardColaborador/>}/>
          <Route path='/usuario' element={<DashboardUsuario/>}/>

        </Routes>
        </BrowserRouter>
    )
}