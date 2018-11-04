import React, { Component } from 'react';
import Hebcal from 'hebcal-fixed';
import {getEvents} from './../Services/Events';
import {formatZmanim} from './../utils/formatZmanim';

class Today extends Component {
  render() {
    let year = new Hebcal();
    // window.year = year;
    // window.calInstance = Hebcal;
    let today = year.find("today")[0];
    let day = new Hebcal.HDate();
    
    let todaysEvents = getEvents();
    let zmanim = day.getZemanim();
    // chatzot, chatzot_night, alot_hashachar, alot_hashacher, misheyakir, misheyakir_machmir, sof_zman_shma, sof_zman_tfilla, mincha_gedola, mincha_ketana, plag_hamincha, tzeit, tzeitstars, neitz_hachama, shkiah
    return (
      <div className="Calander">
          <h1>{Hebcal.gematriya(day.day)} {day.getMonthName("h")} {Hebcal.gematriya(day.year, 3)}</h1>
          <h1>{todaysEvents.mesachta}</h1>
          <h2>דף {todaysEvents.daf}  עמוד {todaysEvents.amud}</h2>
          <div className="zmanim">
          <h3>Zmanim</h3>
            <ul>
              {Object.keys(zmanim).map(e => {
              return  <li key={e}>{formatZmanim(e)} : {zmanim[e].getUTCHours() + ":" + zmanim[e].getUTCMinutes()}</li>

              })}
            </ul>
          </div>
          
          Daf Hayomi: {year.getMonth(today.month, today.year).days[today.day].dafyomi()}
          <br/>
          Sedra {today.getMonthName()}
          Sedra: {year.getMonth(today.month, today.year).days[today.day].dafyomi()}
          
          <br/>
          Month: {today.day} {today.getMonthName("h")}


          This year is a: {year.isLeapYear() ? "Ibur": "pashut"} Year
          </div>
    );
  }
}

export default Today;
