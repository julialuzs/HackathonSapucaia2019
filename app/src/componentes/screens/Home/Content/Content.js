import React, {Component} from 'react'
import './Content.css'
import {Carousel, Benefits} from '../../../index'
import { ThumbCurso } from './ThumbCurso/ThumbCurso';

export class Content extends Component{
    render(){
        const thumbsCurso = this.props.curso
        return(
            <div>
                <Carousel />
                <Benefits />
                <div id="content-body">
                    <div className="half-content">
                        <div id="categorias">
                            <h2>Categorias mais visitadas</h2>
                            <ul id="lista-categorias">
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Design Gráfico</button>
                                </li>
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Matemática</button>
                                </li>
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Modelagem 3D</button>
                                </li>
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Arquitetura</button>
                                </li>
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Desenvolvimento</button>
                                </li>
                                <li>
                                    <button type="button" onClick="" class="btn btn-outline-dark">Maquiagem</button>
                                </li>
                                   
                            </ul>
                        </div>

                        <div>
                            <ul>
                                    <li>
                                        <ThumbCurso /> 
                                    </li>
                              
                              
                            </ul>
                        </div>
                    </div>

                    <div className="half-content">

                    </div>

                    
                </div>
            </div>
            
        );
    }
}