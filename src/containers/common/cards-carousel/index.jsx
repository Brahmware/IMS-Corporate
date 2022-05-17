import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import IdentityCardComponent from '../../../components/card-component';
import { LeftarrowIcon, RightarrowIcon } from '../../../assets/icons';


SwiperCore.use([Autoplay, Navigation]);

const CardsCarouselContainer = ({ data }) => {

    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 4,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            576: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <div className='cards-carousel-wrapper'>
            <Swiper {...swiperOption}>
                {
                    data && data.map((datum, key) => {
                        return (
                            <SwiperSlide key={key} >
                                <IdentityCardComponent data={datum} cardKey={key} />
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-button-next">
                    <i className="right-arrow-icon"><RightarrowIcon /></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="left-arrow-icon"><LeftarrowIcon /></i>
                </div>
            </Swiper>
        </div>
    )
}

export default CardsCarouselContainer