import React, { Component } from 'react'
import { Header } from '../../index'
import { AutenticacaoService } from '../../../services/autenticacao.service';

export class SignIn extends Component {

    constructor() {
        super()

        this.state = {
            senha: '',
            email: '',
            shouldGoToHome: false
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
        this.autenticacaoService.logar(loginRequest)
            .then(() => this.setState({ shouldGoToHome: true }));
    }

    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <label htmlFor="input-email-signin"></label>
                    <input id="input-email-signin" type="text" name="email-signin"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-signin"></label>
                    <input id="input-senha-signin" type="password" name="senha-signin"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <button className="btEnviar" onClick={this.onSubmit}>Logar</button>

                </div>
            </div>

        );
    }
}