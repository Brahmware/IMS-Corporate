import React from 'react'
import PrivacyPolicyData from "../../data/privacy-policy-sitemap.json"

const PrivacyPolicyRightSection = () => {
    return (
        <>
            {
                PrivacyPolicyData[0].pages.map((data, index) => {
                    return (
                        <a href={data.path} key={index}>{data.page}</a>
                    )
                })
           }
        </>
    )
}

export default PrivacyPolicyRightSection