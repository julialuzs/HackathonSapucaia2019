import React, {Component} from 'react';
import {Header, Carousel, Benefits} from '../../index'

export class Home extends Component {
    render(){
      return (
        <div>
            <Header />
            <Carousel />
            <Benefits />
        </div>
        
      );
    }
    
  }
