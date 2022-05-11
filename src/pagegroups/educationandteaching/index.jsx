import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"

const EducationTeachingPage = () => {
    const educationTeachingSitemap = sitemapData.find(pageGroup => pageGroup.id === 'education_and_teaching')
    const { hash }  = useLocation();

    const [activetab, setactivetab] = useState('resources');

    useEffect(() => {
        setactivetab (hash.replace(/^(#)/,""));
    }, [hash]);

    const onClickTab = ( event ) => {
        setactivetab(event.target.id);
        const pageObject = educationTeachingSitemap && educationTeachingSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
    <div className="page-wrapper educationTeaching-page-wrapper">
        <Header />
        <BannerNavigationContainer data={educationTeachingSitemap} activetab={activetab} onClickTab={onClickTab}/>
        <Footer/>
    </div> 
    )
}

export default EducationTeachingPage