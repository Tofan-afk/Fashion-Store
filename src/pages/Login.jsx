import React, { useState, useEffect } from "react";
import "../SASS/login.scss";
import {
  Instagram_Post,
  Present,
  Logo_Buttons,
  QuantityButtons,
} from "./Components";

export default function LogIn() {
  return (
    <div id="login">
      <Present title="My Account" src="./bg.png" head_color="black" />
      <LoginContainer />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function LoginContainer() {
  return (
    <div id="login_container">
      <h2>Login</h2>
      <p>Write your username or email address and password to login.</p>
      <form>
        <input placeholder="Write your username or email here *" />
        <input placeholder="Enter your password *" />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}
