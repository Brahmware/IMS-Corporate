import React from 'react'
import ParallaxImageComponent from '../../../components/parallax-image-component'
import TabBoxContainer from '../../../containers/common/tabbox'

const ImageWithTabBox = ({data}) => {
    return (
        <div className="ims-society-membership white-background pb-3">
            <div className="container containers">
                <div
                    className="title"
                    data-aos='fade-down'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: data.title
                        }}
                    />
                </div>
                <div className="section-1"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <div className="banner-image-container">
                        <ParallaxImageComponent image={data.image}  />
                    </div>
                </div>
                <div className="section-2 row m-0">
                    {
                        data.content.map((allData, index) => {
                            return (
                                <React.Fragment key = {index}>
                                    <TabBoxContainer data={allData} tabkey={index} id={index+1}/>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageWithTabBox