import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import {GalleryRestAPI, GallerySpecialAPI, GalleryEventAPI, GalleryFastAPI} from '../API/GalleryRestAPI';
import Banner from '../Components/Banner';
import MParaHead from "../Components/MParaHead";
const Gallery = () => {
    return (
        <>
            <Header />
            <Banner title="Gallery" bgimage="url(Images/gallery.jpg)" />
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <section id="gallery" class="gallery GalleryRestAPI cmnptb">
                <div class="container-fluid g-0">
                    <div class="row g-0">
                    {GalleryRestAPI.map((curElem) => {
                        const { id, image } = curElem;
                        return (
                            <>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <img src={image} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    </div>
                </div>
            </section>
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <section id="gallery" class="gallery GalleryEventAPI cmnptb">
                <div class="container-fluid g-0">
                    <div class="row g-0">
                    {GalleryEventAPI.map((curElem) => {
                        const { id, image } = curElem;
                        return (
                            <>
                                <div class="col-lg-4 col-md-4">
                                    <div class="gallery-item">
                                        <img src={image} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    </div>
                </div>
            </section>
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <section id="gallery" class="gallery GalleryFastAPI cmnptb">
                <div class="container-fluid text-center">
                    <div class="row d-flex justify-content-center">
                    {GalleryFastAPI.map((curElem) => {
                        const { id, image } = curElem;
                        return (
                            <>
                                <div class="col-lg-2 col-md-6  col-sm-6">
                                    <img src={image} alt="" class="img-fluid" />
                                </div>
                            </>
                        )
                    })}
                    </div>
                </div>
            </section>
            <MParaHead title="Loreum Ipsum" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
            <section id="gallery" class="gallery GallerySpecialAPI cmnptb">
                <div class="container-fluid g-0">
                    <div class="row g-0">
                    {GallerySpecialAPI.map((curElem) => {
                        const { id, image } = curElem;
                        return (
                            <>
                                <div class="col-lg-3 col-sm-6">
                                    <div class="gallery-item">
                                        <img src={image} alt="" class="img-fluid" />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Gallery;