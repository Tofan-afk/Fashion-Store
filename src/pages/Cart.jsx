import React, { useState, useEffect } from "react";
import "../SASS/cart.scss";
import {
  Instagram_Post,
  Present,
  Logo_Buttons,
  QuantityButtons,
} from "./Components";

export default function Cart() {
  return (
    <div id="cart">
      <Present title="Cart" src="bg.png" head_color="black" />
      <CartItems />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function CartItems() {
  const [shop_img, setShopImg] = useState([
    { src: "./shop/car.png", alt: "car", price: "$7.00" },
    { src: "./shop/distress_beanie.png", alt: "beanin", price: "$10.00" },
    { src: "./shop/fancy.png", alt: "fancy", price: "$25.00" },
    { src: "./shop/red_dress.png", alt: "r_dress", price: "$13.00" },
    { src: "./shop/outside.png", alt: "out", price: "$88.00" },
    { src: "./shop/something.png", alt: "smth", price: "$14.00" },
    { src: "./shop/greer.png", alt: "green", price: "$845.00" },
    { src: "./shop/black_dress.png", alt: "b_dress", price: "$213.00" },
    { src: "./shop/couch.png", alt: "couch", price: "$23.00" },
  ]);
  const [total, setTotal] = useState(() => {
    let sum = 0;
    shop_img.forEach((e) => {
      sum += parseFloat(e.price.substring(1));
    });
    return sum.toFixed(2);
  });

  return (
    <div id="cartitem_container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shop_img.map((e, index) => {
            const [multi, setMulti] = useState(1);
            const [itemTotal, setItemTotal] = useState(
              parseFloat(e.price.substring(1))
            );

            useEffect(() => {
              setItemTotal(
                parseFloat(e.price.substring(1)) * parseFloat(multi)
              );
              setTotal((prevTotal) => {
                const newTotal =
                  parseFloat(prevTotal) -
                  itemTotal +
                  parseFloat(e.price.substring(1)) * parseFloat(multi);
                return newTotal.toFixed(2);
              });
            }, [multi]);

            return (
              <tr key={index}>
                <td>
                  <div className="product_desc">
                    <img src={e.src} />
                    <div className="product_desc_text">
                      <h3>{e.alt}</h3>
                      <p>{e.price}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <QuantityButtons value={multi} setValue={setMulti} />
                </td>
                <td>${itemTotal}</td>
                <td>
                  <button id="remove_button">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5355 10.8393L10.8374 13.5374L27.3055 29.9999L10.8374 46.4643L13.5374 49.1624L29.9999 32.6943L46.4643 49.1605L49.1605 46.4643L32.6943 29.9999L49.1605 13.5355L46.4624 10.8374L29.9999 27.3055L13.5355 10.8393Z"
                        fill="#040404"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="cart_total">
        <h2>Cart Totals</h2>
        <h3>
          Subtotal<span>${total}</span>
        </h3>
        <h3>
          Total<span>${total}</span>
        </h3>
      </div>
    </div>
  );
}
