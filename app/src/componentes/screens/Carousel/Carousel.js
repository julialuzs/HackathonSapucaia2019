import React, {Component} from 'react';
import './Carousel.css'
export class Carousel extends Component {
    render(){
      return (
        <div id="container">
            <div id="title">
                <h1>Hackathon</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ligula non ex commodo faucibus a quis diam. Maecenas libero lorem, consectetur vel felis ut, finibus commodo diam.</h4>
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
                </ div>

                <a className="left carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </ div>
        </div>
        
        
      );
    }  
}
