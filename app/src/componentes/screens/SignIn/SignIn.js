import React, { Component } from 'react'
import { Header } from '../../index'

export class SignIn extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <h2>Login</h2>
                    <br />
                    <a href="/signup/instituicao"><button type="button" class="btn btn-outline-warning btn-lg btn-block">Sou uma instituição!</button></a>
                    <h5>Busco visibilidade para a rede em que operamos. Além de doações voluntárias a fim de adquirir recursos.</h5>
                    <br />
                    <a href="/signup/user"><button type="button" class="btn btn-outline-warning btn-lg btn-block">Sou um usuário!</button></a>
                    <h5>Busco colaborar com instituições, publicando ou consumindo os cursos da plataforma.</h5>

                </div>
            </div>

        );
    }
}