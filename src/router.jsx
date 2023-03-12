import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {Home}  from './views/home/Home';
import {Login}  from './views/login/Login';
import {DashboardAdm}  from './views/administrador/dashboardAdm';
import {CadastroUsuario} from './views/administrador/CadastroUsuario';
import {CadastroStatus} from './views/administrador/CadastroStatus';
import {EdicaoStatus} from './views/administrador/EdicaoStatus';
import {DashboardColaborador } from './views/colaborador/dashboardColaborador';
import {DemandasExecutadas} from './views/colaborador/DemandasExecutadas';
import {EnvioDemandaPendente} from './views/colaborador/EnvioDemandaPendente';
import {DashboardUsuario} from './views/usuario/dashboardUsuario';
import {CadastroDemanda} from './views/usuario/CadastroDemanda';
import {EdicaoDemanda} from './views/usuario/EdicaoDemanda';
import {ImprimirDemanda} from './views/usuario/ImprimirDemanda';




export const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/administrador' element={<DashboardAdm/>}/>
          <Route path='/administrador/CadastroStatus' element={<CadastroStatus/>}/>
          <Route path='/administrador/CadastroUsuario' element={<CadastroUsuario/>}/>
          <Route path='/administrador/EdicaoStatus' element={<EdicaoStatus/>}/>
          <Route path='/colaborador' element={<DashboardColaborador/>}/>
          <Route path='/colaborador/DemandasExecutadas' element={<DemandasExecutadas/>}/>
          <Route path='/colaborador/EnvioDemandaPendente' element={<EnvioDemandaPendente/>}/>
          <Route path='/usuario' element={<DashboardUsuario/>}/>
          <Route path='/usuario/CadastroDemanda' element={<CadastroDemanda/>}/>
          <Route path='/usuario/EdicaoDemanda' element={<EdicaoDemanda/>}/>
          <Route path='/usuario/ImprimirDemanda' element={<ImprimirDemanda/>}/>

        </Routes>
        </BrowserRouter>
    )
}