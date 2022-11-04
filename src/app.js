/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".org", ".us", ".io", ".pt", ".be"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < ext.length; e++) {
          console.log(`${pronoun[p]}${adj[a]}${noun[n]}${ext[e]}`);
        }
      }
    }
  }

  const domainNameGenerated = pronoun.flatMap(f => {
    return adj.flatMap(s =>
      noun.flatMap(t => ext.map(fo => `${f}${s}${t}${fo}`))
    );
  });
  console.log(domainNameGenerated.join(" "));
};
