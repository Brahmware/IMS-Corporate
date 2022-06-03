import React from 'react';
import ParallaxImageComponent from "../../../components/parallax-image-component"

const JoinContainerOne = (props) => {
    console.log(props.data[0].background)
    return (
        <div className="join-page">
            <div className="banner-background" >
                <ParallaxImageComponent image={props.data[0].bannerbackground} alt={props.data[0].bannerbackground} positiontop={true} />

                <div className="title-tabs-part noselect">
                    <div
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='300'
                        className="container page-title-container"
                    >
                        <div className="page-subtitle">
                            {props.data[0].subtitle}
                        </div>
                        <div className="page-title">
                            {props.data[0].title}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JoinContainerOne