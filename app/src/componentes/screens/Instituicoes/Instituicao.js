import React, { Component } from 'react'
import './Instituicoes.css'
import { Header, Footer } from '../../index'

export class Instituicoes extends Component {
    
    render() {
        return (
            <div>
                <h2>this.props.nome</h2>
                <div>
                    <p>this.props.telefone</p>
                    <p>this.props.endereco</p>
                    <p>this.props.email</p>
                </div>
            </div>
        )
    }
}
