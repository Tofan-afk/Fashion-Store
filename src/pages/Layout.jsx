import React, { useState, useEffect } from "react";
import "../SASS/layout.scss";
import { Outlet, Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Update the state with the current pathname
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const Styles = {
    color: currentPath === "/Swanky-Fashion-Store/" ? "#fff" : "#040404",
    // Add more styles as needed
  };

  useEffect(() => {
    const x = document.getElementById("slide_menu");
    x.style.transform = "translateX(100%)";
  }, []);

  function toggleMenu() {
    // Your existing code to toggle class and update 'aria-expanded' attribute
    this.classList.toggle("opened");
    this.setAttribute("aria-expanded", this.classList.contains("opened"));

    // Call the slideMenu function
    const x = document.getElementById("slide_menu");
    if (x.style.transform == "translateX(100%)") {
      x.style.transform = "translateX(0)";
    } else {
      x.style.transform = "translateX(100%)";
    }
  }

  return (
    <>
      <header
        style={{
          backgroundColor:
            currentPath === "/Swanky-Fashion-Store/" ? "rgba(0,0,0,0)" : "#FFF",
        }}
      >
        <div id="inside_header">
          <div>
            <ul style={Styles}>
              <li>
                <Link style={Styles} to="/Swanky-Fashion-Store/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={Styles} to="/Swanky-Fashion-Store/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={Styles} to="/Swanky-Fashion-Store/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link style={Styles} to="/Swanky-Fashion-Store/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link style={Styles} to="/Swanky-Fashion-Store/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link style={Styles} to="/Swanky-Fashion-Store/">
              <h3 style={Styles}>SWANKY.</h3>
            </Link>
          </div>
          <div>
            <ul style={Styles}>
              <li>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0446 2.14426C10.3985 1.44666 9.49604 1.0625 8.49995 1.0625C7.49854 1.0625 6.59309 1.44434 5.94995 2.13762C5.29983 2.83854 4.98307 3.79113 5.05745 4.81977C5.20487 6.84914 6.74915 8.5 8.49995 8.5C10.2507 8.5 11.7924 6.84947 11.9421 4.82043C12.0175 3.80109 11.6987 2.85049 11.0446 2.14426ZM14.3437 15.9375H2.6562C2.50322 15.9395 2.35172 15.9074 2.21272 15.8434C2.07373 15.7795 1.95073 15.6854 1.85268 15.5679C1.63686 15.31 1.54987 14.9577 1.61428 14.6014C1.89452 13.0468 2.76909 11.741 4.1437 10.8242C5.36491 10.0104 6.91184 9.5625 8.49995 9.5625C10.0881 9.5625 11.635 10.0107 12.8562 10.8242C14.2308 11.7406 15.1054 13.0465 15.3856 14.6011C15.45 14.9573 15.363 15.3096 15.1472 15.5676C15.0492 15.6851 14.9262 15.7793 14.7872 15.8433C14.6482 15.9073 14.4967 15.9394 14.3437 15.9375Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                  </svg>
                </span>
                <span>
                  <Link style={Styles} to="/Swanky-Fashion-Store/login">
                    Login
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1635 13.9915L12.0395 10.8674C12.7916 9.86609 13.1976 8.64732 13.1962 7.395C13.1962 4.19621 10.5938 1.59375 7.395 1.59375C4.19621 1.59375 1.59375 4.19621 1.59375 7.395C1.59375 10.5938 4.19621 13.1962 7.395 13.1962C8.64732 13.1976 9.86609 12.7916 10.8674 12.0395L13.9915 15.1635C14.1496 15.3049 14.3559 15.3804 14.5679 15.3744C14.7799 15.3685 14.9816 15.2816 15.1316 15.1316C15.2816 14.9816 15.3685 14.7799 15.3744 14.5679C15.3804 14.3559 15.3049 14.1496 15.1635 13.9915ZM3.25125 7.395C3.25125 6.57544 3.49428 5.77429 3.9496 5.09286C4.40492 4.41142 5.05208 3.88031 5.80926 3.56667C6.56643 3.25304 7.3996 3.17098 8.20341 3.33087C9.00721 3.49076 9.74556 3.88541 10.3251 4.46493C10.9046 5.04444 11.2992 5.78279 11.4591 6.58659C11.619 7.3904 11.537 8.22357 11.2233 8.98074C10.9097 9.73792 10.3786 10.3851 9.69714 10.8404C9.01571 11.2957 8.21456 11.5387 7.395 11.5387C6.29641 11.5374 5.2432 11.1004 4.46638 10.3236C3.68956 9.5468 3.25257 8.49359 3.25125 7.395Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                  </svg>
                </span>
                <span>Search</span>
              </li>
              <li>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49988 14.875C8.28662 14.8747 8.07837 14.8103 7.90222 14.6901C5.29279 12.9187 4.16289 11.7041 3.53967 10.9447C2.21154 9.32609 1.5757 7.66428 1.59363 5.86467C1.61455 3.80242 3.26906 2.125 5.28183 2.125C6.74543 2.125 7.75912 2.94943 8.34947 3.63607C8.36817 3.65761 8.39128 3.67487 8.41723 3.6867C8.44317 3.69854 8.47136 3.70466 8.49988 3.70466C8.5284 3.70466 8.55659 3.69854 8.58254 3.6867C8.60848 3.67487 8.63159 3.65761 8.65029 3.63607C9.24064 2.94877 10.2543 2.125 11.7179 2.125C13.7307 2.125 15.3852 3.80242 15.4061 5.865C15.4241 7.66494 14.7876 9.32676 13.4601 10.9451C12.8369 11.7044 11.707 12.919 9.09754 14.6904C8.92136 14.8105 8.71311 14.8748 8.49988 14.875Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                  </svg>
                </span>
                <span>(X)</span>
              </li>
              <li>
                <span>
                  <Link style={Styles} to="/Swanky-Fashion-Store/cart">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.84375 14.875C6.43055 14.875 6.90625 14.3993 6.90625 13.8125C6.90625 13.2257 6.43055 12.75 5.84375 12.75C5.25695 12.75 4.78125 13.2257 4.78125 13.8125C4.78125 14.3993 5.25695 14.875 5.84375 14.875Z"
                        fill={
                          currentPath === "/Swanky-Fashion-Store/"
                            ? "#fff"
                            : "#040404"
                        }
                      />
                      <path
                        d="M13.2812 14.875C13.8681 14.875 14.3438 14.3993 14.3438 13.8125C14.3438 13.2257 13.8681 12.75 13.2812 12.75C12.6944 12.75 12.2188 13.2257 12.2188 13.8125C12.2188 14.3993 12.6944 14.875 13.2812 14.875Z"
                        fill={
                          currentPath === "/Swanky-Fashion-Store/"
                            ? "#fff"
                            : "#040404"
                        }
                      />
                      <path
                        d="M15.1672 4.01027C15.0926 3.91898 14.9985 3.84545 14.8919 3.79503C14.7853 3.7446 14.6689 3.71855 14.5509 3.71875H4.44557L4.24203 2.56395C4.22033 2.44094 4.15598 2.32951 4.06028 2.24924C3.96458 2.16896 3.84366 2.12497 3.71875 2.125H1.59375C1.45285 2.125 1.31773 2.18097 1.2181 2.2806C1.11847 2.38023 1.0625 2.51535 1.0625 2.65625C1.0625 2.79715 1.11847 2.93227 1.2181 3.0319C1.31773 3.13153 1.45285 3.1875 1.59375 3.1875H3.27316L4.78922 11.7798C4.81092 11.9028 4.87527 12.0142 4.97097 12.0945C5.06667 12.1748 5.18759 12.2188 5.3125 12.2188H13.8125C13.9534 12.2188 14.0885 12.1628 14.1882 12.0632C14.2878 11.9635 14.3438 11.8284 14.3438 11.6875C14.3438 11.5466 14.2878 11.4115 14.1882 11.3118C14.0885 11.2122 13.9534 11.1562 13.8125 11.1562H5.75809L5.57082 10.0938H13.5947C13.7789 10.0935 13.9574 10.0296 14.1 9.91292C14.2425 9.79621 14.3404 9.63383 14.377 9.45326L15.3332 4.67201C15.3562 4.5563 15.3533 4.43691 15.3246 4.32248C15.2959 4.20804 15.2421 4.10141 15.1672 4.01027Z"
                        fill={
                          currentPath === "/Swanky-Fashion-Store/"
                            ? "#fff"
                            : "#040404"
                        }
                      />
                    </svg>
                  </Link>
                </span>
                <span>(X)</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.84375 14.875C6.43055 14.875 6.90625 14.3993 6.90625 13.8125C6.90625 13.2257 6.43055 12.75 5.84375 12.75C5.25695 12.75 4.78125 13.2257 4.78125 13.8125C4.78125 14.3993 5.25695 14.875 5.84375 14.875Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                    <path
                      d="M13.2812 14.875C13.8681 14.875 14.3438 14.3993 14.3438 13.8125C14.3438 13.2257 13.8681 12.75 13.2812 12.75C12.6944 12.75 12.2188 13.2257 12.2188 13.8125C12.2188 14.3993 12.6944 14.875 13.2812 14.875Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                    <path
                      d="M15.1672 4.01027C15.0926 3.91898 14.9985 3.84545 14.8919 3.79503C14.7853 3.7446 14.6689 3.71855 14.5509 3.71875H4.44557L4.24203 2.56395C4.22033 2.44094 4.15598 2.32951 4.06028 2.24924C3.96458 2.16896 3.84366 2.12497 3.71875 2.125H1.59375C1.45285 2.125 1.31773 2.18097 1.2181 2.2806C1.11847 2.38023 1.0625 2.51535 1.0625 2.65625C1.0625 2.79715 1.11847 2.93227 1.2181 3.0319C1.31773 3.13153 1.45285 3.1875 1.59375 3.1875H3.27316L4.78922 11.7798C4.81092 11.9028 4.87527 12.0142 4.97097 12.0945C5.06667 12.1748 5.18759 12.2188 5.3125 12.2188H13.8125C13.9534 12.2188 14.0885 12.1628 14.1882 12.0632C14.2878 11.9635 14.3438 11.8284 14.3438 11.6875C14.3438 11.5466 14.2878 11.4115 14.1882 11.3118C14.0885 11.2122 13.9534 11.1562 13.8125 11.1562H5.75809L5.57082 10.0938H13.5947C13.7789 10.0935 13.9574 10.0296 14.1 9.91292C14.2425 9.79621 14.3404 9.63383 14.377 9.45326L15.3332 4.67201C15.3562 4.5563 15.3533 4.43691 15.3246 4.32248C15.2959 4.20804 15.2421 4.10141 15.1672 4.01027Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                  </svg>
                </span>
                <span style={Styles}>(0)</span>
              </li>
              <li></li>
            </ul>
          </div>
          <div id="slide_button">
            <button>hah</button>
          </div>
        </div>
        <div id="slide_menu">
          <ul>
            <li>
              <Link to="/Swanky-Fashion-Store/">Home</Link>
            </li>
            <li>
              <Link to="/Swanky-Fashion-Store/about">About</Link>
            </li>
            <li>
              <Link to="/Swanky-Fashion-Store/shop">Shop</Link>
            </li>
            <li>
              <Link to="/Swanky-Fashion-Store/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/Swanky-Fashion-Store/contact">Contact</Link>
            </li>
            <li>
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0446 2.14426C10.3985 1.44666 9.49604 1.0625 8.49995 1.0625C7.49854 1.0625 6.59309 1.44434 5.94995 2.13762C5.29983 2.83854 4.98307 3.79113 5.05745 4.81977C5.20487 6.84914 6.74915 8.5 8.49995 8.5C10.2507 8.5 11.7924 6.84947 11.9421 4.82043C12.0175 3.80109 11.6987 2.85049 11.0446 2.14426ZM14.3437 15.9375H2.6562C2.50322 15.9395 2.35172 15.9074 2.21272 15.8434C2.07373 15.7795 1.95073 15.6854 1.85268 15.5679C1.63686 15.31 1.54987 14.9577 1.61428 14.6014C1.89452 13.0468 2.76909 11.741 4.1437 10.8242C5.36491 10.0104 6.91184 9.5625 8.49995 9.5625C10.0881 9.5625 11.635 10.0107 12.8562 10.8242C14.2308 11.7406 15.1054 13.0465 15.3856 14.6011C15.45 14.9573 15.363 15.3096 15.1472 15.5676C15.0492 15.6851 14.9262 15.7793 14.7872 15.8433C14.6482 15.9073 14.4967 15.9394 14.3437 15.9375Z"
                    fill={
                      currentPath === "/Swanky-Fashion-Store/"
                        ? "#fff"
                        : "#040404"
                    }
                  />
                </svg>
              </span>
              <span>
                <Link to="/Swanky-Fashion-Store/login">Login</Link>
              </span>
            </li>
            <li>
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1635 13.9915L12.0395 10.8674C12.7916 9.86609 13.1976 8.64732 13.1962 7.395C13.1962 4.19621 10.5938 1.59375 7.395 1.59375C4.19621 1.59375 1.59375 4.19621 1.59375 7.395C1.59375 10.5938 4.19621 13.1962 7.395 13.1962C8.64732 13.1976 9.86609 12.7916 10.8674 12.0395L13.9915 15.1635C14.1496 15.3049 14.3559 15.3804 14.5679 15.3744C14.7799 15.3685 14.9816 15.2816 15.1316 15.1316C15.2816 14.9816 15.3685 14.7799 15.3744 14.5679C15.3804 14.3559 15.3049 14.1496 15.1635 13.9915ZM3.25125 7.395C3.25125 6.57544 3.49428 5.77429 3.9496 5.09286C4.40492 4.41142 5.05208 3.88031 5.80926 3.56667C6.56643 3.25304 7.3996 3.17098 8.20341 3.33087C9.00721 3.49076 9.74556 3.88541 10.3251 4.46493C10.9046 5.04444 11.2992 5.78279 11.4591 6.58659C11.619 7.3904 11.537 8.22357 11.2233 8.98074C10.9097 9.73792 10.3786 10.3851 9.69714 10.8404C9.01571 11.2957 8.21456 11.5387 7.395 11.5387C6.29641 11.5374 5.2432 11.1004 4.46638 10.3236C3.68956 9.5468 3.25257 8.49359 3.25125 7.395Z"
                    fill={
                      currentPath === "/Swanky-Fashion-Store/"
                        ? "#fff"
                        : "#040404"
                    }
                  />
                </svg>
              </span>
              <span>Search</span>
            </li>
            <li>
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49988 14.875C8.28662 14.8747 8.07837 14.8103 7.90222 14.6901C5.29279 12.9187 4.16289 11.7041 3.53967 10.9447C2.21154 9.32609 1.5757 7.66428 1.59363 5.86467C1.61455 3.80242 3.26906 2.125 5.28183 2.125C6.74543 2.125 7.75912 2.94943 8.34947 3.63607C8.36817 3.65761 8.39128 3.67487 8.41723 3.6867C8.44317 3.69854 8.47136 3.70466 8.49988 3.70466C8.5284 3.70466 8.55659 3.69854 8.58254 3.6867C8.60848 3.67487 8.63159 3.65761 8.65029 3.63607C9.24064 2.94877 10.2543 2.125 11.7179 2.125C13.7307 2.125 15.3852 3.80242 15.4061 5.865C15.4241 7.66494 14.7876 9.32676 13.4601 10.9451C12.8369 11.7044 11.707 12.919 9.09754 14.6904C8.92136 14.8105 8.71311 14.8748 8.49988 14.875Z"
                    fill={
                      currentPath === "/Swanky-Fashion-Store/"
                        ? "#fff"
                        : "#040404"
                    }
                  />
                </svg>
              </span>
              <span>(X)</span>
            </li>
            <li>
              <span>
                <Link style={Styles} to="/Swanky-Fashion-Store/cart">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.84375 14.875C6.43055 14.875 6.90625 14.3993 6.90625 13.8125C6.90625 13.2257 6.43055 12.75 5.84375 12.75C5.25695 12.75 4.78125 13.2257 4.78125 13.8125C4.78125 14.3993 5.25695 14.875 5.84375 14.875Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                    <path
                      d="M13.2812 14.875C13.8681 14.875 14.3438 14.3993 14.3438 13.8125C14.3438 13.2257 13.8681 12.75 13.2812 12.75C12.6944 12.75 12.2188 13.2257 12.2188 13.8125C12.2188 14.3993 12.6944 14.875 13.2812 14.875Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                    <path
                      d="M15.1672 4.01027C15.0926 3.91898 14.9985 3.84545 14.8919 3.79503C14.7853 3.7446 14.6689 3.71855 14.5509 3.71875H4.44557L4.24203 2.56395C4.22033 2.44094 4.15598 2.32951 4.06028 2.24924C3.96458 2.16896 3.84366 2.12497 3.71875 2.125H1.59375C1.45285 2.125 1.31773 2.18097 1.2181 2.2806C1.11847 2.38023 1.0625 2.51535 1.0625 2.65625C1.0625 2.79715 1.11847 2.93227 1.2181 3.0319C1.31773 3.13153 1.45285 3.1875 1.59375 3.1875H3.27316L4.78922 11.7798C4.81092 11.9028 4.87527 12.0142 4.97097 12.0945C5.06667 12.1748 5.18759 12.2188 5.3125 12.2188H13.8125C13.9534 12.2188 14.0885 12.1628 14.1882 12.0632C14.2878 11.9635 14.3438 11.8284 14.3438 11.6875C14.3438 11.5466 14.2878 11.4115 14.1882 11.3118C14.0885 11.2122 13.9534 11.1562 13.8125 11.1562H5.75809L5.57082 10.0938H13.5947C13.7789 10.0935 13.9574 10.0296 14.1 9.91292C14.2425 9.79621 14.3404 9.63383 14.377 9.45326L15.3332 4.67201C15.3562 4.5563 15.3533 4.43691 15.3246 4.32248C15.2959 4.20804 15.2421 4.10141 15.1672 4.01027Z"
                      fill={
                        currentPath === "/Swanky-Fashion-Store/"
                          ? "#fff"
                          : "#040404"
                      }
                    />
                  </svg>
                </Link>
              </span>
              <span>(X)</span>
            </li>
          </ul>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div id="footer_container">
        <div>
          <h3>SWANKY</h3>
          <p>
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          <form>
            <input placeholder="Enter your email address..."></input>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                  fill="#EC6C5A"
                />
              </svg>
            </button>
          </form>
          <div id="social_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
            >
              <path
                d="M9.0032 0C5.8496 0 4 1.5615 4 5.1195V8.25H0V12H4V21H8V12H11.2L12 8.25H8V5.754C8 4.41375 8.4664 3.75 9.808 3.75H12V0.15375C11.6208 0.10575 10.516 0 9.0032 0Z"
                fill="#EB8772"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M5.29282 0C2.38745 0 0 2.51664 0 5.58686V13.4131C0 16.4799 2.38418 19 5.29282 19H12.7072C15.6125 19 18 16.4834 18 13.4131V5.58773C18 2.52009 15.6158 0 12.7072 0H5.29282ZM5.29282 1.72727H12.7072C13.1875 1.72659 13.6633 1.82596 14.1072 2.01968C14.5511 2.2134 14.9545 2.49767 15.2941 2.8562C15.6338 3.21473 15.9031 3.64048 16.0866 4.10906C16.2701 4.57763 16.3643 5.07982 16.3636 5.58686V13.4131C16.3643 13.9202 16.2701 14.4224 16.0866 14.8909C15.9031 15.3595 15.6338 15.7853 15.2941 16.1438C14.9545 16.5023 14.5511 16.7866 14.1072 16.9803C13.6633 17.174 13.1875 17.2734 12.7072 17.2727H5.29364C4.81321 17.2735 4.33736 17.1742 3.89336 16.9806C3.44935 16.7869 3.04591 16.5027 2.70616 16.1441C2.36641 15.7856 2.09703 15.3598 1.91346 14.8911C1.72988 14.4225 1.63572 13.9202 1.63636 13.4131V5.58773C1.63561 5.08061 1.72967 4.57833 1.91314 4.10965C2.09662 3.64098 2.36591 3.21513 2.70558 2.8565C3.04526 2.49788 3.44863 2.21353 3.8926 2.01976C4.33657 1.82598 4.8124 1.72659 5.29282 1.72727ZM13.8322 3.61691C13.7347 3.61645 13.6381 3.63638 13.548 3.67554C13.4579 3.7147 13.376 3.77232 13.3071 3.84507C13.2381 3.91781 13.1836 4.00425 13.1465 4.09939C13.1094 4.19453 13.0905 4.29648 13.0909 4.39936C13.0909 4.83464 13.4198 5.18182 13.8322 5.18182C13.9297 5.18239 14.0264 5.16255 14.1166 5.12344C14.2068 5.08433 14.2888 5.02673 14.3578 4.95397C14.4268 4.88121 14.4815 4.79473 14.5187 4.69954C14.5558 4.60434 14.5747 4.50232 14.5743 4.39936C14.5747 4.29641 14.5558 4.19439 14.5187 4.09919C14.4815 4.00399 14.4268 3.91752 14.3578 3.84476C14.2888 3.772 14.2068 3.7144 14.1166 3.67529C14.0264 3.63618 13.9297 3.61634 13.8322 3.61691ZM9 4.31818C6.3 4.31818 4.09091 6.65 4.09091 9.5C4.09091 12.35 6.3 14.6818 9 14.6818C11.7 14.6818 13.9091 12.35 13.9091 9.5C13.9091 6.65 11.7 4.31818 9 4.31818ZM9 6.04545C10.8188 6.04545 12.2727 7.58014 12.2727 9.5C12.2727 11.4199 10.8188 12.9545 9 12.9545C7.18118 12.9545 5.72727 11.4199 5.72727 9.5C5.72727 7.58014 7.18118 6.04545 9 6.04545Z"
                fill="#C0BAB9"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M18 1.77938C17.326 2.08525 16.611 2.28559 15.879 2.37371C16.6497 1.90061 17.2265 1.15659 17.502 0.28009C16.7772 0.720447 15.9847 1.03139 15.1583 1.19965C14.652 0.644802 13.9946 0.258944 13.2715 0.0922494C12.5485 -0.0744452 11.7932 -0.0142636 11.104 0.264968C10.4147 0.5442 9.82337 1.02956 9.40681 1.65795C8.99025 2.28633 8.76775 3.02866 8.76825 3.78842C8.76825 4.08597 8.8005 4.37429 8.86575 4.65031C7.39688 4.5762 5.95974 4.18562 4.64796 3.50403C3.33619 2.82244 2.17924 1.86513 1.2525 0.694508C0.923233 1.27231 0.750528 1.92981 0.75225 2.59898C0.75225 3.91144 1.4025 5.07088 2.3955 5.74979C1.80897 5.73071 1.23544 5.56777 0.723 5.27463V5.32307C0.722492 6.1974 1.01732 7.04494 1.55738 7.72165C2.09744 8.39836 2.84942 8.86248 3.6855 9.03515C3.1418 9.188 2.57109 9.21063 2.0175 9.10127C2.25331 9.85345 2.7124 10.5113 3.33066 10.9831C3.94892 11.4548 4.69546 11.7167 5.466 11.7323C4.69998 12.3487 3.82291 12.8042 2.88499 13.0726C1.94706 13.3411 0.966695 13.4174 0 13.297C1.68789 14.4105 3.65306 15.0018 5.66025 15C12.4537 15 16.1693 9.23044 16.1693 4.22667C16.1693 4.06521 16.1632 3.89913 16.1572 3.7369C16.8792 3.20105 17.503 2.53861 18 1.78014V1.77938Z"
                fill="#C0BAB9"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M2.26543 6.54207e-07C1.96808 -0.000226251 1.6736 0.0585739 1.39881 0.173042C1.12403 0.287511 0.874311 0.455405 0.663936 0.667134C0.45356 0.878863 0.286645 1.13028 0.172725 1.40702C0.058805 1.68376 0.000112504 1.9804 0 2.28C0 3.54091 1.014 4.58591 2.26286 4.58591C3.51343 4.58591 4.52829 3.54091 4.52829 2.28173C4.52851 1.98217 4.47015 1.6855 4.35653 1.40868C4.24291 1.13186 4.07626 0.880308 3.86612 0.668408C3.65597 0.456507 3.40644 0.288409 3.13178 0.17372C2.85713 0.0590315 2.56274 5.68245e-07 2.26543 6.54207e-07ZM13.3157 6.04546C11.4137 6.04546 10.326 7.04727 9.80314 8.04391H9.74829V6.31405H6V19H9.906V12.7205C9.906 11.0658 10.0294 9.46632 12.0617 9.46632C14.0649 9.46632 14.094 11.3534 14.094 12.825V19H18V12.0322C18 8.62255 17.2723 6.04546 13.3157 6.04546ZM0.311143 6.31318V19H4.21971V6.31318H0.311143Z"
                fill="#C0BAB9"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
            >
              <path
                d="M21.5359 2.34184C21.4107 1.88881 21.1655 1.47575 20.825 1.14401C20.4844 0.812264 20.0603 0.573472 19.5953 0.451531C17.8825 1.36847e-07 11 0 11 0C11 0 4.11751 1.36847e-07 2.40475 0.451531C1.93966 0.573472 1.51561 0.812264 1.17504 1.14401C0.83447 1.47575 0.589324 1.88881 0.464138 2.34184C0.144326 4.04332 -0.0108694 5.77027 0.000591168 7.5C-0.0108694 9.22973 0.144326 10.9567 0.464138 12.6582C0.589324 13.1112 0.83447 13.5243 1.17504 13.856C1.51561 14.1877 1.93966 14.4265 2.40475 14.5485C4.11751 15 11 15 11 15C11 15 17.8825 15 19.5953 14.5485C20.0603 14.4265 20.4844 14.1877 20.825 13.856C21.1655 13.5243 21.4107 13.1112 21.5359 12.6582C21.8557 10.9567 22.0109 9.22973 21.9994 7.5C22.0109 5.77027 21.8557 4.04332 21.5359 2.34184ZM8.80012 10.7143V4.28572L14.512 7.5L8.80012 10.7143Z"
                fill="#C0BAB9"
              />
            </svg>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h2>Quick Links</h2>
            </li>
            <li>
              <p>HOME</p>
            </li>
            <li>
              <p>ABOUT</p>
            </li>
            <li>
              <p>SHOP</p>
            </li>
            <li>
              <p>BLOGS</p>
            </li>
            <li>
              <p>CONTACT</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Help & info</h2>
            </li>
            <li>
              <p>Track Your Order</p>
            </li>
            <li>
              <p>Returns policies</p>
            </li>
            <li>
              <p>Shipping + Delivery </p>
            </li>
            <li>
              <p>Faqs</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Contact us</h2>
            </li>
            <li>
              <span>Do you have any queries or suggestions?</span> <br />
              <span>yourinfo@gmail.com</span>
            </li>
            <li>
              <span>If you need support? Just give us a call.</span> <br />
              <span>+55 111 222 333 44</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
