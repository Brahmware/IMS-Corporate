import React from 'react'
import ContentContainer from "../../../containers/common/contentcontainer"

const VisitorAgreement = (props) => {
    const card = props.data[0]

    return (
        <div className=" white-background">
            <div className="container">
                <ContentContainer card={card} />
            </div>
        </div>
    )
}

export default VisitorAgreement