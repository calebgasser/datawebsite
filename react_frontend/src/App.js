import './App.css';
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import DataProjects from './Components/DataProjects'
import Home from "./Components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/dataprojects" component={DataProjects}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
