import React , { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar'
import { Form, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import '../App.css';




class Cadastrocliente extends Component {
   
    constructor() {
        super();
        this.state = {lista : [],nome:'',email:'',senha:'' };
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);


      }

    enviaForm(event){
      event.preventDefault();
      axios.post('http://localhost:7000/cadastro', {
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
      })
      .then(function (response) {
        console.log(response);
        alert("Empresa Cadastrado");
        
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({email: '' , nome:'', senha: ''} );
      
      console.log("deu certo o form")
     
    

    }

    setNome(evento){
        this.setState({nome:evento.target.value});
      }
      
      setEmail(evento){
        this.setState({email:evento.target.value});
      }
      
      setSenha(evento){
        this.setState({senha:evento.target.value});
      }

    render(){
      

       return (
           <>
      
       <div>
       <h1>CADASTRO DE EMPRESAS</h1>
           <p>{this.state.nome}</p>
           <p>{this.state.email}</p>
           <p>{this.state.senha}</p>
       </div>
       <Form className="cadastro-form" onSubmit = {this.enviaForm}>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome Empresa</Form.Label>
          <Form.Control id="nome" onChange ={this.setNome} value = {this.state.nome} type="text" placeholder="Nome empresa" />
          <Form.Label>Email address</Form.Label>
          <Form.Control id="Email"  onChange ={this.setEmail} value = {this.state.email} type="email" placeholder="Email" />
          <Form.Label>Senha</Form.Label>
          <Form.Control id="Senha"  onChange ={this.setSenha} value = {this.state.senha} type="password" placeholder="password" /><br/>
          <Button variant="primary" type="submit" value="enviar">Submit</Button> 
      </Form.Group>
       </Form>
       


       
           </>
         )

    }
}
export default Cadastrocliente;