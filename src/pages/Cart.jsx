import React from "react";
import "../SASS/cart.scss";
import { Instagram_Post, Present, Logo_Buttons } from "./Components";

export default function Cart() {
  return (
    <div id="cart">
      <Present title="Cart" src="bg.png" head_color="black" />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function CartItems() {
  return <></>;
}
