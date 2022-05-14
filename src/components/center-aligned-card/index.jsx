import React from 'react'

const CenterAlignedCard = (props) => {
    return (
        <div className='center-aligned-card'>
            <div
                className="title"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='300'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.title
                    }}
                />
            </div>
            <div
                className="subtitle"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='600'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.subtitle
                    }}
                />
            </div>
            <div
                className="divider"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='900'
            />
            <div
                className="content"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='1200'
            >
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.content
                    }}
                />
            </div>
        </div>
    )
}

export default CenterAlignedCard