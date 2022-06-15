import React from 'react'
import FilledButton from '../../../components/buttons/FilledButton'
import ParallaxImageComponent from '../../../components/parallax-image-component'

const TabBoxImageBackground = (props) => {
    const allData=props.data
    return (
        <div className="col">
            <div className="sub-container"
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay={900 + 300 * props.tabkey}
            >
                <div className="image-part">
                    <div className="image-overlay"></div>
                    <div className="bg-image">
                        <ParallaxImageComponent image={allData.image} />
                    </div>
                </div>
                <div className="sub-container-part">
                    <div
                        className="sub-container-title"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: allData.title
                            }}
                        />
                    </div>
                    <div
                        className="sub-container-subtitle"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: allData.subtitle
                            }}
                        />
                    </div>
                    <div className="divider w-75 bg-white"></div>
                    <div
                        className="sub-container-content content w-75 text-center"
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: allData.content
                            }}
                        />
                    </div>
                    <div className="sub-container-button">
                        <FilledButton class={'white-button'} text = { allData.button } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabBoxImageBackground