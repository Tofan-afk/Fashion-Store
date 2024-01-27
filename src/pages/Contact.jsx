import React, { useState, useEffect } from "react";
import "../SASS/contact.scss";
import { Instagram_Post, Present, Logo_Buttons, Stores } from "./Components";

export default function Contact() {
  return (
    <div id="contact">
      <Present title="Contact" src="./contact-background.png" />
      <Contact_info />
      <Stores />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function Contact_info() {
  return <></>;
}
