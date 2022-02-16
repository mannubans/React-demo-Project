import React from 'react'
import ServiceVisionAPI from "../API/ServiceVisionAPI";

const ServiceVision = () => {
    return (
        <>
            <section className="service-vision cmnmt">
                <div class="container">
                    <div class="row">
                        {ServiceVisionAPI.map((curElem => {
                            const { id, image, heading, description } = curElem
                            return (
                                <>
                                    <div class="col-lg-4 col-md-6 d-flex">
                                        <div class="card">
                                            <div class="card-img">
                                                <img src={image} alt="..." />
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">{heading}</h5>
                                                <p class="card-text">{description}</p>
                                                <div class="read-more">
                                                    <a href="#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceVision
