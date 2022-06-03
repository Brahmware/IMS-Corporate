import React from 'react'
import TabBoxContainer from '../../../containers/common/tabbox'

const ImageWithTabBox = ({data}) => {
    return (
        <div className="ims-society-membership white-background">
            <div className="container">
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
                    data-aos='fade-left'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    <img src={data.image} alt="" />
                </div>
                <div className="section-2 row m-0">
                    {
                        data.content.map((allData, index) => {
                            return (
                                <TabBoxContainer data={allData} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageWithTabBox