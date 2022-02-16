import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import ServiceVision from "../Components/ServiceVision";
import AboutTestimonial from "../Components/AboutTestimonial";
import AboutTeam from '../Components/AboutTeam';
import MParaHead from "../Components/MParaHead";
const About = () => {
    return (
        <>
            <Header />
            <Banner title="About" bgimage="url(Images/about.jpg)" />
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <AboutTeam />
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <ServiceVision />
            <AboutTestimonial />
            <Footer />
        </>
    )
}
export default About;


