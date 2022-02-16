import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import HomeSliderAPI from "../API/HomeSliderAPI";

SwiperCore.use([Autoplay, Keyboard, Pagination, Navigation]);
const HomeSlider = () => {
   return (
      <>
         <Swiper
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            keyboard={{
            "enabled": true
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false
            }}
            pagination={{
               clickable: false
            }}
            navigation={true}
            className="mySwiper cmnmb homeslider"
         >
         {HomeSliderAPI.map((curElem => {
            const {id, image, title, description} = curElem
            return(
               <>
               <SwiperSlide key={id}>
                  <img src={image} alt="" />
                  <div class="carousel-caption">
                     <h3>{title}</h3>
                     <p>{description}</p>
                  </div>
               </SwiperSlide>
               </>
            )
         }))}
         </Swiper>
      </>
   )
}
export default HomeSlider;
