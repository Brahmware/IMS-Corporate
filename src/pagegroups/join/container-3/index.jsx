import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton';

const JoinContainerThree = (props) => {
    const data = props.data[0]
    return (
        <div className="image-background">
            <div className="container"

            >
                <img src={data.image} alt=""
                    data-aos='fade-right'
                    data-aos-duration='600'
                    data-aos-delay='600' />
                <div
                    className="title"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: data.title
                        }}
                    />
                </div>
                <div>
                    <FilledButton text={"VIEW PLANS"} class={"black-button"} />
                </div>
            </div>
        </div>
    )
}

export default JoinContainerThree