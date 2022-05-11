import React from 'react';
import SiteMapData from "../../data/sitemap.json";

const SiteMap = () => {
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
                                                        <a href={subgroup.path}>{subgroup.page}</a>
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