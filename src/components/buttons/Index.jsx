import React from 'react'
import { Button } from 'reactstrap'

const IconButton = ({ iconComponent, buttonOnclick }) => {
    return (
        <Button
            className={"icon-button"}
            onClick={buttonOnclick}
        >
            {iconComponent}
        </Button>
    )
}

export default IconButton