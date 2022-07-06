import React from 'react'
import ContentContainer from "../../../../containers/common/contentcontainer"

const Speech = (props) => {
  const card = props.data[0]
  console.log(card)
    return (
        <div className=" white-background">
            <div className="container">
                <ContentContainer card={card} />
            </div>
        </div>
    )
}

export default Speech