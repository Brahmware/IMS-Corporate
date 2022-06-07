// import React from 'react'
// import CenterAlignedCardContainer from '../../common/center-aligned-card-component';

// const HomeContainerOne = ({ data }) => {
//     return (
//         <div className='home-container-1 section-with-padding'>
//             <CenterAlignedCardContainer data={data[0]} dividercolor='primary' />
//         </div>
//     )
// }

// export default HomeContainerOne





import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import ParallaxImageComponent from '../../../components/parallax-image-component';

SwiperCore.use([Pagination, Autoplay]);


const HomeContainerOne = (props) => {

    const bannerPaginationRef = useRef(null);

    const params = {
        initialSlide: 1,
        pagination: {
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
                return '<div class="swiper-pagination-bullet"></div>';
            },
            clickable: true
        },
        autoplay: {
            delay: 6000,
        },
        speed: 2000,
        direction: 'horizontal',
        loop: true,
    };

    useEffect(() => {
        const paginationHolder = document.getElementById('banner-pagination-holder');
        paginationHolder.appendChild(bannerPaginationRef.current);
    }, [bannerPaginationRef])

    return (
        <div className='section home-banner-section'>
            <Swiper {...params}>
                {
                    props.data.map((eachSlide, key) => {
                        return (
                            <SwiperSlide key={key} >
                                <div className="swiper-slide">
                                    <div className="swiper-background-image">
                                        <ParallaxImageComponent image={eachSlide.image} positiontop={true} />
                                    </div>
                                    <div className="container">
                                        <div className="banner-card" >
                                            <div className="title">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: eachSlide.card.title
                                                    }}
                                                />
                                            </div>
                                            <div className="subtitle">
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: eachSlide.card.subtitle
                                                    }}
                                                />
                                            </div>
                                            <div className="content">
                                                <span dangerouslySetInnerHTML={{
                                                    __html: eachSlide.card.content
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className="swiper-pagination" ref={bannerPaginationRef} />
            </Swiper>
            <div id="banner-pagination-holder" className='container' />
        </div>
    )
}

export default HomeContainerOne;