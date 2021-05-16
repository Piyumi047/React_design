import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Aboutuspage from './pages/aboutus';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact component={Homepage} />
         <Route path="/aboutus"  component={Aboutuspage} />
      </Switch>
    </Router>
  );
}

export default App;
