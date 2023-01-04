
import {Route, Routes} from 'react-router-dom';

import {Home} from '../Pages/Home/Home';
import {Login} from '../Pages/Login/Login';
import {Cadastro} from '../Pages/Cadastro/Cadastro';
import {LoadPhoto} from '../Pages/LoadPhoto/LoadPhoto';
import {PasswordPage} from '../Pages/PasswordPage/PasswordPage';
import {BemVindo} from '../Pages/BemVindo/BemVindo';


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="/CarregarFoto" element={<LoadPhoto/>}/>
            <Route path="/CadastrarSenha" element={<PasswordPage/>}/>
            <Route path="/BemVindo" element={<BemVindo/>}/>
           
        </Routes>
    )
 }