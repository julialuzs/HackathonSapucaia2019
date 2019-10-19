import React, {Component} from 'react'
import './Header.css'

export class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Hackathon</a>
                
                <div id="navbar-right">
                    <a className="nav-link mr-sm-2" href="#">Registrar</a>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Entrar</button>
                </div>
                
                
            </nav>
        )
    }
}