import React , { Component } from 'react';
import { Table , Button} from 'react-bootstrap';
import axios from 'axios';





class DividasCliente extends Component {
  constructor() {
    super();
    this.quitarVenda = this.quitarVenda.bind(this);
    this.state = {
      listdividascliente: [ ]
      
    };
  }
    componentDidMount() {
        console.log("CPF : " + this.props.location.id );
        axios.get(`http://localhost:7000/vendas?cpf=${this.props.location.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          this.setState({listdividascliente:response.data})
        
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }

      quitarVenda(idvenda){
      
          console.log(idvenda);
        axios.put (`http://localhost:7000/deletarVenda`, {
          idvenda: idvenda,
          cpf: this.props.location.cpf,
          valor: this.state.valor
        })
        .then(function (response) {
          // handle success
          console.log(response.data);
          axios.get(`http://localhost:7000/vendas?cpf=${this.props.location.id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          this.setState({listdividascliente:response.data})
        
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

        return(
            <>
         <h1>Dívidas  {this.props.location.nome}</h1>
         <Table striped bordered hover variant="dark">
             <thead>
               <tr>
                 <th>Data</th>
                 <th>Valor</th>
                 <th>quitar</th>
                </tr>
             </thead>
             <tbody>
             { this.state.listdividascliente.map(divida => 
                    <tr>
                    <td>{divida.venda_data}</td>
                    <td>{divida.venda_valor}</td>
                    <td>
                    <Button onClick={() =>this.quitarVenda(divida.venda_id)} size="sm" variant="outline-info" value="enviar">quitar</Button>

                    </td>
                  </tr>
             )}
           
               
             </tbody>
        </Table>
      </>
        )
    }
}export default DividasCliente;