import React , { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar'
import {Button, InputGroup ,Row ,  Form ,FormControl ,Card} from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import '../App.css';




class VendaNova extends Component {
   
    constructor() {
        super();
        this.state = {idusu: '' , date:'', valor: '' };
        
        this.enviaVenda = this.enviaVenda.bind(this);
        this.setIdusu = this.setIdusu.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setValor = this.setValor.bind(this);


      }
     

    enviaVenda(event){
      event.preventDefault();
      console.log('deu certo')
      console.log('ID:'+this.state.idusu )
      console.log(`{cpf: "${this.state.idusu}" , data: "${this.state.date}" 
      , valor: "${this.state.valor}"}`)
      
      axios.post('http://localhost:7000/venda', {
        idusu: this.state.idusu,
        date: this.state.date,
        valor: this.state.valor,
        
      }, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5ODkxMDExIiwiaWF0IjoxNTc1MjU3Njk2LCJleHAiOjE1NzU4NjI0OTZ9.98H7SahCJcBc2yXGpSsH-ijC40b75XG3ktMP29uAxhQ'
        }
      })
      .then(function (response) {
        console.log(response);
        alert("Venda Cadastrada");
        
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({idusu: '' , date:'', valor: ''} );
      
      console.log("Deu certo a venda")
     }

    setIdusu(evento){
        this.setState({idusu:evento.target.value});
      }
      
      setDate(evento){
        this.setState({date:evento.target.value});
      }
      
      setValor(evento){
        this.setState({valor:evento.target.value});
      }
     

    render(){
      

       return (
           <>
             <div>
             <div className = "card-component"  >
              
             <Card className = "card-venda"  >
               <h3 className = "h2venda">Nova Venda</h3>
                <Row>
                   <Col>
                       <Card.Body>
                          <Form.Control id="cpf" onChange ={this.setIdusu} value = {this.state.idusu} placeholder="CPF: 00000000000" />
                       </Card.Body>
                    </Col>
                    <Col>
                       <Card.Body>
                          <Form.Control id="date" onChange ={this.setDate} value = {this.state.date} placeholder="Ex 21/08/2019" />
                       </Card.Body>
                    </Col>
                    <Col>
                      <Card.Body>
                         <Form.Control  id="date" onChange ={this.setValor} value = {this.state.valor} placeholder="R$ 0,00" />
                      </Card.Body>                   
                    </Col>
                   </Row>
                   <Button onClick={this.enviaVenda }  variant="primary">Enviar</Button>
                </Card>
                </div>

                
             </div>
       
           </>
         )

    }
}
export default VendaNova;