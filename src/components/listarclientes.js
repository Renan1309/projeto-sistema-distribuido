import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import { Table , Button , } from 'react-bootstrap';
import axios from 'axios';



class Listaclientes extends Component {
  constructor() {
    super();
    this.excluirCliente = this.excluirCliente.bind(this);
    this.state = {
      listclient : [ ]
      
    };
  }
    componentDidMount(){
        console.log('Entrou no DID MOUNT');
        axios.get('https://appfabiosd.herokuapp.com/clientes',{
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
          }
        }
        )
        .then(function (response) {
          // handle success
          console.log(response.data);
          this.setState({listclient:response.data})
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log(error);
        })

    }
    // Verificar se ainda funciona
    excluirCliente(cpf){
      console.log(cpf);
      axios.put (`https://appfabiosd.herokuapp.com/deletarCliente`, {
        cpf: cpf,
        
      }, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
      axios.get(`https://appfabiosd.herokuapp.com/clientes`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        this.setState({listclient:response.data})
      
      }.bind(this))
      .catch(function (error) {
        // handle error
        console.log(error);
      })

       // this.setState({listdividascliente:response.data})
      
      }.bind(this))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    render(){
      let idcpf ;

        return(
            <>
             <h1 className="titulo">LISTA DE CLIENTES</h1>
                <Table striped bordered hover className= "tabela-empresas">
                <thead>
                  <tr>
                    
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF</th>
                    <th>Dividas</th>
                    <th>Deletar</th>
                  </tr>
                </thead>
                   { this.state.listclient.map(client =>
                      <tbody>
                        <tr>
                           <th > {client.cliente_nome}</th>
                           <th>{client.cliente_email}</th>
                           <th>{client.cliente_cpf}</th>
                           <th> 
                            <Link to={{pathname : "/dividas",
                                     id: `${client.cliente_cpf}`,
                                     nome: `${client.cliente_nome}`} }>
                            <Button size="sm" variant="outline-info" type="submit" value="enviar">Dividas</Button>
                            </Link>
                           </th>
                           <th>
                             <Button onClick={() =>this.excluirCliente(client.cliente_cpf)} size="sm" variant="outline-info" type="submit" value="enviar">Excluir</Button>
                           </th>
                           

                        </tr>
                    </tbody>
                   )}
                </Table>
            </>
        )
    }
}export default Listaclientes;