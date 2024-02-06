import React, { useState, useEffect } from "react";
import "../SASS/home.scss";
import {
  Services,
  Video,
  Reviews,
  Recent_Blogs,
  Instagram_Post,
  Logo_Buttons,
  Photo_Carousel,
} from "./Components";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  // Define breakpoints based on window width
  const mobileBreakpoint = 640;
  const tabletBreakpoint = 1200;

  // Determine which image to display based on window width
  let imageUrl;
  if (windowSize.width < mobileBreakpoint) {
    imageUrl = "./home-background-phone.png";
  } else if (windowSize.width < tabletBreakpoint) {
    imageUrl = "./home-background.png";
  } else {
    imageUrl = "./home-background.png";
  }
  return (
    <div id="home">
      <div id="present_container">
        <div id="present_title">
          <h1>
            Make your fashion <br />
            look swanky.
          </h1>
          <button>shop now</button>
        </div>
        <img id="present_image" src={imageUrl} alt="background" />
      </div>
      <Services />
      <Photo_Carousel
        title="What’s trending"
        description="These are the products that are trending now."
      />
      <Video />
      <Reviews />
      <Photo_Carousel
        title="New arrivals"
        description="These are the products that are new."
      />
      <Seasonal_Categories />
      <Recent_Blogs />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function Seasonal_Categories() {
  return (
    <div id="seas_cat_container">
      <div id="s_c_big">
        <img src="./place.jpg" />
        <div className="contents">
          <h2>Summer outfits</h2>
          <button>Shop collection</button>
        </div>
      </div>
      <div id="s_c_half">
        <div>
          <img src="./place.jpg" />
          <div className="contents">
            <h2>gugles</h2>
            <button>Shop it now</button>
          </div>
        </div>
        <div>
          <img src="./place.jpg" />
          <div className="contents">
            <h2>accessories</h2>
            <button>Shop it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
