import React from 'react'

const JoinContainerFive = (props) => {
    const data=props.data[0]
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
                                <div className="sub-container col"
                                    key={index}
                                    data-aos='fade-right'
                                    data-aos-duration='600'
                                    data-aos-delay='600'>
                                    <div className="box-button">
                                        <button>{allData.button}</button></div>
                                    <div
                                        className="tab-box-heading"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: allData.tab_box_heading
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="tab-box-sub-heading"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: allData.tab_box_sub_heading
                                            }}
                                        />
                                    </div>
                                    <div className="divider"></div>
                                    <div
                                        className="tab-box-price"
                                    >
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: allData.tab_box_price
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default JoinContainerFive