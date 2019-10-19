import React, {Component} from 'react';
import {Header, Footer, Conteudo, Carrossel} from '../../index'

export class Home extends Component {
    render(){
      return (
        <div>
            <Header />
            <Carrossel />
            <Conteudo />
            <Footer />
        </div>
        
      );
    }
    
  }


