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
      isBookEnabled: false
    }
  }

  handleSelectDate = date => {
    this.setState({ date })
    this.setState({ time: '' })
  }

  handleSelectTime = (time) => {
    this.setState({ time })
  }

  changeView = () => {
    const { view } = this.state;
    if(view === 'calendar') {
      this.setState({ view: 'booking' });
    } else {
      this.setState({ view: 'calendar' });
    }
    this.setState({ isBookEnabled: false })
  }

  toggleBookEnabled = ({name, email, phone, street, city}) => {
    if (name && email && phone && street && city) {
      this.setState({ isBookEnabled: true });
    } else {
      this.setState({ isBookEnabled: false });
    } 
  }

  handleBookingWindow = () => {
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
    if(date && time) {
      return <p>{dayObj[date.getDay()]}, {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()} | {time}</p>
    } else if(date) {
      return <p>{dayObj[date.getDay()]}, {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
    } else {
      return <p></p>
    }
  }

  render() {
    const { date, time, view, isBookEnabled } = this.state;
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
            <section className="booking-confirmation">
              <h3>In Home Session</h3>
              <p>1 hr | $25</p>
              { this.handleBookingWindow() }
              { view === 'calendar' && <button onClick={this.changeView} disabled={!time || !date}>Next</button> }
              {view === 'booking' && <button disabled={!isBookEnabled}>Book</button> }
            </section>
          </article>
        </div>
      </section>
    )
  }
}