import React , { Component } from 'react';
import axios from 'axios';
import { Table , Button} from 'react-bootstrap';



class Listaclientes extends Component {
    state = {
        
        listclient: [ ]
       
    };
    componentDidMount(){
        console.log('Entrou no DID MOUNT');
        axios.get('http://localhost:7000/clientes')
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
    render(){

        return(
            <>
             <h1 className="titulo">LISTA DE CLIENTES</h1>
                <Table striped bordered hover className= "tabela-empresas">
                <thead>
                  <tr>
                    
                    <th>Email</th>
                    <th>Nome</th>
                  
                  </tr>
                </thead>
                   { this.state.listclient.map(client =>
                      <tbody>
                        <tr>
                           <th > {client.nome}</th>
                           <th>{client.email}
                           
                           </th>
                          <th> <Button variant="primary" type="submit" value="enviar">Submit</Button> </th>

                        </tr>
                    </tbody>
                   )}
                </Table>
            </>
        )
    }
}export default Listaclientes;