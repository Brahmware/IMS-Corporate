import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);


const HomeTestimonial = (props) => {
    const testimonials = props.data.elements;
    const paginationRef = useRef(null);

    const params = {
        initialSlide: testimonials.length / 2,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="swiper-pagination-bullet"></div>';
            },
        },
        loop: true,
    };

    useEffect(() => {

        const paginationHolder = document.getElementById('pagination-holder');
        paginationHolder.appendChild(paginationRef.current);

    }, [paginationRef]);

    return (
        <div className='section-with-padding home-testimonial-section'>
            <div className="background-image-holder"></div>
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
                    <div className="swiper-pagination" ref={paginationRef}></div>
                </Swiper>
            </div>
            <div id="pagination-holder" className='container'></div>
        </div>
    )
}

export default HomeTestimonial