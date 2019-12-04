import React , { Component } from 'react';
import axios from 'axios';
import logofiado from '../Image/logofiado.png';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button , Form , FormControl , Image , NavLink} from 'react-bootstrap';



class Navbarpage extends Component {
    state = {
    
       
    };
    // Verificar se ainda funciona
    logout(){
      localStorage.setItem('auth-token', '');
    }

    render(){

        return(
            <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/clientes">Fia.do</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link> <Link className="a" to="/cadastro">Cadastro</Link></Nav.Link>
                <Nav.Link> <Link className="a" to="/clientes">Clientes</Link></Nav.Link>
                <Nav.Link> <Link className="a" to="/venda">Venda</Link></Nav.Link>
                <Nav.Link> <Link className="a" to="/login">Login</Link></Nav.Link>
              </Nav>
              <Form inline>
                <Button onClick={()=> this.logout()} variant="outline-light">Logout</Button>
              </Form>  
            </Navbar>
          </>
        )
    }
}export default Navbarpage;