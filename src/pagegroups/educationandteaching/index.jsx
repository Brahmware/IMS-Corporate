import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import ImmersiveExperience from './immersiveexperiences'
import ProfessionalLearning from './professionallearning'
import Resources from './resources'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import EducationTeachingData from '../../data/education-and-teaching.json'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'
import FloatinEarthButton from '../../components/floating-button'

const EducationTeachingPage = () => {
    const PAGE_GROUP_NAME = 'education_and_teaching';
    const DEFAULT_PAGE = 'resources';

    const educationTeachingSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME)
    const { url, path } = useRouteMatch();
    const history = useHistory().location;

    const getPageNameFromLink = (history, pageGroupName, defaultPage) => {
        let pathname = history && history.pathname;
        let pathstring = `/${pageGroupName}/`;
        let intermediate = pathname.replace(pathstring, "");
        let pagenameArray = intermediate.split('/');
        let pageName = pagenameArray.length > 0 && pagenameArray[0];
        return pageName !== '' ? pageName : defaultPage
    }

    const [activetab, setactivetab] = useState(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE));

    useEffect(() => {
        let activeTabname = getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE);
        let found = educationTeachingSitemap.pages.find(each => each.id === activeTabname);

        if (found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [educationTeachingSitemap.pages, history]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = EducationTeachingData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${educationTeachingSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper educationTeaching-page-wrapper">
                <Header />
                <BannerNavigationContainer data={educationTeachingSitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <Switch>
                    <Route
                        path={`${path}`}
                        exact
                    >
                        <Redirect to={`${path}/resources`} />
                    </Route>
                    <Route
                        path={`${path}/resources`}
                        component={() => <Resources data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/professional_learning`}
                        component={() => <ProfessionalLearning data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/immersive_experiences`}
                        component={() => <ImmersiveExperience data={relatedDataElements} />}
                    />
                    <Route path={`${path}/*`}>
                        <Redirect to={`${path}`} />
                    </Route>
                </Switch>
                <FloatinEarthButton />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default EducationTeachingPage