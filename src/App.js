import React, { Component } from 'react';
import './App.css'
import ImpactIndia from './components/ImpactIndia';
import NavBar from './components/NavBar';
import ImpactAcrossGlobe from './components/ImpactAcrossGlobe';
import { BrowserRouter, Route,Switch} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ImpactIndia} />
          <Route path="/impactAcrossGlobe" component = {ImpactAcrossGlobe} />
        </Switch>
      </BrowserRouter>
    );
    }
}

export default App;
