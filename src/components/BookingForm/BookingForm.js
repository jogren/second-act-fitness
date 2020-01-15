import React, { Component } from 'react';

export class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <form>
        <section className="BookingForm_input-container">
          <div className="BookingForm-left-side">
            <label htmlFor="firstName">First Name:
              <input 
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                placeholder="John"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="lastName">Last Name: 
              <input
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                placeholder="Doe"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>
          <div className="BookingForm-right-side">
            <label htmlFor="email">Email: 
              <input
                name="email"
                id="email"
                value={this.state.email}
                placeholder="john.doe@gmail.com"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label htmlFor="phone">Phone:
              <input
                name="phone"
                id="phone"
                value={this.state.phone}
                placeholder="(555) 555-5555"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>
        </section>
        <button disabled={!firstName || !lastName || !email || !phone}>Confirm Booking</button>
      </form>
    )
  }
}