import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from "swiper"
import OpeningCardComponent from '../../../components/opening-card-component';
import { LeftarrowIcon, RightarrowIcon } from '../../../assets/icons';

SwiperCore.use([Navigation]);

const OpeningsCarouselContainer = ({ data, title }) => {

    /* Choosing User Continent */
    const [userContinent, setUserContinent] = useState(localStorage.getItem("continentcode"));
    useEffect(() => {

        const checkUserData = () => {
            let currentContinent = localStorage.getItem("continentcode")
            setUserContinent(currentContinent)
            setUserCountry(null)
        }

        window.addEventListener('continent-changed', checkUserData)

        return () => {
            window.removeEventListener('continent-changed', checkUserData)
        }
    }, [userContinent])



    /* Choosing User Country */
    const [userCountry, setUserCountry] = useState(null);
    useEffect(() => {

        const checkUserData = () => {
            let currentCountry = localStorage.getItem("countrycode")
            setUserCountry(currentCountry)
        }

        window.addEventListener('country-changed', checkUserData)

        return () => {
            window.removeEventListener('country-changed', checkUserData)
        }
    }, [userCountry])



    /* Selecting the opening Positions to show */
    const [positionsToShow, setPositionsToShow] = useState([]);
    useEffect(() => {
        let setVariables = false;
        let positions = [];

        if (!setVariables) {
            if (!userCountry) {
                positions = data.positions.filter(position => position.location.continent === userContinent)
            } else {
                positions = data.positions.filter(position => position.location.country === userCountry)
            }
            setPositionsToShow(positions)
        }

        return () => {
            setVariables = true
        }
    }, [userCountry, userContinent, data])


    const swiperOption = {
        speed: 600,
        spaceBetween: 50,
        slidesPerView: 2,
        navigation: {
            nextEl: '.navigation-next',
            prevEl: '.navigation-prev',
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
        <div className='opening-carousel-container'>
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
                <div className="swiper-navigation navigation-prev">
                    <i className="right-arrow-icon"><LeftarrowIcon /></i>
                </div>
                <div className="container">
                    <Swiper {...swiperOption}>
                        {
                            positionsToShow.map((position, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <OpeningCardComponent data={position} cardKey={key} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="swiper-navigation navigation-next">
                    <i className="left-arrow-icon"><RightarrowIcon /></i>
                </div>
            </div>
        </div>
    )
}

export default OpeningsCarouselContainer