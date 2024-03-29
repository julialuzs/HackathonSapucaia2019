import React, { Component } from 'react'
import './Cadastro.css'
import { Header } from '../../index'

export class Cadastro extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <div id="title-auth-container">
                        <img id="logo" src="./favicon.png" />
                        <h2 id="title-auth">Crie uma nova conta!</h2>
                    </div>
                    
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