import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'
import Explorers from './explorers'
import Producers from './producers'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import CollaboratorsData from '../../data/collaborators.json'
import FloatinEarthButton from '../../components/floating-button'

const CollaboratorsPage = () => {
    const PAGE_GROUP_NAME = 'collaborators';
    const DEFAULT_PAGE = 'explorers';

    const collaboratorsSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME);
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
    // console.log(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE))
    const [activetab, setactivetab] = useState(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE));

    useEffect(() => {
        let activeTabname = getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE);
        let found = collaboratorsSitemap.pages.find(each => each.id === activeTabname);

        if (found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [collaboratorsSitemap.pages, history]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = CollaboratorsData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${collaboratorsSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper collaborators-page-wrapper">
                <Header />
                <BannerNavigationContainer data={collaboratorsSitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <Switch>
                    <Route
                        path={`${path}`}
                        exact
                    >
                        <Redirect to={`${path}/explorers`} />
                    </Route>
                    <Route
                        path={`${path}/explorers`}
                        component={() => <Explorers data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/producers`}
                        component={() => <Producers data={relatedDataElements} />}
                    />
                    <Route path={`${path}/*`}>
                        <Redirect to={`${path}`} />
                    </Route>
                </Switch>
                <Footer />
            </div>
            <FloatinEarthButton />
        </React.Fragment>
    )
}

export default CollaboratorsPage