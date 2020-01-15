import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <nav>
        <div className="navlink-container">
        <NavLink to="/">
          <h1>SecondActFitness</h1>
        </NavLink>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/book-online">
            <li>Book Online</li>
          </NavLink>
        </ul>
        </div>
        <NavLink to="/admin-login">
          <button>Admin Login</button>
        </NavLink>
      </nav>
    )
  }
}
