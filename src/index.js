import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollTop from "./Components/ScrollTop";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ScrollTop/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);