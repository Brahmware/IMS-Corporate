import React from 'react'

const BannerNavigationContainer = (props) => {
    const data = props.data;
    const activetab = props.activetab;

    return (
        <div className="banner-sitemap-container">
            <div className="banner-background">
                <img src={data.bannerbackground} alt={data.id} />
            </div>
            <div className="title-tabs-part">
                <div className="container page-title-container">
                    <span className="page-title">
                        {data.pageGroup}
                    </span>
                </div>
                <div className="container tabs-conainer">
                    {
                        data.pages && data.pages.map((eachPage, key) => {
                            return (
                                <div key={key}
                                    id={eachPage.id}
                                    className={ activetab && activetab === eachPage.id ? "each-tab active-tab" : "each-tab"} 
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