import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';


const HomeBanner = (props) => {

    const params = {
        initialSlide: 1,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true
        },
        loop: true,
    };

    return (
        <div className='section home-banner-section'>
            <Swiper {...params}>
                {
                    props.data.elements.map((eachSlide, key) => {
                        return (
                            <SwiperSlide key={key} >
                                <div className="swiper-slide">
                                    <div className="background-image">
                                        <img src={eachSlide.image} alt={key} />
                                    </div>
                                    <div className="container">
                                        <div className="card">
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
            </Swiper>
        </div>
    )
}

export default HomeBanner;