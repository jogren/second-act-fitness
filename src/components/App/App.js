import React, { Component } from 'react';
import { Nav } from '../Nav/Nav';
import { Header } from '../Header/Header';
import { About } from '../About/About';
import { Book } from '../Book/Book';
import { Login } from '../Login/Login';
import { HomePage } from '../HomePage/HomePage';
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
        <Route exact path="/" render={() =>
          <section className="section_home">
            <Nav />
            <Header />
            <HomePage />
          </section>
        } />
        <Route path="/about" render={() =>
          <section className="section_about">
            <Nav />
            <About /> 
          </section>
        } />
        <Route path="/book-online" render={() => 
          <section className="section_book-online">
            <Nav />
            <Book />
          </section>
        } />
        <Route path="/admin-login" render={() =>
          <section className="section_admin-login">
            <Nav /> 
            <Login /> 
          </section>
        } />
      </main>
    );
  }
}

export default App;
