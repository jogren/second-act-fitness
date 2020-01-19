import React, { Component } from 'react';
import { Nav } from '../Nav/Nav';
import { Header } from '../Header/Header';
import { About } from '../About/About';
import { Book } from '../Book/Book';
import { Login } from '../Login/Login';
import { HomePage } from '../HomePage/HomePage';
import { Route } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { CSSTransition, TransitionGroup } from "react-transition-group";



class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: ['Mistakes are proof you\'re trying!', 'Nobody bats 1000!', 'You can’t lead the calvary if you look funny riding a horse.', 'Plans change quickly, after you get punched in the face.', 'Nothing is ever figured out.'],
      currentQuote: ''
    }
  }

  componentDidMount = () => {
    const { quotes } = this.state;
    let index = 0;
    setInterval(
      () => { 
        this.setState({ currentQuote: quotes[index] });
        index++;
        if(index === quotes.length) {
          index = 0;
        }
      }, 3000);
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
            <article className="about-shell">
              <div className="about-header">
                {/* <TransitionGroup>
                  <CSSTransition
                    key={this.state.currentQuote}
                    // timeout={1000}
                    classNames="messageout"
                  > */}
                    {/* <div style={{ marginTop: 20 }}>
                      <img className="centered-image" src={this.state.selected.url} />
                    </div> */}
                  <h4>{this.state.currentQuote}</h4>
                  {/* </CSSTransition>
                </TransitionGroup> */}
              </div>
            </article>
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
