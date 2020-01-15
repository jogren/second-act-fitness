import React, { Component } from 'react';
import { BookingForm } from '../BookingForm/BookingForm';
import Calendar from 'react-calendar';

export class Book extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      time: '',
      selectNewDate: false
    }
  }

  handleSelectDate = date => {
    this.setState({ date })
    this.setState({ time: '' })
  }

  handleSelectTime = (time) => {
    this.setState({ time })
  }

  render() {
    const { date, time } = this.state;
    let dayObj = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    let timeOptions = ['6:00am', '7:00am', '8:00am', '9:00am', '6:00pm', '7:00pm', '9:00pm'];
    let inputList = timeOptions.map((option, index) => {
      let borderClass = option === time ? 'time-item-selected' : 'time-item-not-selected'
      return <button onClick={() => this.handleSelectTime(option)} className={borderClass} key={index}>{option}</button>
    })
    return (
      <section>
        <h2>Book Online</h2>
        <section className="calendar-container">
          <Calendar
            onChange={this.handleSelectDate}
            value={this.state.date}
          />
          <div className="pick-appo-list">
            <div className="appo-list-container">
              {inputList}
            </div>
          </div>
        </section>
        { date && time && <div className="booking-container">
          <p>Please confirm your appointment for {dayObj[date.getDay()]}, {date.getMonth() + 1}/{date.getDate()}/{ date.getFullYear() } at { time }</p>
          <BookingForm />
        </div> }
      </section>
    )
  }
}