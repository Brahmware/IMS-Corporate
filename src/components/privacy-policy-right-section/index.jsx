import React from 'react'
import { Link } from 'react-router-dom'
import PrivacyPolicyData from "../../data/privacy-policy-sitemap.json"
import scrollToNavigationPanel from '../../utils/scrollToNavigationPanel'

const PrivacyPolicyRightSection = () => {
    return (
        <React.Fragment>
            {
                PrivacyPolicyData[0].pages.map((data, index) => {
                    return (
                        <Link 
                            to={data.path} 
                            key={index}
                            id={data.id}
                            onClick={scrollToNavigationPanel}
                        >
                            {data.page}
                        </Link>
                    )
                })
           }
        </React.Fragment>
    )
}

export default PrivacyPolicyRightSection