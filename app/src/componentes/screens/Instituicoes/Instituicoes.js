import React, { Component } from 'react'
import './Instituicoes.css'
import { Header, Footer } from '../../index'
import { InstituicaoService } from '../../../services/instituicao.service'

export class Instituicoes extends Component {

    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            senha: '',
            telefone: '',
            cnpj: '',
            endereco: '',
            instituicoes: ''
        }

        this.instituicaoService = new InstituicaoService();
    }

    componentDidMount() {
        this.buscarInstituicoes();
    }

    buscarInstituicoes() {
        this.instituicaoService.buscarTodos()
        .then((instituicoes) => this.setState({ instituicoes: instituicoes }))
    }
    render() {
        return (
            <div>
                <Header />
                {/* {
                   this.state.instituicoes && this.state.instituicoes.map
                } */}

                <Footer />
            </div>
        )
    }
}
