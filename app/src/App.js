import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home, Instituicoes, SignIn, SignUp, SignupInstituicao, SignupUser} from './componentes/index';
import { Curso } from './componentes/screens/Curso/Curso';
class App extends Component {
  render(){
    return (
        
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/instituicoes' component={Instituicoes} />
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/signup/instituicao" component={SignupInstituicao} />
        <Route path="/signup/user" component={SignupUser} />
        <Route path="/cursos" component={Curso} />
      </Switch>
          
    );
  }
}

export default App;