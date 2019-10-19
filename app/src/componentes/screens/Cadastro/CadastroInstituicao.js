import React, { Component } from 'react'
import './Cadastro.css'
import { Header } from '../../index'
import { InstituicaoService } from '../../../services/instituicao.service'

export class CadastroInstituicao extends Component {

    constructor() {
        super()

        this.state = {
            senha: '',
            email: ''
        }

        this.instituicaoService = new InstituicaoService();
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({ [name]: value })
    }

    onSubmit() {
        this.instituicaoService.adicionarInstituicao()
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
                    onChange={this.handleChange}/>

                    <label htmlFor="input-email-signup-instituicao"></label>
                    <input id="input-senha-signup-instituicao" type="password" name="senha-signup" 
                    value={this.state.senha}
                    onChange={this.handleChange}/>

                    <button className="btEnviar" onClick={this.onSubmit}>Logar</button>
                </div>
            </div>

        );
    }
}