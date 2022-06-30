import React from 'react'


const NewsCards = ({ data, heading }) => {
    console.log(data)
    const convertDate = (dateData) => {
        const months = ['Januray', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = dateData.split(',')[0].split('/');
        return `${months[date[1] - 1]} ${date[0]}, ${date[2]}`;
    }
    const image = data.images
    const dateData = new Date(data.date).toLocaleString('en-IN')
    const title = data.title
    // console.log(data.id)
    return (
        <>
            <div className="col" >
                <div className="news-card h-100" id={data.id}>
                    <img
                        src={image}
                        className="news-card-image"
                        alt=""
                    />
                    {

                        !heading ?
                            <div className="news-card-content">
                                <div className='news-card-date text-primary'>
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
                            :
                            <>

                                <div className="small-heading-content">

                                    <div className="subtitle"> <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.subtitle
                                        }}
                                    /></div>
                                    <div className="heading"><span
                                        dangerouslySetInnerHTML={{
                                            __html: data.heading
                                        }}
                                    /></div>
                                    <div className="rating-part">

                                        <div className="stars">@@@@@</div>
                                        <div className="symbol"> 3 4</div>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default NewsCards