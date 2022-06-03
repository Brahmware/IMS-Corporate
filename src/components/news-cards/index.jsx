import React from 'react'


const NewsCards = ({ data}) => {
    const image = data.images
    const dateData = new Date(data.date).toLocaleString('en-IN')
    const title = data.title
    return (
        <>
            <div className="col" >
                <div className="news-card h-100">
                    <img
                        src={image}
                        className="news-card-image"
                        alt=""
                    />
                    <div className="news-card-content">
                        <div className='news-card-date text-primary'>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: dateData
                                }}
                            />
                        </div>
                        <div className='news-card-title'>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: title
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCards