import React, { Component } from 'react';
import './styles/App.css';
import Calendar from './Components/Calendar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TEST</h1>
          <Calendar/>
        </header>
      </div>
    );
  }
}

export default App;
