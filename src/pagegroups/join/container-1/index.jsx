import React from 'react'

const JoinContainerOne = (props) => {
    return (
        <div className="join-page">
            <div className="container">
                <div
                    className="subtitle"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: props.data[0].subtitle
                        }}
                    />
                </div>
                <div
                    className="title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: props.data[0].title
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

export default JoinContainerOne