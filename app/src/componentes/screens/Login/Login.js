import React, { Component } from 'react';
import { Header } from '../../index';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { Redirect } from 'react-router-dom';
import './Login.css'

export class Login extends Component {

    constructor() {
        super()

        this.state = {
            senha: '',
            email: '',
            shouldGoToHome: false,
            usuarioLogado: ''
        }

        this.autenticacaoService = new AutenticacaoService();
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const loginRequest = {
            email: this.state.email,
            senha: this.state.senha
        }
        this.autenticacaoService.logar(loginRequest).then(() => this.setState({shouldGoToHome: true}));
    }

    render() {
        if (this.state.shouldGoToHome) {
            return <Redirect to='/'></Redirect>
        }
        return (
            <div>
                <Header />
                <div id="container">
                    <div id="title-auth-container">
                        <img id="logo" src="./favicon.png" />
                        <h2 id="title-auth">Login</h2>
                    </div>
                    
                    <label htmlFor="input-email-signin">Email</label>
                    <input id="input-email-signin" type="text" className="form-control" name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-signin">Senha</label>
                    <input id="input-senha-signin" type="password" className="form-control" name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <button className="auth btn btn-success btn-lg btn-block btEnviar" onClick={this.onSubmit}>Entrar</button>
                </div>
            </div>

        );
    }
}