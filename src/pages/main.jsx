import React from "react";
import ReactDOM from "react-dom/client";
import App from "./index.jsx";
import "../SASS/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("load", function () {
  var bodyStyle = window.getComputedStyle(document.body);
  var bodyWidth = parseInt(bodyStyle.getPropertyValue("width"));
  var zoomLevel = window.innerWidth / bodyWidth;
  document.body.style.zoom = zoomLevel;
});
