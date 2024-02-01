import React from "react";
import "../SASS/test.scss";
import { Item } from "./Components";

export default function Test() {
  return (
    <div id="item_container">
      <Item />
      <ItemDetails />
    </div>
  );
}

function ItemDetails() {
  return (
    <div id="item_details_container">
      <ul>
        <li>
          <h2>Description</h2>
        </li>
        <li>
          <h2>Additional Info</h2>
        </li>
        <li>
          <h2>Reviews (x)</h2>
        </li>
      </ul>
      <p>
        Product Description
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
        nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla
        quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
        tristique cursus.
      </p>
      <ul id="para_list">
        <li>Donec nec justo eget felis facilisis fermentum.</li>
        <li>Suspendisse urna viverra non, semper suscipit pede.</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
        nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
        amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla
        quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
        tristique cursus.
      </p>
      <div className="line"></div>
    </div>
  );
}
