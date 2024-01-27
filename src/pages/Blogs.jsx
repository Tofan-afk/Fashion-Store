import React, { useState, useEffect } from "react";
import "../SASS/blog.scss";
import { Logo_Buttons, Instagram_Post, Present } from "./Components";

export default function Blogs() {
  return (
    <div id="blogs">
      <Present title="Blog" src="./blog-background.png" />
      <Blog_Material />
      <Logo_Buttons />
      <Instagram_Post />
    </div>
  );
}

function Blog_Material() {
  const blogs = new Array(24).fill().map(() => ({
    src: "https://picsum.photos/340",
    title: "Fashion Trends for 2024",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante vel lacinia bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien in sapien. Sed auctor, sapien vel lacinia bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien in sapien.",
  }));

  function Gallery({ blogs }) {
    const batchSize = 9;
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(blogs.length / batchSize);

    const showBatch = () => {
      const batch = blogs.slice(currentIndex, currentIndex + batchSize);

      return batch.map((e, index) => (
        <div key={index} className="blog">
          <img src={e.src} alt={e.title} />
          <h2>{e.title}</h2>
          <p>{e.desc}</p>
        </div>
      ));
    };

    const updateBatch = (direction) => {
      if (direction === "next") {
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + batchSize, blogs.length - 1)
        );
      } else if (direction === "prev") {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - batchSize, 0));
      }
    };

    const goToBatch = (batchIndex) => {
      setCurrentIndex(batchIndex * batchSize);
    };

    return (
      <div id="blogs_showcase">
        {showBatch()}
        <div className="buttons-row">
          <button onClick={() => updateBatch("prev")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M51.367 55.3L36.1003 40L51.367 24.7L46.667 20L26.667 40L46.667 60L51.367 55.3Z"
                fill="#000"
              />
            </svg>
          </button>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => goToBatch(i)}>
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={() => updateBatch("next")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="80"
              viewBox="0 0 81 80"
              fill="none"
            >
              <path
                d="M28.6338 55.3L43.9005 40L28.6338 24.7L33.3338 20L53.3338 40L33.3338 60L28.6338 55.3Z"
                fill="#040404"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="blogs_material_container">
      <Gallery blogs={blogs} />
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

        <h2>Latest posts</h2>
        <p>Red</p>
        <p>Orange</p>
        <p>Green</p>
        <p>Blue</p>
        <p>Black</p>

        <h2>Social links</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Pinterest</p>
        <p>Youtube</p>
      </div>
    </div>
  );
}
