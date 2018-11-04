import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class CalendarView extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          calendarType="Hebrew"
          tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default CalendarView;
