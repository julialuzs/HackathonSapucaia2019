import React, { Component } from 'react'
import './Cadastro.css'
import { Header } from '../../index'
import { UsuarioService } from '../../../services/usuario.service'

export class CadastroUsuario extends Component {

    constructor() {
        super()

        this.state = {
            senha: '',
            email: '',
            nome: '',
            telefone: '',
            shouldGoToHome: false,
            usuarioLogado: ''
        }
        this.usuarioService = new UsuarioService();
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const usuario = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            telefone: this.state.telefone
        }
        this.usuarioService.cadastrar(usuario)
            .then(() => this.setState({ shouldRedirectToHome: true }))

    }

    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <h2>Crie uma nova conta!</h2>
                    <br />
                    <div id="container">

                        <label htmlFor="input-nome-signup">Nome</label>
                        <input id="input-nome-signup" type="text" name="nome"
                            value={this.state.nome}
                            onChange={this.handleChange} />

                        <label htmlFor="input-email-signup">Email</label>
                        <input id="input-email-signup" type="text" name="email"
                            value={this.state.email}
                            onChange={this.handleChange} />

                        <label htmlFor="input-senha-signup">Senha</label>
                        <input id="input-senha-signup" type="password" name="senha"
                            value={this.state.senha}
                            onChange={this.handleChange} />

                        <button className="btEnviar" onClick={this.onSubmit}>Logar</button>
                    </div>

                </div>
            </div>
        );
    }
}