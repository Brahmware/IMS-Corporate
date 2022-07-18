import React, { useState, useEffect } from 'react'
import { Switch, useRouteMatch, Redirect, Route  } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import StackedFluidCardsContainer from '../../../containers/common/stacked-fluid-cards-container'
import scrollToFlexBar from '../../../utils/scrollToFlexBar';
import IntellectualProperties from './intellectualproperties';
import Magazines from './magazines';
import MotionPictures from './motionpictures';
import StudioOperations from './studiooperations';
import TVNetwork from './tvnetwork';
import PhysicalExperiences from './physicalexperiences';
import Radio from './radio';

const BusinessAndBrands = ({ data, fromParent }) => {
    
    setTimeout(() => !fromParent && window.location.reload(false), 0)

    const history = useHistory().location;
    // console.log(history);

    const { url, path } = useRouteMatch();
    const DEFAULT_PAGE = data[0].id;

    const getPageNameFromLink = (history, defaultPage) => {
        let pathname = history && history.pathname;
        let pagenameArray = pathname.split('/');
        let pageName = pagenameArray.length > 0 && pagenameArray[3] && pagenameArray[3].replace(/'/g,'');
        return pageName && pageName !== '' ? pageName : defaultPage
    }
    const [activeTab, setactivetab] = useState(getPageNameFromLink(history, DEFAULT_PAGE));

    const handleOnClick = (activeElement) => {
        setactivetab(activeElement.id);
        scrollToFlexBar();
    }


    useEffect(() => {
        let activeTab = getPageNameFromLink(history, DEFAULT_PAGE);
        let found = data.find(each => each.id === activeTab);

        if (found) {
            setactivetab(activeTab);
        } else {
            setactivetab(DEFAULT_PAGE);
        }
    }, [DEFAULT_PAGE, data, history]);

    const dataTVNetwork = data.find(element => element.id === 'tv_network');
    const dataPhysicalExperiences = data.find(element => element.id === 'physical_experiences');
    const dataMagazines = data.find(element => element.id === 'magazines');
    const dataStudioOperations = data.find(element => element.id === 'studio_operations');
    const dataMotionPictures = data.find(element => element.id === 'motion_pictures');
    const dataIntellectualProperties = data.find(element => element.id === 'intellectual_properties');
    const dataRadio = data.find(element => element.id === 'radio');

    return (
        <div className="business-and-brands-page">
            <StackedFluidCardsContainer
                url={url}
                cards={data}
                activeCard={activeTab}
                handleOnClick={handleOnClick}
            />
            <Switch>
                <Route
                    path={`${path}`}
                    exact
                >
                    <Redirect to={`${path}/tv_network`} />
                </Route>
                <Route path={`${path}/tv_network`} component={() => <TVNetwork data={dataTVNetwork.elements} />} />
                {/* <Route path={`${path}/motion_pictures`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} />
                <Route path={`${path}/radio`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} />
                <Route path={`${path}/magazines`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} />
                <Route path={`${path}/consumer_products`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} />
                <Route path={`${path}/studio_operations`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} /> */}
                <Route path={`${path}/physical_experiences`} component={() => <PhysicalExperiences data={dataPhysicalExperiences.elements} />}/>
                {/* <Route path={`${path}/intellectual_properties`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} /> */}
                <Route path={`${path}/magazines`} component={() => <Magazines data={dataMagazines.elements}/>} />
                <Route path={`${path}/radio`} component={() => <Radio data={dataRadio.elements}/>} />
                <Route path={`${path}/motion_pictures`} component={() => <MotionPictures data={dataMotionPictures.elements}/>} />
                {/* <Route path={`${path}/consumer_products`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} /> */}
                <Route path={`${path}/studio_operations`} component={() => <StudioOperations data={dataStudioOperations.elements}/>} />
                {/* <Route path={`${path}/physical_experiences`} component={() => {<TVNetwork data={dataTVNetwork.elements}/>}} /> */}
                <Route path={`${path}/intellectual_properties`} component={() => <IntellectualProperties data={dataIntellectualProperties.elements}/>} />
            </Switch>
        </div>
    )
}

export default BusinessAndBrands