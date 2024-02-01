import React, { useState, useEffect } from "react";
import "../SASS/shop.scss";
import {
  Reviews,
  Recent_Blogs,
  Instagram_Post,
  Present,
  Logo_Buttons,
  Item,
} from "./Components";

export default function Shop() {
  const item_con = document.getElementById("item_con");

  useEffect(() => {
    // Assuming you have a reference to item_con, otherwise get it using document.getElementById or useRef
    document.getElementById("item_con").style.display = "none";
  }, []); // Empty dependency array means this effect will run once when the component mounts

  const [price, setPrice] = useState();
  const [itemName, setItemName] = useState();
  return (
    <div id="shop">
      <Present title="Shop" src="./shop-background.png" />
      <Item price={price} name={itemName} />
      <Shop_Window
        setPrice={setPrice}
        setItemName={setItemName}
        item_con={item_con}
      />
      <Reviews />
      <Recent_Blogs />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function Shop_Window({ setPrice, setItemName }) {
  const shop_img = [
    { src: "./shop/car.png", alt: "car", price: "$7.00" },
    { src: "./shop/distress_beanie.png", alt: "beanin", price: "$10.00" },
    { src: "./shop/fancy.png", alt: "fancy", price: "$25.00" },
    { src: "./shop/red_dress.png", alt: "r_dress", price: "$13.00" },
    { src: "./shop/outside.png", alt: "out", price: "$88.00" },
    { src: "./shop/something.png", alt: "smth", price: "$14.00" },
    { src: "./shop/greer.png", alt: "green", price: "$845.00" },
    { src: "./shop/black_dress.png", alt: "b_dress", price: "$213.00" },
    { src: "./shop/couch.png", alt: "couch", price: "$23.00" },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the pressed key is the "Esc" key (key code 27)
      if (event.keyCode === 27) {
        document.getElementById("item_con").style.display = "none";
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  return (
    <div id="shop_window_container">
      <div id="shop_showcase">
        {shop_img.map((e) => {
          function setDisplay() {
            setPrice(e.price);
            setItemName(e.alt);
            document.getElementById("item_con").style.display = "flex";
          }

          return (
            <div onClick={setDisplay}>
              <img src={e.src} alt={e.alt} />
              <h2>{e.alt}</h2>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
      <div id="categories">
        <form>
          <input placeholder="Enter your email address..."></input>
          <button>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6234 17.2836L15.5805 13.4244C16.5538 12.1875 17.0793 10.682 17.0775 9.135C17.0775 5.18355 13.7096 1.96875 9.57 1.96875C5.43039 1.96875 2.0625 5.18355 2.0625 9.135C2.0625 13.0864 5.43039 16.3013 9.57 16.3013C11.1906 16.3029 12.7679 15.8014 14.0637 14.8723L18.1066 18.7314C18.3113 18.9061 18.5782 18.9993 18.8526 18.9919C19.127 18.9846 19.388 18.8773 19.5821 18.692C19.7762 18.5067 19.8886 18.2576 19.8963 17.9956C19.904 17.7337 19.8063 17.4789 19.6234 17.2836ZM4.2075 9.135C4.2075 8.12261 4.52201 7.13295 5.11124 6.29118C5.70048 5.4494 6.53799 4.79332 7.51786 4.40589C8.49773 4.01847 9.57595 3.9171 10.6162 4.11461C11.6564 4.31211 12.6119 4.79963 13.3619 5.5155C14.1118 6.23137 14.6225 7.14344 14.8295 8.13638C15.0364 9.12932 14.9302 10.1585 14.5243 11.0939C14.1184 12.0292 13.4311 12.8286 12.5492 13.3911C11.6674 13.9535 10.6306 14.2537 9.57 14.2537C8.1483 14.2521 6.78532 13.7123 5.78002 12.7527C4.77473 11.7931 4.20921 10.4921 4.2075 9.135Z"
                fill="#040404"
              />
            </svg>
          </button>
        </form>
        <h2>Categories</h2>
        <p>All</p>
        <p>Popular</p>
        <p>Accesories</p>
        <p>New Arrivals</p>
        <p>Trendings</p>

        <h2>Tags</h2>
        <p>Classic</p>
        <p>Tees</p>
        <p>Leather Coat</p>
        <p>Winter</p>
        <p>Summer</p>
        <p>Modern</p>
        <p>Sleevless</p>

        <h2>Filter by Color</h2>
        <p>Red</p>
        <p>Orange</p>
        <p>Green</p>
        <p>Blue</p>
        <p>Black</p>

        <h2>Filter by size</h2>
        <p>XL</p>
        <p>L</p>
        <p>M</p>
        <p>S</p>
        <p>XS</p>

        <h2>Filter by price</h2>
        <p>Less than $10</p>
        <p>$10- $20</p>
        <p>$20- $30</p>
        <p>$30- $40</p>
        <p>$40- $50</p>
      </div>
    </div>
  );
}
