import React, { useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 79);
    });
  }, []);
  return (
    <>
      <section className="navbar-bg">
        <nav className={`navbar navbar-expand-lg navbar-light ${scroll ? "menu_fixed animated fadeInDown" : ""}`}>
          <div className="container">
            <a className="navbar-brand" href="#"><img src="../Images/pnglogo.png" alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home </NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about"> About </NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/service"> Services </NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/gallery"> Gallery </NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact"> Contact </NavLink></li>
              </ul>
              <div className="d-flex setStyle">
                <NavLink to="/contact"><button className="btn btn-style btn-style-border">Login</button></NavLink>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Header;