import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home, Instituicoes, Login, Cadastro, CadastroInstituicao, CadastroUsuario} from './componentes/index';
import { Curso } from './componentes/screens/Curso/Curso';
class App extends Component {
  render(){
    return (
        
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/instituicoes' component={Instituicoes} />
        <Route path="/signin" component={Login} exact/>
        <Route path="/signup" component={Cadastro} exact/>
        <Route path="/signup/instituicao" component={CadastroInstituicao} />
        <Route path="/signup/user" component={CadastroUsuario} />
        <Route path="/cursos" component={Curso} />
      </Switch>
          
    );
  }
}

export default App;