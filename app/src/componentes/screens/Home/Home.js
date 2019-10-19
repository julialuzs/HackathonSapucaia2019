import React, {Component} from 'react';
import {Header, Footer, Content, Carousel} from '../../index'

export class Home extends Component {
    render(){
      return (
        <div>
            <Header />
            <Carousel />
            <Content />
            <Footer />
        </div>
        
      );
    }
    
  }
