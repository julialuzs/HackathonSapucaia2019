import React, { Component } from 'react'
import './InstituicoesExemplo.css'

export class InstituicoesExemplo extends Component {
    render() {
        return (
            <div id="instituicoes-exemplo">
                <h2 id="instituicoes-exemplo-title">Confira algumas de nossas Instituições Cadastradas.</h2>
                <hr id="hr" />
                <div id="instituicoes-exemplo-galeria">
                        
                        <div class="instituicoes-exemplo card">
                            <img class="card-img-top" src="./img/4.png" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Instituição 01</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum eros eu augue porta hendrerit. Etiam maximus finibus suscipit.</p>
                                <button type="button" class="btn btn-warning">Saiba Mais</button>                                
                            </div>
                        </div>
                        
                        <div class="instituicoes-exemplo card ">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Instituição 02</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum eros eu augue porta hendrerit. Etiam maximus finibus suscipit.</p>
                                <button type="button" class="btn btn-warning">Saiba Mais</button> 
                            </div>
                        </div>  

                        <div class="instituicoes-exemplo card">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Instituição 03</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum eros eu augue porta hendrerit. Etiam maximus finibus suscipit.</p>
                                <button type="button" class="btn btn-warning">Saiba Mais</button> 
                            </div>
                        </div>
                        
                        <div class="instituicoes-exemplo card ">
                            <img class="card-img-top" src="..." alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Instituição 04</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum eros eu augue porta hendrerit. Etiam maximus finibus suscipit.</p>
                                <button type="button" class="btn btn-warning">Saiba Mais</button> 
                            </div>
                        </div>  
                       
                </div>
            </div>
        );
    }
}