import React from 'react'
import BannerNewspage from '../../common/bannernewspage'

const NewsPageContainerOne = ({ data }) => {
    return (
        <div className='newspage-container-1'>
            <BannerNewspage data={data[0]} />
        </div>
    )
}

export default NewsPageContainerOne