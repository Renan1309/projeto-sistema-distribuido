import React from 'react'
import { BrowserRouter, Switch ,   browserHistory } from 'react-router-dom' ;
import Route from './components/Routes';
import Cadastrocliente from './components/cadastrocliente';
import Listaclientes from './components/listarclientes' ;
import LoginComponent from './components/login';
import Navbar from './components/navbar' ;
import VendaNova from './components/venda';
import DividasCLiente from './components/dividasclientes';




export default function Routes(){

    return(
        <BrowserRouter>
          <Navbar/>
         <Switch>

           
            <Route path="/cadastro" exact component={Cadastrocliente}  isPrivate/>
            <Route path="/clientes" exact component={Listaclientes} isPrivate/>
            <Route path="/venda" exact component={VendaNova} isPrivate/>
            <Route path="/login" exact component={LoginComponent}/>
            <Route path="/dividas" exact component={DividasCLiente} isPrivate/>


         </Switch>
        </BrowserRouter>
    );
}