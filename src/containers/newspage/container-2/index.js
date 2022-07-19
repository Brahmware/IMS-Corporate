import React from 'react'
import NewsPageBody from '../../../components/newspagebody'

const NewsPageContainerTwo = ({ data }) => {
    return (
        <div className='newspage-container-2 section-with-padding bg-white'>
            <div className="container">
                <NewsPageBody data={data} />
            </div>
        </div>
    )
}

export default NewsPageContainerTwo