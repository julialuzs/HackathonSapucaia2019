import React, { Component } from 'react'
import './Instituicoes.css'
import { Header, Footer } from '../../index'
import { InstituicaoService } from '../../../services/instituicao.service'
import { Instituicao } from './Instituicao'

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
               <div className="project-list section">
                    {this.state.instituicoes && this.state.instituicoes.map(instituicao=>{
                        return (
                            <Instituicao instituicao={instituicao} key={instituicao.id} />
                        )
                    })}
                </div>
                <Footer />
           </div>
            
        )
    }
}
