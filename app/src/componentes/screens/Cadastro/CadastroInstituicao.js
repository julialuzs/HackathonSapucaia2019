import React, { Component } from 'react'
import './Cadastro.css'
import { Header } from '../../index'
import { InstituicaoService } from '../../../services/instituicao.service'

export class CadastroInstituicao extends Component {

    constructor() {
        super()

        this.state = {
            email: '',
            senha: '',
            telefone: '',
            cnpj: '',
            endereco: ''
        }

        this.instituicaoService = new InstituicaoService();
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const instituicao = {
            email: this.state.email,
            senha: this.state.senha,
            telefone: this.state.telefone,
            cnpj: this.state.cnpj,
            endereco: this.state.endereco
        }
        this.instituicaoService.cadastrar(instituicao)
            .then(() => this.setState({ shouldRedirectToHome: true }))

    }

    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <div id="title-auth-container">
                        <img id="logo" src="./favicon.png" />
                        <h2 id="title-auth">Cadastre sua Instituição!</h2>
                    </div>
                    <br />
                    <label htmlFor="input-email-signup-instituicao">Email</label>
                    <input id="input-email-signup-instituicao" className="form-control" type="text" name="email-signup"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-signup-instituicao">Senha</label>
                    <input id="input-senha-signup-instituicao" className="form-control" type="password" name="senha-signup"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <button className="auth btn btn-success btn-lg btn-block btEnviar" onClick={this.onSubmit}>Cadastro</button>
                </div>
            </div>

        );
    }
}