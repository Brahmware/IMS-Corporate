import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from "swiper"
import PositionCardComponent from '../../../components/open-position-card-component';
import { LeftarrowIcon, RightarrowIcon } from '../../../assets/icons';

SwiperCore.use([Navigation]);

const OpeningsCarouselContainer = ({ data, title, country, continent }) => {

    /* Selecting the opening Positions to show */
    const [positionsToShow, setPositionsToShow] = useState([]);


    useEffect(() => {
        let positions = [...data.filteredPositions]
        const timeoutInitial = setTimeout(() => setPositionsToShow([]), 0);
        const timeoutReload = setTimeout(() => setPositionsToShow(positions), 0);

        return () => {
            clearTimeout(timeoutInitial)
            clearTimeout(timeoutReload)
        }
    }, [country, continent, data.filteredPositions])

    const navigationNext = `next-${uuidv4()}`;
    const navigationPrev = `prev-${uuidv4()}`;

    const swiperOption = {
        speed: 600,
        spaceBetween: 50,
        slidesPerView: 2,
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
            }
        },
    };

    return (
        <React.Fragment>
            {
                positionsToShow.length > 0 &&
                <div
                    className='opening-carousel-container'
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300'

                >
                    <div className="container">
                        <div className="heading-part">
                            <div className="title">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: title
                                    }}
                                />
                            </div>
                            <div className="subtitle">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: data.brandname
                                    }}
                                />
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <div className="carousal-part">
                        <div className={`swiper-navigation ${navigationPrev}`}>
                            <i className="right-arrow-icon"><LeftarrowIcon /></i>
                        </div>
                        <div className="container">
                            <Swiper {...swiperOption}>
                                {
                                    positionsToShow.map((position, key) => {
                                        return (
                                            <SwiperSlide key={key}>
                                                <PositionCardComponent
                                                    data={position}
                                                    cardKey={key}
                                                    country={country}
                                                    continent={continent}
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <div className={`swiper-navigation ${navigationNext}`}>
                            <i className="left-arrow-icon"><RightarrowIcon /></i>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default OpeningsCarouselContainer