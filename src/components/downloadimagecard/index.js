import React from 'react'
import { DownloadButton, CrownIcon } from '../../assets/icons/'

const DownloadImageCard = ({ card,click }) => {
    return (
        <>
            <li className="grid-figure"
                data-aos='fade-left'
                data-aos-duration='600'
                data-aos-delay='400'
                // onClick={click}
            >
                <div className="grid-figure-shadow">
                    <DownloadButton className='grid-figure-shadow-icon' />
                    {
                        card.premium && 
                            <div className="grid-figure-crown">
                                <CrownIcon/>
                            </div>
                    }
                </div>
                <img src={card.images} alt="" onClick={click} style={{zIndex:"5"}} />
                <div className="bold-paragraph grid-figure-title"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='400'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.title
                        }}
                    />
                </div>
                <div className="content grid-figure-subtitle"
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='500'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.type
                        }}
                    />
                </div>
            </li>
        </>
    )
}

export default DownloadImageCard