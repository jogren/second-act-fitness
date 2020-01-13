import React, { Component } from 'react';
import { Nav } from '../Nav/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <main className="App">
        <h1>Second Act Fitness</h1>
        <Nav />
      </main>
    );
  }
}

export default App;
