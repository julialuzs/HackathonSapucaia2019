import React, { Component } from 'react';
import './Conteudo.css';
import { Beneficios } from '../../../index';
import { ThumbCurso } from './ThumbCurso/ThumbCurso';
import { InstituicoesExemplo } from '../../../index'

export class Conteudo extends Component {

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
                
                <Beneficios />
                <div id="content-body">
                    <div id="content-container">
                        <div id="categorias">
                            <h2>Categorias mais visitadas</h2>
                            <ul id="lista-categorias">
                                <li>
                                    <button type="button"  class="btn btn-outline-dark">Design Gráfico</button>
                                </li>
                                <li>
                                    <button type="button"  class="btn btn-outline-dark active">Matemática</button>
                                </li>
                                <li>
                                    <button type="button"  class="btn btn-outline-dark">Modelagem 3D</button>
                                </li>
                                <li>
                                    <button type="button"  class="btn btn-outline-dark">Arquitetura</button>
                                </li>
                                <li>
                                    <button type="button"  class="btn btn-outline-dark">Desenvolvimento</button>
                                </li>
                                <li>
                                    <button type="button"  class="btn btn-outline-dark">Maquiagem</button>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <ul id="lista-cursos">
                                {this.renderThumbCurso()}
                                <li><ThumbCurso /></li>
                            </ul>
                        </div>
                    </div>

                    <InstituicoesExemplo />

                </div>
            </div>

        );
    }
}