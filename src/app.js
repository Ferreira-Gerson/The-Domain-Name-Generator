/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".org", ".us", ".io", ".pt", ".be"];

window.onload = () => {
  const domain = p =>
    pronoun.flatMap(
      adj.flatMap(a => noun.flatMap(n => ext.map(de => `${p}${a}${n}${e}`)))
    );
  console.log(domain);
};
