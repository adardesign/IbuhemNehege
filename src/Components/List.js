import React, { Component } from 'react';
import Hebcal from 'hebcal-fixed';

class List extends Component {
  render() {
    let year = new Hebcal();
    console.log(year)
    console.log("test");
    return (
      <div className="Calander">
          <h1>{year.year}</h1>
          
          This year is a: {year.isLeapYear() ? "Ibur": "pashut"} Year
          <ul>
            {Object.keys(year.holidays).map( e => {
              return (<li key={e}>{year.holidays[e][0].desc[2]}</li>)
            })}
          </ul>
      </div>
    );
  }
}

export default List;
