import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Webpages/Home";
import Service from "./Webpages/Service";
import About from "./Webpages/About";
import Gallery from "./Webpages/Gallery";
import Contact from "./Webpages/Contact";
import PageError from "./Webpages/PageError";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path="*" element={<PageError/>} />
      </Routes>
    </>
  );
};
export default App;