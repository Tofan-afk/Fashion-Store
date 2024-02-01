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
  return (
    <div id="contact_info_container">
      <div id="phone_number">
        <div>
          <h2>Contact info</h2>
          <p>
            Tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing.
          </p>
        </div>
        <div>
          <h2>Office</h2>
          <p>
            730 Glenstone Ave 65802, Springfield, US <br />
            +123 222 333 44 <br />
            +123 666 777 88 <br />
            swanky@yourinfo.com
          </p>
        </div>
        <div>
          <h2>Management</h2>
          <p>
            730 Glenstone Ave 65802, Springfield, US <br />
            +123 222 333 44 <br />
            +123 666 777 88 <br />
            swanky@yourinfo.com
          </p>
        </div>
      </div>
      <div id="contact_form">
        <div>
          <h2>Questions?</h2>
          <p>Use the form to get in touch with us.</p>
        </div>
        <form>
          <span>
            <input type="text" placeholder="Emma Chamberlin" />
            <input type="email" placeholder="Write your email here *" />
          </span>
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Write your subject here" />
          <input type="text" placeholder="Write your message here *" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
