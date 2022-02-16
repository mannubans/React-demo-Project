import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import MParaHead from "../Components/MParaHead";
import ServiceFood from "../Components/ServiceFood";
import PaginContent from '../Components/PaginContent';
const Service = () => {
  return (
    <>
    <Header />
    <Banner title="Service" bgimage="url(Images/services.jpg)" />
    <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
    <ServiceFood />
    <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
    <PaginContent />
    <Footer />
    </>
  )
}
export default Service;
