import React from 'react'
import { BrowserRouter, Switch , Route , browserHistory } from 'react-router-dom' ;

import Cadastrocliente from './components/cadastrocliente';
import Listaclientes from './components/listarclientes' ;
import Navbar from './components/navbar' ;
import VendaNova from './components/venda';
import DividasCLiente from './components/dividasclientes';




export default function Routes(){

    return(
        <BrowserRouter>
          <Navbar/>
         <Switch>
        
            <Route path="/cadastro" exact component={Cadastrocliente}/>
            <Route path="/clientes" exact component={Listaclientes}/>
            <Route path="/venda" exact component={VendaNova}/>
            <Route path="/dividas" exact component={DividasCLiente}/>


         </Switch>
        </BrowserRouter>
    );
}