import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import IdentityCardComponent from '../../../components/card-component';
import { LeftarrowIcon, RightarrowIcon } from '../../../assets/icons';


SwiperCore.use([Autoplay, Navigation]);

const CardsCarouselContainer = ({ data }) => { 

    const navigationNext = `next-${uuidv4()}`;
    const navigationPrev = `prev-${uuidv4()}`;

    const [profilePicHeight, setProfilePicHeight] = useState(0);

    const profilePictureElementList = document.getElementsByClassName('profile-picture')

    useEffect(() => {
        profilePictureElementList[0] && setProfilePicHeight(profilePictureElementList[0].getBoundingClientRect().height) 
    }, [profilePictureElementList])

    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 4,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: `.${navigationNext}`,
            prevEl: `.${navigationPrev}`,
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
                <div className="swiper-navigation-wrapper"
                    style={{top: `${profilePicHeight/2}px`}}
                >
                    <div className={`swiper-navigation ${navigationPrev}`}>
                        <i className="left-arrow-icon"><LeftarrowIcon /></i>
                    </div>
                    <div className={`swiper-navigation ${navigationNext}`}>
                        <i className="right-arrow-icon"><RightarrowIcon /></i>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default CardsCarouselContainer