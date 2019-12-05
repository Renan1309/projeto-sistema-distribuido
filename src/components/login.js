import React , { Component } from 'react';
import axios from 'axios';
import { Form, Button, Card, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {user:'',pwd:'' , msg: '' , redirect: false };
        this.enviaForm = this.enviaForm.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setSenha = this.setSenha.bind(this);
      }

    enviaForm(event){
      
      this.setState({ redirect: true })
      event.preventDefault();
      axios.post('http://18.218.154.150:5000/autentica', {
        email: this.state.user,
        senha: this.state.pwd
      })
      .then(function (response) {
       // this.props.history.push('/cadastro');
        console.log("Esse é o response:   " + response.data.token);
        localStorage.setItem('auth-token', response.data.token);
        this.setState({user: '' , pwd: ''} );
        this.props.history.push("/cadastro");
        //alert("Empresa Cadastrado");
        
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

      
      
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