import React , { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../App.css';


class LoginComponent extends Component {
   
    constructor() {
        super();
        this.state = {user:'',pwd:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setSenha = this.setSenha.bind(this);
      }

    enviaForm(event){
      event.preventDefault();
      axios.post('https://localhost:7000/autentica', {
        email: this.state.user,
        senha: this.state.pwd
      })
      .then(function (response) {
        console.log("Esse é o response:" + response);
        //alert("Empresa Cadastrado");
        
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({user: '' , pwd: ''} );
      
      console.log("deu certo o form")
      console.log(this.state.user);
      console.log(this.state.pwd);     
    

    }

    setUser(evento){
    this.setState({user:evento.target.value});
    }
    
    setSenha(evento){
    this.setState({pwd:evento.target.value});
    }

    render(){
      

       return (
       <div className="login-div">
      
       <Card className="card">
            <Card.Body>
                <Card.Title className="text-title-card">Login</Card.Title>
                <Form className="login-form" onSubmit = {this.enviaForm}>
                    <Form.Group id="formBasicLogin">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="Email"  onChange ={this.setUser} value = {this.state.user} type="email" placeholder="Email" />
                    <Form.Label>Senha</Form.Label>
                    <Form.Control id="Senha"  onChange ={this.setSenha} value = {this.state.pwd} type="password" placeholder="password" /><br/>
                    <Button variant="primary" type="submit" value="enviar">Submit</Button> 
                    </Form.Group>
                </Form>
            </Card.Body>
       </Card>

       </div>
         )

    }
}
export default LoginComponent;