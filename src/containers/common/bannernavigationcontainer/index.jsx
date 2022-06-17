import React from 'react'
import { Link } from 'react-router-dom';
import ParallaxImageComponent from '../../../components/parallax-image-component';

const BannerNavigationContainer = (props) => {
    const data = props.data;
    const activetab = props.activetab;

    return (
        <div className="banner-sitemap-container">
            <div className="banner-background" >
                <ParallaxImageComponent image={data.bannerbackground} alt={data.id} positiontop={true}/>
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
                                <Link key={key}
                                    id={eachPage.id}
                                    className={activetab && activetab === eachPage.id ? "each-tab active-tab" : "each-tab"}
                                    onClick={props.onClickTab}
                                    to={`${props.url}/${eachPage.id}`}
                                >
                                    <span>{eachPage.page}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BannerNavigationContainer