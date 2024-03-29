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
                    <div id="title-auth-container">
                        <img id="logo" src="./favicon.png" />
                        <h2 id="title-auth">Cadastre sua Instituição!</h2>
                    </div>
                    <br />
                    <label htmlFor="input-nome-instituicao">Nome</label>
                    <input className="form-control" id="input-nome-instituicao" type="text" name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange} />

                    <label htmlFor="input-email-instituicao">E-mail</label>
                    <input className="form-control" id="input-email-instituicao" type="text" name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />

                    <label htmlFor="input-senha-instituicao">Senha</label>
                    <input className="form-control" id="input-senha-instituicao" type="password" name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange} />

                    <label htmlFor="input-cnpj-instituicao">CNPJ</label>
                    <input className="form-control" id="input-cnpj-instituicao" type="text" name="cnpj"
                        value={this.state.cnpj}
                        onChange={this.handleChange} />

                    <label htmlFor="input-endereco-instituicao">Endereço</label>
                    <input className="form-control" id="input-endereco-instituicao" type="text" name="endereco"
                        value={this.state.endereco}
                        onChange={this.handleChange} />
                    
                    <label htmlFor="input-telefone-instituicao">Telefone</label>
                    <input className="form-control" id="input-telefone-instituicao" type="text" name="telefone"
                        value={this.state.telefone}
                        onChange={this.handleChange} />

                    <button className="auth btn btn-success btn-lg btn-block btEnviar" onClick={this.onSubmit}>Cadastrar</button>
                </div>
            </div>

        );
    }
}