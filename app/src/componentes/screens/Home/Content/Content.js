import React, { Component } from 'react'
import './Content.css'
<<<<<<< HEAD
import { Benefits} from '../../../index'
=======
import { Carousel, Benefits } from '../../../index'
>>>>>>> f33ad6b888d8fd126d0e8892d93ab2d66ce140c8
import { ThumbCurso } from './ThumbCurso/ThumbCurso';

export class Content extends Component {

    renderThumbCurso() {

        const thumbsCurso = this.props.curso
        thumbsCurso && thumbsCurso.map(thumb => {
            return (
                <li><ThumbCurso key={thumb.id} /></li>
            )
        })
    }
    render() {
        return (
            <div>
                
                <Benefits />
                <div id="content-body">
                    <div className="half-content">
                        <div id="categorias">
                            <h2>Categorias mais visitadas</h2>
                            <ul id="lista-categorias">
                                <li>
                                    <button type="button" onClick="" class="active btn btn-outline-dark">Design Gráfico</button>
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
                            <ul id="lista-cursos">
                                {this.renderThumbCurso()}
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