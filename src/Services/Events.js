import {formatDate} from "../utils/formatDate";

export function getEvents(date) {
  // fetch data
  date = date || new Date();
  // let char = "אבגדהזחטיכלמנסעפצקרשת";
  let events = {  
    "11/04/18":{daf:"ט", amud:"א", mesachta:"ראש השנה‬"},
    "11/05/18":{daf:"ט", amud:"ב", mesachta:"ראש השנה‬"},
    "11/06/18":{daf:"י", amud:"א", mesachta:"ראש השנה‬"},
    "11/07/18":{daf:"י", amud:"ב", mesachta:"ראש השנה‬"},
    "11/08/18":{daf:"יא", amud:"א", mesachta:"ראש השנה‬"},
    "11/09/18":{daf:"יא", amud:"ב", mesachta:"ראש השנה‬"},
    "11/10/18":{daf:"יב", amud:"א", mesachta:"ראש השנה‬"},
    "11/11/18":{daf:"יב", amud:"א", mesachta:"ראש השנה‬"},
    "11/12/18":{daf:"יג", amud:"ב", mesachta:"ראש השנה‬"},
    "11/13/18":{daf:"יג", amud:"א", mesachta:"ראש השנה‬"},
    "11/14/18":{daf:"יד", amud:"ב", mesachta:"ראש השנה‬"}
  }
  console.log("Date:", formatDate(date));
  console.log("obj:", events[formatDate(date)]);
  return events[formatDate(date)];
};
