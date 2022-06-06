import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import TestimonialData from "../../../data/testimonial.json";
import ParallaxImageComponent from '../../../components/parallax-image-component';

SwiperCore.use([Pagination, Autoplay]);


const TestimonialContainer = (props) => {
    const testimonials = TestimonialData.elements;
    const testimonialPaginationRef = useRef(null);

    const params = {
        initialSlide: testimonials.length / 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="swiper-pagination-bullet"></div>';
            },
        },
        autoplay: {
            delay: 7000,
        },
        speed:600,
		direction: 'horizontal',
        loop: true,
    };

    useEffect(() => {

        const paginationHolder = document.getElementById('testimonial-pagination-holder');
        paginationHolder.appendChild(testimonialPaginationRef.current);

    }, [testimonialPaginationRef]);

    return (
        <div className='section-with-padding testimonial-section'>
            <div className="background-image-holder">
                <div className="overlay" />
                <ParallaxImageComponent image={TestimonialData.background} positiontop={false}/>
            </div>
            <div className="container testimonial-container">
                <Swiper {...params}>
                    {
                        testimonials.map((eachTestimonial, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="swiper-card">
                                        <div className="profile-image">
                                            <img src={eachTestimonial.authorimage} alt={eachTestimonial.authorname} />
                                        </div>
                                        <div className="comment">
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: eachTestimonial.comment
                                                }}
                                            />
                                        </div>
                                        <div className="author-details">
                                            <div className="author-name">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: eachTestimonial.authorname
                                                    }}
                                                />
                                            </div>
                                            <div className="author-designation">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: eachTestimonial.authordesignation
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="swiper-pagination" ref={testimonialPaginationRef}></div>
                </Swiper>
            </div>
            <div id="testimonial-pagination-holder" className='container'></div>
        </div>
    )
}

export default TestimonialContainer;