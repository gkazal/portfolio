import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Project from './Components/Project/Project';
import Blogs from './Components/Blogs/Blogs';
import Resume from './Components/Resume/Resume'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/project">
            <Project />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/cv">
            <Resume/>
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
