import React from 'react'

const JoinContainerTwo = (props) => {
    return (
        <div className="what-you-have-seen white-background">
            <div className="container">
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

export default JoinContainerTwo