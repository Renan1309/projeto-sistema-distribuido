import React , { Component } from 'react';
import axios from 'axios';
import logofiado from '../Image/logofiado.png';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Button , Form , FormControl , Image , NavLink} from 'react-bootstrap';



class Navbarpage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.logout = this.logout.bind(this);
   
  }
    // Verificar se ainda funciona
    logout = event => { 
      localStorage.setItem('auth-token', '');
      this.props.history.push("/login");
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