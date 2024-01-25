import React, { useState, useEffect } from "react";
import "../SASS/about.scss";
import {
  Services,
  Video,
  Reviews,
  Recent_Blogs,
  Instagram_Post,
  Present,
} from "./Components";

export default function About() {
  return (
    <div id="about">
      <Present title="About Us" src="./about-background.png" />
      <StartedSec />
      <Services />
      <Video />
      <Reviews />
      <Recent_Blogs />
      <Stores />
      <Instagram_Post />
    </div>
  );
}

function StartedSec() {
  return (
    <div classNam="wide_container" id="startedsec_container">
      <h2>How was swanky started?</h2>
      <p>
        Risus augue curabitur diam senectus congue velit et. Sed vitae metus
        nibh sit a tristique. Nulla adipiscing pharetra pellentesque maecenas
        odio eros at. Et libero vulputate habitasse amet duis erat volutpat
        vitae eget. Quam libero etiam et in ac at quis. Sed id parturient
        viverra blandit. Ultrices congue id odio ullamcorper tellus et.
        Vulputate venenatis malesuada nulla neque neque sollicitudin eu. Lorem
        ipsum dolor sit amet consectetur. Eget sollicitudin magna egestas massa
        accumsan orci leo. Nisl odio in proin ultrices mi et mattis vel nulla.
        Mattis auctor id ut eget augue sed cras. Eget tortor cursus dignissim
        purus penatibus. At placerat dis dis tincidunt nunc nisl vivamus vitae
        felis.{" "}
      </p>
    </div>
  );
}

function Stores() {
  return (
    <div id="our_stores_container">
      <img />
      <div id="stores_mini_container">
        <h2>Our stores</h2>
        <p>You can also directly buy products from our stores.</p>
        <div>
          <h3>USA</h3>
          <p>730 Glenstone Ave 65802, Springfield, US</p>
          <p>
            +123 222 333 44 <br />
            +123 666 777 88
          </p>
          <p>swanky@yourinfo.com</p>
        </div>
        <div>
          <h3>France</h3>
          <p>13 Rue Montmartre 75001, Paris, France</p>
          <p>
            +123 222 333 44 <br />
            +123 666 777 88
          </p>
          <p>swanky@yourinfo.com</p>
        </div>
      </div>
    </div>
  );
}
