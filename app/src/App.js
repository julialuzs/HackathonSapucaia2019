import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
/* import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails' */
/* import CreateProject from './components/projects/CreateProject'; */
import {Home} from './componentes/index'

class App extends Component {
  render(){
    return (
        
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/project/:id' component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} /> */}
          </Switch>
          
      
    );
  }
  
}

export default App;