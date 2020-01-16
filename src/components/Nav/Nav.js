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
          <h1 className="Nav-title">Second Act Fitness</h1>
        </NavLink>
        <ul className="Nav_ul">
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
