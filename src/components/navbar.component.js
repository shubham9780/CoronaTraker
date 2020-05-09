import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          CoronaTraker
          </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
        <Link to="/" className="nav-link">Overall Cases</Link>
        </li>
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

