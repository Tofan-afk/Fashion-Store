import React, { useState, useEffect } from "react";
import "../SASS/home.scss";
import {
  Services,
  Video,
  Reviews,
  Recent_Blogs,
  Instagram_Post,
  Logo_Buttons,
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

function Photo_Carousel({ title, description }) {
  function The_Photo_Carousel() {
    // Create an array called images with 12 links from Unsplash
    let images = [
      "./place.jpg",
      "./home-background.png",
      "./place.jpg",
      "./home-background.png",
      "./place.jpg",
      "./home-background.png",
      "./home-background.png",
      "./place.jpg",
      "./place.jpg",
      "./place.jpg",
      "./place.jpg",
      "./home-background.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      fadeAndChangeContent(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
      });
    };

    const prevSlide = () => {
      fadeAndChangeContent(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 4 + images.length) % images.length
        );
      });
    };

    const fadeAndChangeContent = (callback) => {
      let elements = document.getElementsByClassName("image_carousel");

      // Convert HTMLCollection to an array
      let elementsArray = Array.from(elements);

      // Apply fade-out to each element
      elementsArray.forEach((element) => {
        element.style.opacity = 0;
      });

      setTimeout(function () {
        callback();

        // Fade in each element
        elementsArray.forEach((element) => {
          element.style.opacity = 1;
        });
      }, 500); // Adjust the timeout as needed (in milliseconds)
    };

    return (
      <div className="photo-carousel">
        <button onClick={prevSlide}>
          <svg
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="43" cy="43" r="43" fill="#F7ECEA" />
            <path
              d="M54.3667 58.3L39.1001 43L54.3667 27.7L49.6667 23L29.6667 43L49.6667 63L54.3667 58.3Z"
              fill="#040404"
            />
          </svg>
        </button>
        <div className="photo-grid">
          {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img
              className="fade image_carousel"
              key={index}
              src={image}
              alt={`Slide ${currentIndex + index + 1}`}
            />
          ))}
        </div>
        <button onClick={nextSlide}>
          <svg
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="43" cy="43" r="43" fill="#F1E4E1" />
            <path
              d="M31.6333 58.3L46.9 43L31.6333 27.7L36.3333 23L56.3333 43L36.3333 63L31.6333 58.3Z"
              fill="#040404"
            />
          </svg>
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="wide_container">
        <span>
          <h1>{title}</h1>
          <p>{description}</p>
        </span>
        <The_Photo_Carousel />
        <button className="shop_now">Shop All</button>
      </div>
    </>
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
