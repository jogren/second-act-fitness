import React, { Component } from 'react';
import { BookingForm } from '../BookingForm/BookingForm';
import Calendar from 'react-calendar';

export class Book extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      time: '',
      view: 'calendar',
      isBookEnabled: false,
      isBookingSubmitted: false,
      bookingInfo: {}
    }
  }

  handleSelectDate = date => {
    this.setState({ 
      date, 
      time: '' 
    })
  }

  handleSelectTime = (time) => {
    this.setState({ time })
  }

  validateEmail = email => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  changeView = () => {
    const { view } = this.state;
    if(view === 'calendar') {
      this.setState({ view: 'booking' });
    } else {
      this.setState({ view: 'calendar' });
    }
    this.setState({ 
      isBookEnabled: false,
      bookingInfo: {}
    })
  }

  toggleBookEnabled = (state) => {
    const { name, email, phone, street, city } = state;
    if (name && email && phone && street && city) {
      this.setState({ isBookEnabled: true });
    } else {
      this.setState({ isBookEnabled: false });
    } 
    this.setState({ bookingInfo: state })
  }

  submitBooking = () => {
    const { email } = this.state.bookingInfo;
    const isValidEmail = this.validateEmail(email)
    if(isValidEmail) {
      // post to database
      // thank you for booking
      // back to main booking screen with 
      this.setState({ isBookingSubmitted: true })
      setTimeout(() => { 
        this.setState({
          date: new Date(),
          time: '',
          view: 'calendar',
          isBookEnabled: false,
          isBookingSubmitted: false,
          bookingInfo: {} 
        }) 
      }, 3000);
    } else {
      console.log('not valid email')
    }
  }

  handleBookingWindow = () => {
    const { date, time } = this.state;
    let dayObj = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' }
    if(date && time) {
      return <p>{dayObj[date.getDay()]}, {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()} | {time}</p>
    } else if(date) {
      return <p>{dayObj[date.getDay()]}, {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
    } else {
      return <p></p>
    }
  }

  render() {
    const { date, time, view, isBookEnabled, isBookingSubmitted } = this.state;
    let timeOptions = ['6:00am', '7:00am', '8:00am', '9:00am', '6:00pm', '7:00pm', '9:00pm'];
    let inputList = timeOptions.map((option, index) => {
      let borderClass = option === time ? 'time-item-selected' : 'time-item-not-selected'
      return <button onClick={() => this.handleSelectTime(option)} className={borderClass} key={index}>{option}</button>
    })

    return (
      <section className="Book_section">
        <h2>Schedule Online</h2>
        <div className="booking-shell">
          { view === 'booking' ? 
          <article className="booking-form-article">
            <BookingForm changeView={this.changeView} toggleBookEnabled={this.toggleBookEnabled}/> 
          </article>
          : 
          <article className="article_calendar-time">
            <Calendar
              onChange={this.handleSelectDate}
              value={date}
            />
            <div className="pick-appo-list">
              <div className="appo-list-container">
                {inputList}
              </div>
            </div> 
          </article> 
          }
          <article className="booking-container">
            { !isBookingSubmitted ? 
            <section className="booking-confirmation">
              <h3>In Home Session</h3>
              <p className="hour-and-rate">1 hr | $25</p>
              { this.handleBookingWindow() }
              { view === 'calendar' && <button onClick={this.changeView} disabled={!time || !date}>Next</button> }
              {view === 'booking' && <button disabled={!isBookEnabled} onClick={this.submitBooking}>Book</button> }
            </section>
            :
            <section className="booking-thank-you">
              <p>Thank you for booking an appointment!</p>
            </section>
            }
          </article>
        </div>

      </section>
    )
  }
}