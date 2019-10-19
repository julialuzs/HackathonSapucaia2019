import React, { Component } from 'react'

export class ThumbCurso extends Component{
    render(){
        return(
            <div className="card" style={{width: 19 + 'rem'}}>
                
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5u-4d3-SszU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 className="card-title">{/* this.props.titulo */}Matemática Básica</h5>
                    <p className="card-text">{/* this.props.descricao */}FERRETTO PREPARA: MATEMÁTICA PARA ENEM E VESTIBULARES</p>
                    <a href="#" className="btn btn-warning">Confira</a>
                </div>
            </div>

        );
    }
}