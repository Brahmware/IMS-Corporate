import React from 'react'


const BigNewsCard = ({ data}) => {
    const convertDate = (dateData) => {
        const months=['Januray','Feburary','March','April','May','June','July','August','September','October','November','December'];
        const date= dateData.split(',')[0].split('/');
        return `${months[date[1]-1]} ${date[0]}, ${date[2]}`;  
    }
    const image = data.images
    const dateData = new Date(data.date).toLocaleString('en-IN')
    const title = (data.title.length >170 ) ? data.title.substring(0, 170) + '...' : data.title;
    return (
        <>
            <div className="news-card h-100">
                <img
                    src={image}
                    className="news-card-image big-news-card-image"
                    alt=""
                />
                <div className="news-card-content">
                    <div className='news-card-date text-primary mt-3'>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: convertDate(dateData)
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
        </>
    )
}

export default BigNewsCard