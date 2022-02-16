import React, { useState } from "react";
import Header from "../Components/Header";
import HowToUse from "../Components/HowToUse";
import Money from '../Components/Money';
import Footer from '../Components/Footer';
import HomeSlider from "../Components/HomeSlider";
import MParaHead from "../Components/MParaHead";
import HomeTab from '../Components/HomeTab';
const Home = () => {
    return (
        <>
            <Header />
            <HomeSlider />
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <HowToUse />
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <Money />
            <HomeTab />
            <Footer />
        </>
    );
};
export default Home;
