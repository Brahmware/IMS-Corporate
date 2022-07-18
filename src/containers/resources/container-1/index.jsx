import React, { useState, useEffect } from 'react'
import ImageCardContainer from '../../common/image-card-container'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import StackedFluidCardsContainer from '../../../containers/common/stacked-fluid-cards-container'
import scrollToFlexBar from '../../../utils/scrollToFlexBar';
import { Switch, useRouteMatch, Redirect, Route  } from 'react-router-dom';

const ResourcesContainerOne = ({ data, fromParent }) => {
    setTimeout(() => !fromParent && window.location.reload(false), 0)

    const history = useHistory().location;

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
    return (
        <div className='resources-container-1 section-with-padding white-background'
            style={{overflow: "hidden"}} // jb tk website responsive nhi bnti
        >
            <StackedFluidCardsContainer
                url={url}
                cards={data}
                activeCard={activeTab}
                handleOnClick={handleOnClick}
            />
        </div>
    )
}

export default ResourcesContainerOne