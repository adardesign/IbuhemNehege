import React, { Component } from 'react';
import './styles/App.css';
import CalendarView from './Components/Calendar';
import List from './Components/List';
import Today from './Components/Today';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ibuhem Nehage</h1>
          <Today/>
          <CalendarView/>
          <List/>
        </header>
      </div>
    );
  }
}

export default App;
