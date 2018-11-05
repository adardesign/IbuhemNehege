import React, { Component } from 'react';

let ResourceLinks = [
["congalhadaf.tripod.com","Al Hadaf"],
["www.animatedtalmud.com","animatedtalmud.com"],
["www.behindthedaf.com","behindthedaf.com"],
["dafnotes.blogspot.com","dafnotes"],
["www.dafaweek.com","dafaweek.com"],
["www.dafyomi.co.il","dafyomi.co.il"],
["www.dafyomi.org","dafyomi.org"],
["www.gottorah.com","gottorah.com"],
["www.hebrewbooks.org","hebrewbooks.org"],
["www.kolavrohom.com","Kol Avrohom.com"],
["www.myshiur.net","MyShiur.net"],
["www.shaspod.com","Shaspod.com"],
["www.shemayisrael.co.il","shemayisrael.co.il"],
["www.teachittome.com","TeachItToMe.com"],
["www.torah.org","Torah.org"],
["www.torahsearch.com","TorahSearch.com"],
["www.tosfos.com","Tosfos.com"],
["www.webyeshiva.org","Web Yeshiva"]
];


const List = () => (
      <div className="resources-links">
          <h1>Additional Resources</h1>
          <ul className="unstyled">
            {ResourceLinks.map( e => { console.log(e)
              return (<li key={e[1]}>
                  <a href={"http://" + e[0]}>{e[1]}</a>
                </li>)
            })}
          </ul>
      </div>
    );

export default List;

