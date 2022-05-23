import React from 'react'
import { Button } from 'reactstrap'

const FilledButton = (props) => {
  return (
    <Button className={`filled-button ${props.class}`}>
        <span
          dangerouslySetInnerHTML={{
            __html: props.text
          }} 
        />
    </Button>
  )
}

export default FilledButton;