import React, { Component } from 'react';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: '',
      isLoggedIn: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitLogin = (e) => {
    e.preventDefault();
    this.setState({ loginEmail: '', loginPassword: '' })
    this.setState({ isLoggedIn: true })
  }

  render() {
    const { loginEmail, loginPassword, isLoggedIn } = this.state;
    return (
        <section className="Login_section">
          { !isLoggedIn ?
          <article className="login-container">
            <h2>Login</h2>
            <form className="login-form">
              <label>Email
                <input
                  className="login-email"
                  type="text"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={(e) => this.handleChange(e)}
                  autoComplete="username"
                />
              </label>
              <label>Password
                <input
                  className="login-password"
                  type="password"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={(e) => this.handleChange(e)}
                  autoComplete="current-password"
                />
              </label>
              <button className="login-button" disabled={!loginEmail || !loginPassword} onClick={(e) => this.submitLogin(e)}>Submit</button>
              {/* {this.props.hasErroredReducer && <p>Please enter a valid email and password</p>} */}
            </form>
          </article>
          : 
          <article className="article_admin-logged-in">
            <button>Settings</button>
            <button>Calendar View</button>
          </article>
        }
        </section>
    )
  }
}