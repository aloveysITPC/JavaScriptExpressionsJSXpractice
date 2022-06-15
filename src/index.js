//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
//lecture 397

import React from "react";
import ReactDOM from "react-dom";
let year = new Date().getFullYear();
let creator = "Ali Loveys";
ReactDOM.render(
  <div>
    <p>Created by {creator}</p>;<p>Copyright {year}</p>;
  </div>,
  document.getElementById("root")
);
