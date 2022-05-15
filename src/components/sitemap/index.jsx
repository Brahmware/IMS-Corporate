import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SiteMapData from "../../data/sitemap.json";
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel';

const SiteMap = (props) => {

    const history = useHistory();
    const currentPath = history.location.pathname;

    const groupmap = {};
    SiteMapData.forEach((data) => {
        const datumList = [];
        data.pages.forEach((datum) => {
            datumList.push(datum.id)
        })
        groupmap[data.id] = datumList
    });

    const navigationOnClick = (event) => {
        props.onClickClose();
        if(groupmap[currentPath].includes(event.target.id)) {
            event.preventDefault();
            scrollToNavigationPanel();
        }
    }
    return (
        <div className='sitemap-wrapper'>
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 row-no-1">
                {
                    SiteMapData.map((group, groupKey) => {
                        return (
                            <div
                                key={groupKey}
                                className="col"
                            >
                                <div className="pagegroup">
                                    <div className="group-title">
                                        <span className='title'>{group.pageGroup}</span>
                                    </div>
                                    <ul>
                                        {
                                            group.pages.map((subgroup, pageKey) => {
                                                return (
                                                    <li className='page' key={pageKey}>
                                                        <a
                                                            id={subgroup.id}
                                                            href={subgroup.path}
                                                            onClick={navigationOnClick}
                                                        >
                                                            {subgroup.page}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SiteMap