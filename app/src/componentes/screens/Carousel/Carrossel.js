import React, { Component } from 'react';
import './Carousel.css'

export class Carousel extends Component {
    render(){
      return (
        <div id="carousel-container">
            <div id="title">
                <img id="logo" src="./img/icon.png" />
                <div>
                    <h1>DoAmpharo</h1>
                    <h4>Ensine, Aprenda, Doe. < br /> Promova novos futuros.</h4>
                </div>
                
            </div>
            
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/1.png" className="d-block w-100" alt="..." />
                    </ div>
                    <div className="carousel-item">
                        <img src="./img/2.png" className="d-block w-100" alt="..." />
                    </ div>
                    <div className="carousel-item">
                        <img src="./img/3.png" className="d-block w-100" alt="..." />
                    </ div>

                    <a className="right carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </ div>
            </ div>
            </div>
        );
    }
}
