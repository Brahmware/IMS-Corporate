import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import TestimonialContainer from '../common/testimonialcontainer';

SwiperCore.use([Pagination, Autoplay]);


const HomeTestimonial = () => {
    return (
        <div className="home-testimonial-section">
            <TestimonialContainer />
        </div>
    )
}

export default HomeTestimonial;