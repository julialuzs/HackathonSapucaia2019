import React, { Component } from 'react'
import './Instituicoes.css'

export class Instituicao extends Component {

    render() {
        const { nome, telefone, endereco, email } = this.props.instituicao
        return (
            <div id="container">
                <div>
                    <img class="card-img-top" src="..." alt="Card cap" src="./img/4.jpg" />
                    <div class="card-body">
                        <h5 class="card-title">{nome}</h5>
                        <p class="card-text">{telefone}</p>
                        <p class="card-text">{email}</p>
                        <p class="card-text">{endereco}</p>
                        <button type="button" class="btn btn-warning">Saiba Mais</button>
                    </div>
                </div>
            </div>
        )
    }
}
