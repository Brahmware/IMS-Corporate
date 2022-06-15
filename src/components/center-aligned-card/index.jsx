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
                className={!props.largeheading ? "subtitle" :"large-heading "}
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
            {
                !props.largeheading ? <div
                className={props.dividercolor && props.dividercolor === "primary"? "divider primary" : "divider"}
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay='900'
            /> : ""
            }
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