
import {Route, Routes} from 'react-router-dom';

import {Home} from '../Pages/Home';
import {Login} from '../Pages/Login';
import {Cadastro} from '../Pages/Cadastro';


export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
           
        </Routes>
    )
 }