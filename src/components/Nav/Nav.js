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
        <NavLink to="/">
          <h1>SecondActFitness</h1>
        </NavLink>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/book-online">
            <li>Book Online</li>
          </NavLink>
        </ul>
      </nav>
    )
  }
}
