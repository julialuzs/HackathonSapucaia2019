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
                    <h2>Crie uma nova conta!</h2>
                    <br />
                    <label htmlFor="input-email-signup-instituicao"></label>
                    <input id="input-email-signup-instituicao" type="text" name="email-signup"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-signup-instituicao"></label>
                    <input id="input-senha-signup-instituicao" type="password" name="senha-signup"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <button className="btEnviar" onClick={this.onSubmit}>Logar</button>
                </div>
            </div>

        );
    }
}