import React, { useEffect } from 'react'

const BannerNavigationContainer = (props) => {
    const data = props.data;
    const activetab = props.activetab;

    return (
        <div className="banner-sitemap-container">
            <div className="banner-background">
                <img src={data.bannerbackground} alt={data.id} />
            </div>
            <div className="title-tabs-part noselect">
                <div
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='300' 
                    className="container page-title-container"
                >
                    <span className="page-title">
                        {data.pageGroup}
                    </span>
                </div>
                <div
                    className="container tabs-container"
                    data-aos='fade-up'
                    data-aos-duration='600'
                    data-aos-delay='600'
                >
                    {
                        data.pages && data.pages.map((eachPage, key) => {
                            return (
                                <div key={key}
                                    id={eachPage.id}
                                    className={activetab && activetab === eachPage.id ? "each-tab active-tab" : "each-tab"}
                                    onClick={props.onClickTab}
                                >
                                    <span>{eachPage.page}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BannerNavigationContainer