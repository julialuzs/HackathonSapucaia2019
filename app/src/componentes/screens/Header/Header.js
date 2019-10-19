import React, {Component} from 'react'
import './Header.css'

export class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark" >
                <a className="navbar-brand" href="#">Ampharo</a>
                
                <div id="navbar-right">
                    <a className="register nav-link mr-sm-2" href="#">Registrar</a>
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Entrar</button>
                </div>
                
            </nav>
        )
    }
}