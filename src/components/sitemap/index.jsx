import React from 'react';
import "./sitemap.scss";
import SiteMapData from "../../data/sitemap.json";

const SiteMap = () => {
    return (
        <div className='sitemap container-fluid row'>
            {
                SiteMapData.map((group, groupKey) => {
                    return (
                        <div
                            className="pagegroup col-4 py-5"
                            key={groupKey}
                        >
                            <div className="group-title">
                                <span className='title'>{group.pageGroup}</span>
                            </div>
                            <ul>
                                {
                                    group.pages.map((subgroup, pageKey) => {
                                        return (
                                            <li className='page' key={pageKey}>
                                                <a href={subgroup.path}>{subgroup.page}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SiteMap