import React from 'react'
import MemberContainerOne from './container-1'
import MemberContainerTwo from './container-2'

const Member = (props) => {
    const card = props.data
    return (
        <>
            <MemberContainerOne card={ card} />
            <MemberContainerTwo card={ card} />
       </>
    )
}

export default Member