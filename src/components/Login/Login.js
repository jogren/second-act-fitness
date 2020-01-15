import React, { Component } from 'react';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitLogin = (e) => {
    console.log('test')
  }

  render() {
    const { loginEmail, loginPassword } = this.state;
    return (
      <section className="Login_section">
        <header>
          <h1 className="title">SecondActFitness</h1>
        </header>
        <article className="login-container">
          <h4>Login</h4>
          <form className="login-form">
            <input
              className="login-email"
              type="text"
              placeholder="Email"
              name="loginEmail"
              value={loginEmail}
              onChange={(e) => this.handleChange(e)}
              autoComplete="username"
            />
            <input
              className="login-password"
              type="password"
              placeholder="Password"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => this.handleChange(e)}
              autoComplete="current-password"
            />
            <button className="login-button" disabled={!loginEmail || !loginPassword} onClick={(e) => this.submitLogin(e)}>Login</button>
            {/* {this.props.hasErroredReducer && <p>Please enter a valid email and password</p>} */}
          </form>
        </article>
      </section>
    )
  }
}