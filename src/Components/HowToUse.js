import React, { useState } from "react";
import HowToUseAPI from "../API/HowToUseAPI";
const HowToUse = () => {
  const [aboutData, setAboutData] = useState(HowToUseAPI);
  return (
    <>
      <section className="common-section our-services cmnptb">
        <div className="container">
          <div className="row left-service">
            <div className="col-12 col-lg-5 ">
            <div className="sclimg-item">
              <img src="../Images/hero3.jpg" alt="aboutusIMg" />
            </div>
              
            </div>
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list d-flex justify-content-center align-items-center flex-column">
              <h2 className="main-heading">Lorem Ipsum?</h2>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info justify-content-center" key={id}>
                      <div className="col-1 our-services-number btn btn-style">{id}</div>
                      <div className="col-10 our-services-data">
                        <h5>{title}</h5>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn btn-style">learn more</button>
            </div>
          </div>
          <div className="row right-service">
            <div className="col-12 col-lg-7 our-services-list d-flex justify-content-center align-items-center flex-column">
              <h1 className="main-heading">Lorem Ipsum</h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info justify-content-center" key={id}>
                      <div className="col-1 our-services-number btn btn-style">{id}</div>
                      <div className="col-10 our-services-data">
                        <h5>{title}</h5>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className="btn btn-style">learn more</button>
            </div>
            {/* images section  */}
            <div className="col-12 col-lg-5">
              <div className="sclimg-item">
                <img src="../Images/callcenter.jpg" alt="aboutusIMg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowToUse;