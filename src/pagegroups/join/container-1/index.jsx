import React from 'react';
import ParallaxImageComponent from "../../../components/parallax-image-component"

const JoinContainerOne = (props) => {

    return (
        <div className="join-page">
            <div className="container title-tabs-part noselect">
                <div
                    className="page-title-container"
                >
                    <div
                        className="page-subtitle"
                        data-aos='fade-right'
                        data-aos-duration='600'
                        data-aos-delay='0'
                    >
                        <span 
                            dangerouslySetInnerHTML={{
                                __html: props.data[0].subtitle 
                            }}
                        />
                    </div>
                    <div
                        className="page-title"
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='1200'
                    >
                        <span 
                            dangerouslySetInnerHTML={{
                                __html: props.data[0].title 
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="banner-background">
                <div className="overlay" />
                <ParallaxImageComponent image={props.data[0].bannerbackground} alt={props.data[0].bannerbackground} positiontop={true} />
            </div>
        </div>

    )
}

export default JoinContainerOne