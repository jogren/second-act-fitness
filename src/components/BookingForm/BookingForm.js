import React, { Component } from 'react';

export class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      aptNumber: '',
      state: '',
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => this.props.toggleBookEnabled(this.state))
  }

  render() {
    return (
      <form className="booking-form">
        <button onClick={this.props.changeView} className='back-btn'>◀ back</button>
        <h3>Add Your Info </h3>
        <p>Tell us a bit about yourself...</p>
        <label htmlFor="name">Name *
          <input 
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <label htmlFor="email">Email *
          <input
            name="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <label htmlFor="phone">Phone Number *
          <input
            name="phone"
            id="phone"
            value={this.state.phone}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <div className="BookingForm-input-container">
          <label htmlFor="street" className="label-left">Street *
            <input
              name="street"
              id="street"
              value={this.state.street}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label htmlFor="aptNumber" className="label-right">Apt. / Floor No.
              <input
              name="aptNumber"
              id="aptNumber"
              value={this.state.aptNumber}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </div>
        <div className="BookingForm-input-container">
          <label htmlFor="city" className="label-left">City *
              <input
              name="city"
              id="city"
              value={this.state.city}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label htmlFor="state" className="label-right">State
                <input
              name="state"
              id="state"
              value={this.state.state}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </div>
        <label htmlFor="email">Add Your Message
            <input
            name="message"
            id="message"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <p>* Required Info</p>
      </form>
    )
  }
}