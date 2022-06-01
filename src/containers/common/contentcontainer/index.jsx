import React from 'react'

const ContentContainer = ({ card }) => {
    return (
        <div className="half-divided-section-with-padding">
            <div className="heading-part">
                <div className="title"
                    data-aos='fade-right'
                    data-aos-duration='600'
                    data-aos-delay='300'>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.title
                        }}
                    />
                </div>
                <div className="date"
                    data-aos='fade-right'
                    data-aos-duration='600'
                    data-aos-delay='600'>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.date
                        }}
                    />
                </div>
                <div className="bold-paragraph"
                    data-aos='fade-right'
                    data-aos-duration='600'
                    data-aos-delay='900'>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.boldparagraph
                        }}
                    />
                </div>
                <div className="light-paragraph"
                    data-aos='fade-right'
                    data-aos-duration='600'
                    data-aos-delay='1200'>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.lightparagraph
                        }}
                    />
                </div>
            </div>
            <div
                className="card-part"
                data-aos='fade-left'
                data-aos-duration='600'
                data-aos-delay='600'
            >
                <div className="content">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: card.content
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default ContentContainer