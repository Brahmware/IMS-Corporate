import React from 'react'
import ContentContainer from "../../../containers/common/contentcontainer"

const WebsiteAccessibilityStatement = (props) => {
  const card = props.data[0]
  return (
    <div className=" white-background">
      <ContentContainer card={card} />
    </div>
  )
}

export default WebsiteAccessibilityStatement