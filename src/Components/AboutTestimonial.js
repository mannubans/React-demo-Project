import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import AboutTestimonialAPI from "../API/AboutTestimonialAPI";
SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);
const AboutTestimonial = () => {
   return (
      <>
         <section className="about-slider">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <Swiper 
                        slidesPerView={1}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        loop={true}
                        keyboard={{
                           "enabled": true
                        }}
                        loopFillGroupWithBlank={true}
                        autoplay={{
                           delay: 2500,
                           disableOnInteraction: false
                        }}
                        pagination={{
                           "clickable": false
                        }} 
                        navigation={false}
                        className="mySwiper cmnptb">

                        {AboutTestimonialAPI.map((curElem => {
                           const {id, image, name, profile, description} = curElem
                           return(
                              <>
                                 <SwiperSlide key={id}>
                                    <div className="testimonial">
                                       <img src={image} class="testimonial-img" alt="" />
                                       <h3>{name}</h3>
                                       <h4>{profile}</h4>
                                       <p>
                                          <i class="fas fa-quote-left"></i>
                                          {description}
                                          <i class="fas fa-quote-right"></i>
                                       </p>
                                    </div>
                                 </SwiperSlide>
                              </>
                              )
                        }))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}
export default AboutTestimonial;
