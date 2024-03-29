import React, { Component } from 'react'
import './Beneficios.css'

export class Beneficios extends Component {
    render() {
        return (
            <div id="benefits">
                <div className="benefit">
                <img src="https://img.icons8.com/dusk/64/000000/receive-cash.png" />
                    <p>Doe para associações que carecem de recursos e ajude no atendimento integral de pessoas necessitadas.</p>
                </div>
                <div className="benefit">
                    <img src="https://img.icons8.com/dusk/64/000000/handshake.png" />
                    <p>Seja a ponte entre o doador e diversos necessitados através da distribuição de seu conhecimento mediante a distribuição de cursos.</p>
                </div>
                <div className="benefit">
                    <img src="https://img.icons8.com/dusk/64/000000/children.png" />
                    <p>Cadastre sua Instituição em nossa plataforma e garanta o acesso livre e gratuito aos nossos cursos para as crianças atendidas por sua rede. </p>
                </div>
                <div className="benefit">
                    <img src="https://img.icons8.com/dusk/64/000000/books.png" />
                    <p>Garanta cursos online de diversas áreas e fomente a alfabetização e cultura de crianças presentes em redes auxiliadoras.</p>
                </div>
            </div>
        )
    }
}