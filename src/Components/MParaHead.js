import React from 'react';
const MParaHead = (props) => {
    return (
        <>
            <section className="MParaHead">
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <div class="main-head-para cmnptb">
                                <h2>{props.title}</h2>
                                <p>{props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MParaHead;
