import React from 'react'

const FrequentlyAskedQuestion = ({ data }) => {
    // console.log(data)
    return (
        <div>
            <div className="divider"></div>

            {
                data.map((data, index) => {
                    return (
                        <div  key={index} >
                            <div className="que-ans">
                                <div className="question">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.que
                                        }}
                                    />
                                </div>
                                <div className="answer">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.ans
                                        }}
                                    />
                                </div>
                                <div className="time">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.time
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='divider'></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FrequentlyAskedQuestion