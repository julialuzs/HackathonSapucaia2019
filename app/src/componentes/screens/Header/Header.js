import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark" >
                <div id="navbar-display">
                    <a className="navbar-brand" href="/">DoAmpharo</a>
                    <a className="nav-link" href="/instituicoes">Instituições <span class="sr-only">(current)</span></a>
                    <a className="nav-link" href="/cursos">Cursos <span class="sr-only">(current)</span></a>
                </div>
                <div id="navbar-display">
                    <a className="nav-link mr-sm-2" href="/signup">Registrar</a>
                    <a href="/signin" ><button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Entrar</button></a>
                </div>

            </nav>
        )
    }
}