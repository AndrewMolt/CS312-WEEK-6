//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const { model: tmodel, coloursByPopularity: tcolours, speedStats } = tesla;

const [tcolor1, tcolor2] = tesla.coloursByPopularity;

var teslaTopColour = tcolor1;

const { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty } =
  tesla.speedStats;

const {
  model: hmodel,
  coloursByPopularity: hcolours,
  speedStats: hspeedStats,
} = honda;

const [hcolor1, hcolor2] = hcolours;

var hondaTopColour = hcolor1;

const { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty } = hspeedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
