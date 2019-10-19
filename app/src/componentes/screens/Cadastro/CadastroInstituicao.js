import React, { Component } from 'react'
import './Cadastro.css'
import { Header } from '../../index'
import { InstituicaoService } from '../../../services/instituicao.service'

export class CadastroInstituicao extends Component {

    constructor() {
        super()

        this.state = {
            nome: '',
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
            nome: this.state.nome,
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
                    <label htmlFor="input-nome-instituicao">Nome</label>
                    <input id="input-nome-instituicao" type="text" name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-instituicao">E-mail</label>
                    <input id="input-email-instituicao" type="text" name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-senha-instituicao">Senha</label>
                    <input id="input-senha-instituicao" type="password" name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <label htmlFor="input-cnpj-instituicao">CNPJ</label>
                    <input id="input-cnpj-instituicao" type="text" name="cnpj"
                        value={this.state.cnpj}
                        onChange={this.handleChange} />

                    <label htmlFor="input-endereco-instituicao">Endereço</label>
                    <input id="input-endereco-instituicao" type="text" name="endereco"
                        value={this.state.endereco}
                        onChange={this.handleChange} />
                    
                    <label htmlFor="input-telefone-instituicao">Telefone</label>
                    <input id="input-telefone-instituicao" type="text" name="telefone"
                        value={this.state.telefone}
                        onChange={this.handleChange} />

                    <button className="btEnviar" onClick={this.onSubmit}>Cadastrar</button>
                </div>
            </div>

        );
    }
}