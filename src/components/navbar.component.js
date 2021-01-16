import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './style.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">workshot</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link"><FontAwesomeIcon className="UserCircle" icon={faUserCircle} /></Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}