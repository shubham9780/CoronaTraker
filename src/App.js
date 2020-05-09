import React from 'react';
import {BrowserRouter as Router ,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Overall from "./components/Overall";
import India from "./components/India";
import World from "./components/World";


function App() {
  return (
    <Router>
      <div className="container">
    <Navbar />
    <br/>
    <Route path="/Overall" component={Overall}/>
    <Route  path="/India-stat" component={India} />
    <Route  path="/world-stat" component={World} />
    </div>
    <div className="container">
      heyyyyy
    </div>
  </Router>
  );
}

export default App;
