import React, { useState, useRef } from 'react'
import NewsCards from '../news-cards'

const RecommendationCards = ({ data }) => {
    const first = useRef(null)
    const second = useRef(null)
    const [marginRight, setmarginRight] = useState('10em')
    setTimeout(() => {
        let width1 = first.current.offsetWidth;
        let width2 = second.current.offsetWidth;
        setmarginRight(-1*(width1-width2)/2);
      }, 100);
    return (
        <div className='recommended-cards-container' ref={first}>
            <div className="container" >
                <div className="more-like-this-area" ref={second}>
                    <div className="heading">
                        <span
                            data-aos='fade-right'
                            data-aos-duration='600'
                            data-aos-delay='400'
                        >
                            More like this
                        </span>
                        <a href=""
                            data-aos='fade-right'
                            data-aos-duration='800'
                            data-aos-delay='600'
                        >See All</a>
                    </div>
                    <div className="recommended-cards" style={{marginRight: marginRight}}>
                        {
                            data.map((cardData, key) => {
                                return (
                                    <React.Fragment key={key} >
                                        <NewsCards data={cardData} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCards