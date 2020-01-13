import React, { Component } from 'react';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <nav>
        <button>Home</button>
        <button>About Us</button>
        <button>Book Online</button>
      </nav>
    )
  }
}
