import React from 'react';
const Banner = (props) => {
    return (
        <>
            <section className="banner-section cmnmb" style={{backgroundImage:props.bgimage}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;
