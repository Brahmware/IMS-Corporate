import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import sitemapData from "../../data/sitemap.json"
import ImmersiveExperience from './immersiveexperiences'
import ProfessionalLearning from './professionallearning'
import Resources from './resources'

const EducationTeachingPage = () => {
    const educationTeachingSitemap = sitemapData.find(pageGroup => pageGroup.id === 'education_and_teaching')
    const { hash } = useLocation();

    const [activetab, setactivetab] = useState('resources');

    useEffect(() => {
        setactivetab(hash.replace(/^(#)/, ""));
    }, [hash]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        const pageObject = educationTeachingSitemap && educationTeachingSitemap.pages.find(page => page.id === event.target.id);
        window.history.replaceState({}, pageObject.page, pageObject.path);
    }

    return (
        <React.Fragment>
            <SEO title='IMS - Education & Teaching' />
            <div className="page-wrapper educationTeaching-page-wrapper">
                <Header />
                <BannerNavigationContainer data={educationTeachingSitemap} activetab={activetab} onClickTab={onClickTab} />
                {(() => {
                    switch (activetab) {

                        case "resources":
                            return (
                                <Resources />
                            );
                        case "professional_learning":
                            return (
                                <ProfessionalLearning />
                            );
                        case "immersive_experience":
                            return (
                                <ImmersiveExperience />
                            );
                        default:
                            return (
                                <Resources />
                            );

                    }
                })()}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default EducationTeachingPage