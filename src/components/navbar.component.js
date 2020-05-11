import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import c from "./img/c.png";
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="brand">
        <Link to="/" className="navbar-brand">
        <img style={{hieght:"11%",width:"11%"}}src={c} alt="corona"/>
          CoronaTraker
          </Link>
          </div>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link exact to="/India-stat" className="nav-link">India</Link>
          </li>
          <li className="navbar-item">
          <Link  exact to="/world-stat" className="nav-link">World</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

