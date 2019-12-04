import React , { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar'
import { Form, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import '../App.css';




class Cadastrocliente extends Component {
   
    constructor() {
        super();
        this.state = {lista : [],nome:'',email:'',senha:'', cpf:'' , telefone:'' };
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.setCpf = this.setCpf.bind(this);
        this. setTelefone = this.setTelefone.bind(this);

       
      }

    enviaForm(event){
      event.preventDefault();
      axios.post('http://localhost:7000/cliente', {
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha,
        telefone : this.state.telefone,
        cpf: this.state.cpf
      }, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5ODkxMDExIiwiaWF0IjoxNTc1MjU3Njk2LCJleHAiOjE1NzU4NjI0OTZ9.98H7SahCJcBc2yXGpSsH-ijC40b75XG3ktMP29uAxhQ'
        }
      })
      .then(function (response) {
        console.log(response);
        alert("Empresa Cadastrado");
        
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({email: '' , nome:'', senha: '' , cpf: ''} );
      
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

      setCpf(evento){
        this.setState({cpf:evento.target.value});
      }
      setTelefone(evento){
        this.setState({telefone:evento.target.value});
      }

    render(){
      

       return (
           <>
      
       <div className="texto-cadastro">
       <h1>CADASTRO DE CLIENTES</h1>
           <p>{this.state.nome}</p>
           <p>{this.state.email}</p>
           <p>{this.state.senha}</p>
       </div>
       <Form className="cadastro-form" onSubmit = {this.enviaForm}>
          <Form.Group className="group" controlId="formBasicEmail">
          <Form.Label>Nome Cliente</Form.Label>
          <Form.Control id="nome" onChange ={this.setNome} value = {this.state.nome} type="text" placeholder="Nome empresa" />
          <Form.Label>CPF</Form.Label>
          <Form.Control id="cpf" onChange ={this.setCpf} value = {this.state.cpf} type="text" placeholder="***********" />
          <Form.Label>Telefone</Form.Label>
          <Form.Control id="telefone" onChange ={this.setTelefone} value = {this.state.telefone} type="text" placeholder="99999999999" />
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