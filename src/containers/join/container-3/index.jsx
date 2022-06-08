import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton';
import ParallaxImageComponent from "../../../components/parallax-image-component"

const JoinContainerThree = (props) => {
    const data = props.data[0]
    return (
        <div className="image-background">

            <div className="fixed-container"
                data-aos='fade-right'
                data-aos-duration='600'
                data-aos-delay='600'>
                <img src={data.image} alt=""

                    className="fixed-image" />
            </div>
            <div className="banner-background" >
                <ParallaxImageComponent image={data.bannerbackground} alt={data.bannerbackground} />

                <div className="title-tabs-part noselect">
                    <div
                        data-aos='fade-up'
                        data-aos-duration='600'
                        data-aos-delay='300'
                        className="container page-title-container"
                    >

                        <div className="page-title">
                            {props.data[0].title}
                        </div>
                        <div>
                            <FilledButton text={"VIEW PLANS"} class={"black-button"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinContainerThree