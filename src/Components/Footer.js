import React from "react";
const Footer = () => {
   const submitField = (event) => {
      event.preventDefault();
   }
   return (
      <>
         <footer className="footer cmnmt">
            <div className="footer-upper">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-6 col-sm-12">
                        <div className="newsletter-heading">
                           <h4>Our Newsletter</h4>
                           <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        </div>
                     </div>
                     <div className="col-lg-6 col-sm-12">
                        <div className="newsletter-form">
                           <form action="" method="" onSubmit={submitField}>
                              <input type="email" name="email" placeholder="Enter Email id" className="form-control"/>
                              <input type="submit" value="Subscribe" className="btn-style"/>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-middle">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-md-6">
                        <div className="block-links footer-useful">
                           <h5>Useful-links</h5>
                           <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">Gallery</a></li>
                              <li><a href="#">Contact</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="block-links footer-services">
                           <h5>Our Services</h5>
                           <ul>
                              <li><a href="#">Web Design</a></li>
                              <li><a href="#">Web Development</a></li>
                              <li><a href="#">Product Management</a></li>
                              <li><a href="#">Marketing</a></li>
                              <li><a href="#">Graphic Design</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="block-links footer-contact">
                           <h5>Contact Us</h5>
                           <p>
                              A108 Adam Street <br/>
                              New York, NY 535022<br/>
                              United States <br/><br/>
                              <strong>Phone:</strong> +1 5589 55488 55<br/>
                              <strong>Email:</strong> info@example.com<br/>
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6">
                        <div className="block-links footer-about">
                           <h5>About Restor</h5>
                           <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                           <div className="row social-icons">
                              <div className="col-3 mx-auto"><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></div>
                              <div className="col-3 mx-auto"><a href="#" class="instagram"><i class="fab fa-instagram"></i></a></div>
                              <div className="col-3 mx-auto"><a href="#" class="youtube"><i class="fab fa-youtube"></i></a></div>
                              <div className="col-3 mx-auto"><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div class="copyright">
                           © Copyright <strong><span>Restro</span></strong>. All Rights Reserved
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};
export default Footer;