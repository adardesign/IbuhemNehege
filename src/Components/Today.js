import React, { Component } from "react";
import Hebcal from "hebcal-fixed";
import { getEvents } from "./../Services/Events";
import { formatZmanim } from "./../utils/formatZmanim";
import { format24 } from "./../utils/formatDate";
class Today extends Component {
  render() {
    let day = new Hebcal.HDate();
    let todaysEvents = getEvents();
    let zmanim = day.getZemanim();
    return (
      <div className="Calander">
        <h1>
          {Hebcal.gematriya(day.getDay() + 1)} {day.getSedra("h")[0]},{" "}
          {Hebcal.gematriya(day.day)} {day.getMonthName("h")}{" "}
          {Hebcal.gematriya(day.year, 3)}{" "}
        </h1>
        <h1>{todaysEvents.mesachta}</h1>
        <h2>
          דף {todaysEvents.daf} עמוד {todaysEvents.amud}
        </h2>
        <div className="zmanim">
          <h3>Zmanim</h3>
          <ul className="unstyled">
            {Object.keys(zmanim).map(e => {
              return formatZmanim(e) ? (
                <li key={e}>
                  {formatZmanim(e)} :{" "}
                  {format24(zmanim[e].getUTCHours()) +
                    ":" +
                    zmanim[e].getUTCMinutes()}
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Today;
