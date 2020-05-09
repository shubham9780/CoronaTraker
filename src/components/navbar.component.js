import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/overall" className="navbar-brand">CoronaTraker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
        <Link to="/overall" className="nav-link">Overall Cases</Link>
        </li>
          <li className="navbar-item">
          <Link  to="/India-stat" className="nav-link">India</Link>
          </li>
          <li className="navbar-item">
          <Link  to="/world-stat" className="nav-link">World</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

