import React, { Component } from 'react'
import './SignUp.css'
import { Header } from '../../index'

export class SignupInstituicao extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="container">
                    <h2>Crie uma nova conta!</h2>
                    <br />
                    <label htmlFor="input-nome-signup-instituicao"></label>
                    <input id="input-nome-signup-instituicao"/>

                    <label htmlFor="input-email-signup-instituicao"></label>
                    <input id="input-email-signup-instituicao"/>
                </div>
            </div>

        );
    }
}