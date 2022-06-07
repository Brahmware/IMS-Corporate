import React from 'react';
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import TestimonialContainer from '../../common/testimonialcontainer';

SwiperCore.use([Pagination, Autoplay]);


const HomeContainerSeven = () => {
    return (
        <div className="home-testimonial-section">
            <TestimonialContainer />
        </div>
    )
}

export default HomeContainerSeven;