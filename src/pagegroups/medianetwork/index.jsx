import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import SEO from '../../components/SEO'
import BannerNavigationContainer from '../../containers/common/bannernavigationcontainer'
import Footer from '../../containers/footer'
import Header from '../../containers/header'
import BusinessAndBrands from './businessandbrands'
import FocusAreas from './focusareas'
import NewsRoom from './newsroom'
import Technology from './technology'

/* Importing the related data */
import sitemapData from "../../data/sitemap.json"
import MediaNetworkData from "../../data/media-network.json"
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'
import FloatinEarthButton from '../../components/floating-button'

const MediaNetworkPage = () => {
    const PAGE_GROUP_NAME = 'media_network';
    const DEFAULT_PAGE = 'business_and_brands';

    const mediaNetworkSitemap = sitemapData.find(pageGroup => pageGroup.id === PAGE_GROUP_NAME);
    const { url, path } = useRouteMatch();
    const history = useHistory().location;

    const getPageNameFromLink = (history, pageGroupName, defaultPage) => {
        let pathname = history && history.pathname;
        let pathstring = `/${pageGroupName}`;
        let intermediate = pathname.replace(pathstring, "");
        let pageName = intermediate.replace('/', "");
        return pageName !== '' ? pageName : defaultPage
    }

    const [activetab, setactivetab] = useState(getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE));

    useEffect(() => {
        let activeTabname = getPageNameFromLink(history, PAGE_GROUP_NAME, DEFAULT_PAGE);
        let found = mediaNetworkSitemap.pages.find(each => each.id === activeTabname);

        if (found) {
            setactivetab(activeTabname);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [history, mediaNetworkSitemap.pages]);

    const onClickTab = (event) => {
        setactivetab(event.target.id);
        scrollToNavigationPanel();
    }

    const relatedData = MediaNetworkData.find((data => data.id === activetab));
    const relatedDataElements = relatedData && relatedData.elements;

    return (
        <React.Fragment>
            <SEO title={relatedData && `IMS ${mediaNetworkSitemap.pageGroup} - ${relatedData.pagename}`} />
            <div className="page-wrapper media-network-page-wrapper">
                <Header />
                <BannerNavigationContainer data={mediaNetworkSitemap} activetab={activetab} onClickTab={onClickTab} url={url} />
                <Switch>
                    <Route
                        path={`${path}`}
                        exact
                    >
                        <Redirect to={`${path}/business_and_brands`} />
                    </Route>
                    <Route
                        path={`${path}/business_and_brands`}
                        component={() => <BusinessAndBrands data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/focus_areas`}
                        component={() => <FocusAreas data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/technology`}
                        component={() => <Technology data={relatedDataElements} />}
                    />
                    <Route
                        path={`${path}/newsroom`}
                        component={() => <NewsRoom data={relatedDataElements} />}
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

export default MediaNetworkPage