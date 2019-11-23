import React , { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar'
import { InputGroup ,Row ,  Form ,FormControl ,Card} from 'react-bootstrap';



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
      axios.post('http://localhost:7000/venda', {
        idusu: this.state.idusu,
        date: this.state.date,
        valor: this.state.valor
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
             <Card>
                <Row>
                  
                    <Col>
                    <Card.Body>
                    <Form.Control placeholder="Ex 21/08/2019" />
                    </Card.Body>
                    </Col>
                    <Col>
                    <Card.Body>
                    <Form.Control placeholder="R$ 0,00" />
                    </Card.Body>
                    </Col>
                   
                </Row>
                </Card>
             </div>
       
           </>
         )

    }
}
export default VendaNova;