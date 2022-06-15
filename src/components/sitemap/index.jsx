import React from 'react';
import SiteMapData from "../../data/sitemap.json";
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel';

const SiteMap = (props) => {

    const navigationOnClick = () => {
        props.onClickClose && props.onClickClose();
        scrollToNavigationPanel();
    }

    return (
        <div className='sitemap-wrapper noselect'>
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 row-no-1">
                {
                    SiteMapData.map((group, groupKey) => {
                        return (
                            <div
                                key={groupKey}
                                id={group.id}
                                className="col"
                            >
                                <div 
                                    className="pagegroup"
                                    data-megamenumedia = {group.megamenumedia}
                                    onMouseEnter={props.onMouseOver && props.onMouseOver}
                                >
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