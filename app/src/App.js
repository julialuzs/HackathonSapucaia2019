import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
/* import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails' */
/* import CreateProject from './components/projects/CreateProject'; */
import {Home, Instituicoes, SignIn, SignUp, SignupInstituicao, SignupUser} from './componentes/index'
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
        {/* <Route path="/create" component={CreateProject} />
        <Route path='/project/:id' component={ProjectDetails} /> */}
      </Switch>
          
    );
  }
}

export default App;