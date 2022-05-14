import React from 'react'

const BookishCard = ( props ) => {
    return (
        <div className='bookish-card'>
            <div className="title">
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.title
                    }}
                />
            </div>
            <div className="subtitle">
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.subtitle
                    }}
                />
            </div>
            <div className="divider" />
            <div className="content">
                <span
                    dangerouslySetInnerHTML={{
                        __html: props.content
                    }}
                />
            </div>
            {
                props.extracomponents && props.extracomponents.map((eachComponent, key) => {
                    return (
                        <React.Fragment key={key}>
                            { eachComponent }
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default BookishCard