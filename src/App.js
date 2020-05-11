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
    <Route exact path="/" component={Overall}/>
    <Route exact path="/India-stat" component={India} />
    <Route exact path="/world-stat" component={World} />
    

    <hr></hr>
    <br></br>
    <div>
    <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge" style={{backgroundColor:"grey"}}>
     <center><h4> Made By shubham Soni</h4>
     <br></br>
     <h4>Gmail: shubhamsoni9780@gmail.com</h4>
     <br></br>
<h4>Phone no.: 978041****</h4>
</center>
</footer>
    </div>
    </div>
  </Router>
  );
}

export default App;
