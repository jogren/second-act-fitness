import React, { Component } from 'react';
import { Nav } from '../Nav/Nav';
// import { Header } from '../Header/Header';
import { About } from '../About/About';
import { Book } from '../Book/Book';
import { Login } from '../Login/Login';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <main className="App">
        <Nav />
        <Route path="/about" component={ About } />
        <Route path="/book-online" component={ Book } />
        <Route path="/admin-login" component={ Login } />
      </main>
    );
  }
}

export default App;
